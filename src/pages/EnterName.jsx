import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { ref ,set,push} from "firebase/database";

import { realtimeDb } from "../Firebase";

const EnterName = () => {
  const navigate = useNavigate();
  const { setUser, user,currentRoom } = useContext(AuthContext);
  const [nameValue, setNameValue] = useState("");
  console.log(currentRoom)
  const clickFunction = async (e) => {
    e.preventDefault();
    const postChatRef = ref(realtimeDb, "chats/" + currentRoom.uid);
    const newChatRef = push(postChatRef);
    set(newChatRef, {
      type: "userAdd",
      user: nameValue,
      value:"joined the room.",
    });
    await setUser(nameValue);
    navigate("/");
  };
  return (
    <div className="enterName">
      <div>Enter your name to Continue</div>
      <form onSubmit={clickFunction}>
        <input
          required
          type="text"
          id="nameValue"
          value={nameValue}
          onChange={(e) => setNameValue(e.target.value)}
        />
        <button type="submit">Continue</button>
      </form>
    </div>
  );
};

export default EnterName;
