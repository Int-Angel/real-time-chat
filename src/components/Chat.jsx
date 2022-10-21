import React from 'react'
import CamImg from '../img/cam.png'
import AddImg from '../img/add.png'
import MoreImg from '../img/more.png'

function Chat() {
  return (
    <div className='chat'>
      <div className="chatInfo">
        <span>Name</span>
        <div className="chatIcons">
          <img src={CamImg} alt=""/>
          <img src={AddImg} alt=""/>
          <img src={MoreImg} alt=""/>
        </div>
      </div>
    </div>
  )
}

export default Chat