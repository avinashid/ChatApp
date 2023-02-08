import React, { useContext } from "react";
import { auth } from "../Firebase";
import { signOut } from "firebase/auth";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { set } from "firebase/database";

const Navbar = () => {
  const currentRoom = useContext(AuthContext).currentRoom;
  const { setUser } = useContext(AuthContext);

  const leaveFunction = async ()=>{
    await signOut(auth);
    setUser("");

  }
  return (
    <div className="navbar">
        <div className="roomName" >{currentRoom.email}</div>
        <div className="rightNav"onClick={leaveFunction}>
            <button>Leave</button>
        </div>

    </div>
  );
};

export default Navbar;
