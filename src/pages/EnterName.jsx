import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const EnterName = () => {
const navigate = useNavigate();
  const { setUser,user } = useContext(AuthContext);
  const [nameValue, setNameValue] = useState("");
  const clickFunction=(e)=>{
    e.preventDefault();
    setUser(nameValue);
    navigate("/");
  }
  return (
    <div className="enterName">
      <div>Enter your name to Continue</div>
      <form onSubmit={clickFunction}>
      <input
      required
        type="text"
        id="nameValue"
        value={nameValue}
        onChange={(e) => setNameValue(e.target.value)}
      />
      <button type="submit" >Continue</button>
      </form>
    </div>
  );
};

export default EnterName;
