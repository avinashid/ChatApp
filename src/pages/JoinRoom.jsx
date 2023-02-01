import React from 'react'

const JoinRoom = () => {
  return (
    <div className="formContainer">
        <div className="formWrapper">
        <span className='logo'>ChatApp</span>
        <span className="title">Create Room</span>
            <form  action="">
                <input type="text" name="" id="" placeholder='Room Name' required/>
                <input type="password" name="" id="" placeholder='Room Password' required />
                <button type="submit">Join Room</button>
  
            </form>
            <p>
              Don't have a room ? Create.
            </p>
        </div>
    </div>
    
  )
}

export default JoinRoom