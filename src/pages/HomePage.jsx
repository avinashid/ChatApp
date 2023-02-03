import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../Firebase";
import Navbar from "../components/Navbar";
import ChatSection from "../components/ChatSection";
import ChatInput from "../components/ChatInput";
const HomePage = () => {
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
