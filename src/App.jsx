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
            <Route path="EnterName" element={<EnterName/>}/>
          </Route>
        </Routes>
      </HashRouter>
    </>
  );
};
const ProtectedRoute = () => {
  const { currentRoom,user } = useContext(AuthContext);
  console.log(user)
  const navigate = useNavigate();

  if (!currentRoom) {
    navigate("/JoinRoom");
    return null;
  }
  else{
    if(!user){
      navigate("/EnterName");
    }else{
      return <HomePage/>
    }
  }
  return <HomePage/>
};

export default App;
