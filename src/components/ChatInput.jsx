import React from 'react'
import {AiOutlineSend} from "react-icons/ai";


const ChatInput = () => {
  return (
    <div className='chatInput'>
        <input type="text" placeholder='Message'/>
        <AiOutlineSend className='sendIcon'/>
 
    </div>
  )
}

export default ChatInput