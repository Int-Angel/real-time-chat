import React from 'react'
import CamImg from '../img/cam.png'
import AddImg from '../img/add.png'
import MoreImg from '../img/more.png'
import Messages from './Messages'
import Input from './Input'

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
      <Messages/>
      <Input/>
    </div>
  )
}

export default Chat