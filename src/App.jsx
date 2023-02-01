import React from 'react'
import Firebase from './Firebase'
import CreateRoom from './pages/CreateRoom'
import JoinRoom from './pages/JoinRoom'
import HomePage from './pages/HomePage'
import './Style.scss'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
const App = () => {
  return (

    <>
      <CreateRoom />
    </>
  )
}

export default App