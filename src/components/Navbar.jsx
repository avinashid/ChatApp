import React, { useContext, useEffect } from "react";
import { auth } from "../Firebase";
import { signOut } from "firebase/auth";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { set ,push,ref} from "firebase/database";
import { realtimeDb } from "../Firebase";

const Navbar = () => {
  const { currentRoom, setUser,user } = useContext(AuthContext);
  console.log(currentRoom)
  const leaveFunction = async () => {
    const postChatRef = ref(realtimeDb, "chats/" + currentRoom.uid);
    const newChatRef = push(postChatRef);
    set(newChatRef, {
      type: "userAdd",
      user: user,
      value:"left the room.",
    });
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
