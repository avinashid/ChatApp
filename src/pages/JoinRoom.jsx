import React ,{useState}from 'react'
import { Navigate, useNavigate,Link } from 'react-router-dom';
import { auth } from '../Firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';

const JoinRoom = () => {
  const [err,setErr]=useState("");
  const navigate = useNavigate();
  const handleSubmit=async (e)=>{
    e.preventDefault();
    const roomName = e.target[0].value;
    const password = e.target[1].value;

    try{
      await signInWithEmailAndPassword(auth,`${roomName}@chatApp.com`,password);

      navigate("/ChatApp/")
    }catch(err){
      setErr(err.message)
    }
  }
  return (
    <div className="formContainer">
        <div className="formWrapper">
        <span className='logo'>ChatApp</span>
        <span className="title">Join Room</span>
            <form  action="" onSubmit={handleSubmit}>
                <input type="text" name="" id="" placeholder='Room Name' required/>
                <input type="password" name="" id="" placeholder='Room Password' required />
                <button type="submit">Join Room</button>
  
            </form>
            <p>
              Don't have a room ? <Link to="/ChatApp/CreateRoom">Create</Link>
            </p>
            <span>{err}</span>
        </div>
    </div>
    
  )
}

export default JoinRoom