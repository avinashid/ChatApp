import { onAuthStateChanged } from "firebase/auth";
import { useState } from "react";
import { createContext } from "react";
import { useEffect } from "react";
import { auth } from "../Firebase";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  if(!localStorage.getItem("uniqueUserChatApp")) localStorage.setItem("uniqueUserChatApp", "");
  const [currentRoom, setCurrentRoom] = useState({});
  const [user,setUser] = useState(localStorage.getItem("uniqueUserChatApp"));
  localStorage.setItem("uniqueUserChatApp",user);
  console.log(localStorage.getItem("uniqueUserChatApp"))
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      setCurrentRoom(user);
    });
    return () => {
      unsub();
    };
  }, []);

  return (
    <AuthContext.Provider value={{ currentRoom,user,setUser }}>
      {children}
    </AuthContext.Provider>
  );
};
