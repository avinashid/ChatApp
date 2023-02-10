import React, { useContext, useEffect } from "react";
import { auth } from "../Firebase";
import { signOut } from "firebase/auth";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { set } from "firebase/database";

const Navbar = () => {
  const { currentRoom, setUser } = useContext(AuthContext);
  const leaveFunction = async () => {
    await signOut(auth);
    setUser("");
  };
  return (
    <div className="navbar">
      <div className="roomName">
        {currentRoom && currentRoom.email
          ? currentRoom.email.substring(0, currentRoom.email.length - 12)
          : ""}
      </div>
      <div className="rightNav" onClick={leaveFunction}>
        <button>Leave</button>
      </div>
    </div>
  );
};

export default Navbar;
