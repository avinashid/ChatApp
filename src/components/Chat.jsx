import React from "react";

const Chat = ({ userName, message }) => {
  return (
    <>
      <div className="chat">
        <div className="chatUser">{userName}</div>
        <div className="chatMessage">{message}asdfasfs</div>
      </div>
      <div className="chatR">
      <div className="chatUser">{userName}</div>
        <div className="chatMessage">{message}asdfasfs</div>
      </div>
    </>
  );
};

export default Chat;
