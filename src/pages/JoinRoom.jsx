import React ,{useContext, useState}from 'react'
import { Navigate, useNavigate,Link } from 'react-router-dom';
import { auth } from '../Firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { AuthContext } from '../context/AuthContext';

const JoinRoom = () => {
  const [err,setErr]=useState("");
  const {setUser} = useContext(AuthContext);
  const navigate = useNavigate();
  const handleSubmit=async (e)=>{
    // await setUser("");
    e.preventDefault();
    const roomName = e.target[0].value;
    const password = e.target[1].value;
    try{
      await signInWithEmailAndPassword(auth,`${roomName}@chatApp.com`,password);
      navigate("/EnterName")
    }catch(err){
      setErr(err.message)
    }
  }
  return (
    <div className="formContainer">
        <div className="formWrapper">
        <div className='logo'>ChatApp</div>
        <div className="title">Join Room</div>
            <form  action="" onSubmit={handleSubmit}>
                <input type="text" name="" id="name" placeholder='Room Name' required/>
                <input type="password" name="password" id="" placeholder='Room Password' required />
                <button type="submit">Join Room</button>
  
            </form>
            <p>
              Don't have a room ? <Link to="/CreateRoom">Create</Link>
            </p>
            <span>{err}</span>
        </div>
    </div>
    
  )
}

export default JoinRoom