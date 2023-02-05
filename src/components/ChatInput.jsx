import React from "react";
import { useState } from "react";
import { AiOutlineSend } from "react-icons/ai";
import {  ref, push, set } from "firebase/database";
import { realtimeDb } from "../Firebase";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

// Create a new post reference with an auto-generated id


const ChatInput = () => {
  const currentRoom = useContext(AuthContext).currentRoom;
  const {user} = useContext(AuthContext);
  console.log(user)
  const [chat, setChat] = useState("");
  const updateChats = () => {
    const postChatRef = ref(realtimeDb, "chats/"+currentRoom.uid);
    const newChatRef = push(postChatRef);
    set(newChatRef, {
      type:"text",
      user:user,
      value:chat,
    });
  };

  return (
    <div className="chatInput">
      <input
        value={chat}
        onChange={(e) => setChat(e.target.value)}
        type="text"
        placeholder="Message"
      />
      <AiOutlineSend onClick={updateChats} className="sendIcon" />
    </div>
  );
};

export default ChatInput;
