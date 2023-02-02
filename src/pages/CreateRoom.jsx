import React from "react";
import { auth, storage ,db} from "../Firebase";
import { createUserWithEmailAndPassword,updateProfile } from "firebase/auth";
import { useState } from "react";
import { BsFillFileEarmarkImageFill as Pic } from "react-icons/bs";
import { doc, setDoc } from "firebase/firestore"; 
import {
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { Link } from "react-router-dom";

const CreateRoom = () => {
  let [err, setErr] = useState();
  let [profilePic, setProfilePic] = useState("Room Image");
  const handleSubmit = async (e) => {
    e.preventDefault();
    const userName = e.target[0].value;
    const password = e.target[1].value;
    const confirmPassword = e.target[2].value;
    const file = e.target[3].files[0];
    console.log(e.target[3].value);
    try {
      const res = await createUserWithEmailAndPassword(
        auth,
        `${userName}@chatApp.com`,
        password
      );
      const storageRef = ref(storage, "userName");

      const uploadTask = uploadBytesResumable(storageRef, file);
      uploadTask.on(
        (error) => {
          setErr(error.message)
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then( async (downloadURL) => {
            console.log("File available at", downloadURL);
            await updateProfile(res.user,{
              userName,
              photoURL:downloadURL
            });
            await setDoc(doc(db, "room", res.user.uid), {
              uid:res.user.uid,
              userName,
              photoURL:downloadURL,
            });
          });
        }
      );
      console.log(res);
      setErr();
    } catch (err) {
      setErr(err.message);
    }
  };
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">ChatApp</span>
        <span className="title">Create Room</span>
        <form onSubmit={handleSubmit}>
          <input type="text" name="" id="" placeholder="Room Name" required />
          <input
            type="password"
            name=""
            id=""
            placeholder="Room Password"
            required
          />
          <input
            type="password"
            name=""
            id=""
            placeholder="Confirm Password"
            required
          />
          <label htmlFor="avatar">
            <div className="pic">
              <Pic />
            </div>
            <div className="picDesc">{profilePic}</div>
          </label>
          <input
            style={{ display: "none" }}
            type="file"
            accept="image/*"
            name="avatar"
            id="avatar"
            onChange={(e) =>
              e.target.value
                ? setProfilePic(e.target.value)
                : setProfilePic("File Not Selected")
            }
          />
          <button type="submit">Create Room</button>
          {err && <span>`Something Went Wrong {err}`</span>}
        </form>
        <p>Already have a room ? <Link to='/ChatApp/JoinRoom'>Join</Link></p>
      </div>
    </div>
  );
};

export default CreateRoom;
