import React from "react";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Chat = ({ userName, message, type }) => {
  const { user } = useContext(AuthContext);
  const chatOrder = user === userName ? "chatR" : "chat";
  let text = "";
  switch (type) {
    case "text":
      text = <div className="chatMessage">{message}</div>;
      break;
    case "audio":
      text = (
        <div>
          <audio controls>
            <source src={message} type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
        </div>
      );
      break;
    case "image":
      text = <div className="imageContainer">
        <img className="imageContainer" src={message}/>
      </div>;
      break;
    default:
      text = <div>{ message }</div>;
      break;
  }
  return (
    <>
      <div className={chatOrder}>
        <div className="chatUser">{userName}</div>
        {text}
      </div>
      {/* <div className="chatR">
      <div className="chatUser">{userName}</div>
        <div className="chatMessage">{message}asdfasfs</div>
      </div> */}
    </>
  );
};

export default Chat;
