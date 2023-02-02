import { onAuthStateChanged } from "firebase/auth";
import { useState } from "react";
import { createContext } from "react";
import { useEffect } from "react";
import { auth } from "../Firebase";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currentRoom, setCurrentRoom] = useState({});
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      setCurrentRoom(user);
    });

    return () => {
      unsub();
    };
  }, []);

  return (
    <AuthContext.Provider value={{ currentRoom }}>
      {children}
    </AuthContext.Provider>
  );
};
