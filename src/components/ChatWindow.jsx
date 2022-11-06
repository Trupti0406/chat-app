import React from 'react'
import Messages from './Messages'
import Input from './Input'

const ChatWindow = () => {
  return (
    <div className='chat'>
      <div className="chatInfo">
        <span>Jane</span>
      </div>
      <Messages/>
      <Input/>
    </div>
  )
}

export default ChatWindow