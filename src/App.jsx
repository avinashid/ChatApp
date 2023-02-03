import React from "react";
import Firebase from "./Firebase";
import CreateRoom from "./pages/CreateRoom";
import JoinRoom from "./pages/JoinRoom";
import HomePage from "./pages/HomePage";
import "./Style.scss";
import { BrowserRouter, Routes, Route, Navigate, HashRouter, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";

const App = () => {
  const { currentRoom } = useContext(AuthContext);
  console.log(currentRoom);
  const ProtectedRoute = ({ children }) => {
    if (!currentRoom) {
      return <JoinRoom></JoinRoom>
    } else {
      return <HomePage />;
    }
  };
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/">
            <Route index element={<ProtectedRoute></ProtectedRoute>} />
            <Route path="CreateRoom" element={<CreateRoom />} />
            <Route path="JoinRoom" element={<JoinRoom />} />
          </Route>
        </Routes>
      </HashRouter>
    </>
  );
};

export default App;
