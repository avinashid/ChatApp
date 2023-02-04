import React from "react";
import CreateRoom from "./pages/CreateRoom";
import JoinRoom from "./pages/JoinRoom";
import HomePage from "./pages/HomePage";
import "./Style.scss";
import {
  Routes,
  Route,
  HashRouter,
  useNavigate,
} from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";

const App = () => {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/">
            <Route index element={<ProtectedRoute />} />
            <Route path="CreateRoom" element={<CreateRoom />} />
            <Route path="JoinRoom" element={<JoinRoom />} />
          </Route>
        </Routes>
      </HashRouter>
    </>
  );
};
const ProtectedRoute = () => {
  const { currentRoom } = useContext(AuthContext);
  const navigate = useNavigate();

  if (!currentRoom) {
    navigate("/JoinRoom");
    return null;
  }
  return <HomePage />;
};

export default App;
