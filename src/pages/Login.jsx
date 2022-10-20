import React from 'react'
import AddImage from '../img/addAvatar.png'

const Login = () => {
  return (
    <div className='formContainer'>
        <div className='formWrapper'>
            <span className='logo'>Messenger</span>
            <span className='title'>Login</span>
            <form>
                <input type="email" placeholder='email'/>
                <input type="password" placeholder='password'/>
                <button>Sign in</button>
            </form>
            <p>You don't have and account? Register</p>
        </div>
    </div>
  )
}

export default Login