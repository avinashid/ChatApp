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
  RouterProvider,
} from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import EnterName from "./pages/EnterName";

const App = () => {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/">
            <Route index element={<ProtectedRoute />} />
            <Route path="CreateRoom" element={<CreateRoom />} />
            <Route path="JoinRoom" element={<JoinRoom />} />
            <Route path="EnterName" element={<EnterName />} />
          </Route>
        </Routes>
      </HashRouter>
    </>
  );
};
const ProtectedRoute =   () =>  {
  const syncFunc = ()=>{
    const { currentRoom,setUser } = useContext(AuthContext)
    return [currentRoom,setUser]
  }
  const [currentRoom,setUser]=syncFunc();
  const navigate = useNavigate();
  if (!currentRoom) {
    navigate("/JoinRoom");
  }
  else return <HomePage/>
};

export default App;
