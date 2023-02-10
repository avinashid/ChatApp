import React, { useContext, useState } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../Firebase";
import Navbar from "../components/Navbar";
import ChatSection from "../components/ChatSection";
import ChatInput from "../components/ChatInput";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
const HomePage = () => {
  const {user} = useContext(AuthContext);
  const navigate = useNavigate();
  if(!user) navigate("/EnterName")
  return (
    <div className="homePage">
      <Navbar />
      <ChatSection />
      <div className="homeFooter">
        <ChatInput />
      </div>
    </div>
  );
};

export default HomePage;
