import React from "react";
import { useState, useRef, useEffect } from "react";
import { ref, push, set } from "firebase/database";
import { realtimeDb, storage } from "../Firebase";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { MdMusicNote, MdAddPhotoAlternate, MdSend } from "react-icons/md";
import {
  ref as storeRef,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";

const ChatInput = () => {
  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const currentRoom = useContext(AuthContext).currentRoom;
  const { user } = useContext(AuthContext);
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
  const addAudio = (e) => {
    const file = e.target.files[0];
    const storageRef = storeRef(storage, file.name);
    const uploadTask = uploadBytesResumable(storageRef, file);
    uploadTask.on(
      "state_changed",
      (snapshot) => {},
      (error) => {
        console.log(error.message);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          const postChatRef = ref(realtimeDb, "chats/" + currentRoom.uid);
          const newChatRef = push(postChatRef);
          set(newChatRef, {
            type: "audio",
            user: user,
            value: downloadURL,
          });
        });
      }
    );
  };
  const addImage = (e) => {
    const file = e.target.files[0];
    const storageRef = storeRef(storage, file.name);
    const uploadTask = uploadBytesResumable(storageRef, file);
    uploadTask.on(
      "state_changed",
      (snapshot) => {},
      (error) => {
        console.log(error.message);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          const postChatRef = ref(realtimeDb, "chats/" + currentRoom.uid);
          const newChatRef = push(postChatRef);
          set(newChatRef, {
            type: "image",
            user: user,
            value: downloadURL,
          });
        });
      }
    );
  };
  return (
    <div className="chatInput">
      <input
        autocomplete="off"
        ref={inputRef}
        id="chatInput"
        value={chat}
        onChange={(e) => setChat(e.target.value)}
        type="text"
        placeholder="Message"
        onKeyDown={handleKeyPress}
      />
      <div className="inputFunction">
        <label htmlFor="audioFile">
          <MdMusicNote />
        </label>
        <input
          style={{ display: "none" }}
          type="file"
          accept="audio/*"
          name="audioFile"
          id="audioFile"
          onChange={addAudio}
        />
        <label htmlFor="imageFile">
          <MdAddPhotoAlternate />
        </label>
        <input
          style={{ display: "none" }}
          type="file"
          accept="image/*"
          name="imageFile"
          id="imageFile"
          onChange={addImage}
        />
        <MdSend onClick={updateChats} className="sendIcon" />
      </div>
    </div>
  );
};

export default ChatInput;
