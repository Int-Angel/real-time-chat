import React from 'react'
import AttachImage from '../img/attach.png'
import ImgImage from '../img/img.png'

function Input() {
  return (
    <div className='input'>
      <input type="text" placeholder='Type something...'/>
      <div className='send'>
        <img src={AttachImage} alt=""/>
        <input type="file" style={{display:"none"}} id="file"/>
        <label htmlFor='file'>
          <img src={ImgImage} alt=""/>
        </label>
        <button>send</button>
      </div>
    </div>
  )
}

export default Input