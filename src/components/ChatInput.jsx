import React from "react";
import { useState, useRef, useEffect } from "react";
import { AiOutlineSend } from "react-icons/ai";
import { ref, push, set } from "firebase/database";
import { realtimeDb } from "../Firebase";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const ChatInput = () => {
  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current.focus();
  }, []); // Only run the effect on mount.

  const currentRoom = useContext(AuthContext).currentRoom;
  const { user } = useContext(AuthContext);
  console.log(user);
  const [chat, setChat] = useState("");
  const updateChats = () => {
    if (chat != "") {
      const postChatRef = ref(realtimeDb, "chats/" + currentRoom.uid);
      const newChatRef = push(postChatRef);
      set(newChatRef, {
        type: "text",
        user: user,
        value: chat,
      });
      setChat("");
    }
  };
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      updateChats();
    }
  };

  return (
    <div className="chatInput">
      <input
        ref={inputRef}
        value={chat}
        onChange={(e) => setChat(e.target.value)}
        type="text"
        placeholder="Message"
        onKeyDown={handleKeyPress}
      />
      <AiOutlineSend onClick={updateChats} className="sendIcon" />
    </div>
  );
};

export default ChatInput;
