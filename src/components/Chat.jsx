import React from "react";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Chat = ({ userName, message }) => {
  const {user} = useContext(AuthContext);
  const chatOrder = user===userName?"chatR":"chat";
  return (
    <>
      <div className={chatOrder}>
        <div className="chatUser">{userName}</div>
        <div className="chatMessage">{message}</div>
      </div>
      {/* <div className="chatR">
      <div className="chatUser">{userName}</div>
        <div className="chatMessage">{message}asdfasfs</div>
      </div> */}
    </>
  );
};

export default Chat;
