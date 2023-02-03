import React, { useContext } from "react";
import { auth } from "../Firebase";
import { signOut } from "firebase/auth";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
  const currentRoom = useContext(AuthContext).currentRoom;
  console.log(currentRoom);
  return (
    <div className="navbar">
        <div className="roomName" >{currentRoom.email}</div>
        <div className="rightNav"onClick={() => signOut(auth)}>
            <button>Leave</button>
        </div>

    </div>
  );
};

export default Navbar;
