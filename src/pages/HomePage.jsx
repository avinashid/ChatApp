import React from 'react'
import { signOut } from 'firebase/auth'
import {auth} from '../Firebase'
const HomePage = () => {
  return (
    <div onClick={()=>signOut(auth)}>HomePage</div>
  )
}

export default HomePage