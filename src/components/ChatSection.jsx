import React, { useRef, useEffect } from "react";
import Chat from "./Chat";

const ChatSection = () => {
  const chatContainerRef = useRef(null);

  useEffect(() => {
    chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
  }, [chatContainerRef]);
  return (
    <div className="chatSection">
      <div ref={chatContainerRef}></div>
      <Chat userName="UserName" message="Message" />
      <Chat userName="UserName" message="Message" />
      <Chat userName="UserName" message="Message" />
      <Chat userName="UserName" message="Message" />
      <Chat userName="UserName" message="Message" />
    </div>
  );
};

export default ChatSection;
