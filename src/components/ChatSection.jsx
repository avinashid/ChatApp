import React, { useRef, useEffect } from "react";
import { realtimeDb } from "../Firebase";
import Chat from "./Chat";
import { ref, onValue } from "firebase/database";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useState } from "react";

const ChatSection = () => {
  const currentRoom = useContext(AuthContext).currentRoom;
  const [messages, setMessages] = useState([]);
  const scrollRef = useRef(null);
  useEffect(() => {
    scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [scrollRef]);
  


  useEffect(() => {
    const chatRef = ref(realtimeDb, "chats/" + currentRoom.uid);
    onValue(chatRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const newMessages = Object.keys(data).map((key) => {
          return (
            <Chat
              key={key}
              userName={data[key].user}
              message={data[key].value}
            />
          );
        }).reverse();
        setMessages(newMessages);
      }
    });
  }, [currentRoom]);
  return (
    <div className="chatSection">
      <div ref={scrollRef}></div>
      {messages}
    </div>
  );
};

export default ChatSection;
