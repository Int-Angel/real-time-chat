import React, { useState } from "react";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";
import { auth, storage, db } from "../firebase.js";
import AddImage from "../img/addAvatar.png";

const Register = () => {
  const [error, setError] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const userName = event.target[0].value;
    const email = event.target[1].value;
    const password = event.target[2].value;
    const image = event.target[3].files[0];

    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);

      const storageRef = ref(storage, userName);
      const uploadTask = uploadBytesResumable(storageRef, image);
      uploadTask.on(
        (e) => {
          setError(true);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            await updateProfile(res.user, {
              displayName: userName,
              photoURL: downloadURL,
            });
            await setDoc(doc(db, "users", res.user.uid), {
              uid: res.user.uid,
              displayName: userName,
              email,
              photoURL: downloadURL,
            });
            await setDoc(doc(db, "userChats", res.user.uid), {});
          });
        }
      );
    } catch (err) {
      console.log(err);
      setError(true);
    }
  };

  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Messenger</span>
        <span className="title">Register</span>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="username" />
          <input type="email" placeholder="email" />
          <input type="password" placeholder="password" />
          <input style={{ display: "none" }} type="file" id="file" />
          <label htmlFor="file">
            <img src={AddImage} alt="add image" />
            <span>Add an image</span>
          </label>
          <button>Sign Up</button>
          {error && <span>Error</span>}
        </form>
        <p>You do have an account? Login</p>
      </div>
    </div>
  );
};

export default Register;
