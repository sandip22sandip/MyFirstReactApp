import React, { useContext, useState } from "react";
import {
  setDoc,
  doc,
  updateDoc,
  serverTimestamp,
  getDoc,
} from "firebase/firestore";

import demo_user from "../../assets/images/users/no-avatar.jpg";
import add from "../../assets/images/chat-imgs/add.png";
import { db } from "../../utils/firebase";
import { useSelector } from "react-redux";
import { axiosInstance } from "../../utils/axiosInstance";
import { ChatContext } from "../../context/ChatContext";

const ChatSearch = () => {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);
  const [err, setErr] = useState(false);

  const currentUser = useSelector((state) => state.user.currentUser);
  const { dispatch } = useContext(ChatContext);

  const handleSearch = async () => {
    try {
      const res = await axiosInstance.get("rest.php", {
        params: {
          q: "/restAPI/user/getUserDetailsFromName",
          auth: sessionStorage.getItem("AuthToken"),
          name: username,
        },
      });
      // console.log(res.data.error);
      if (res.data.details) {
        setErr(false);
        setUser(res.data.details);
      } else {
        setErr(true);
        setUser("");
      }
    } catch (err) {
      setUser("");
      setErr(true);
    }
  };

  const handleKey = (e) => {
    e.code === "Enter" && handleSearch();
  };

  const handleSelect = async () => {
    //check whether the group(chats in firestore) exists, if not create
    const combinedId =
      currentUser.idst > user.idst
        ? currentUser.idst + user.idst
        : user.idst + currentUser.idst;
    try {
      const rescUChats = await getDoc(doc(db, "userChats", currentUser.idst));
      if (!rescUChats.exists()) {
        await setDoc(doc(db, "userChats", currentUser.idst), {});
      }

      const resUChats = await getDoc(doc(db, "userChats", user.idst));
      if (!resUChats.exists()) {
        await setDoc(doc(db, "userChats", user.idst), {});
      }

      const res = await getDoc(doc(db, "chats", combinedId));

      if (!res.exists()) {
        //create a chat in chats collection
        await setDoc(doc(db, "chats", combinedId), { messages: [] });

        //create user chats
        await updateDoc(doc(db, "userChats", currentUser.idst), {
          [combinedId + ".userInfo"]: {
            idst: user.idst,
            displayName: user.FullName,
            photoURL: user.avatar,
          },
          [combinedId + ".date"]: serverTimestamp(),
        });

        await updateDoc(doc(db, "userChats", user.idst), {
          [combinedId + ".userInfo"]: {
            idst: currentUser.idst,
            displayName: currentUser.firstname + " " + currentUser.lastname,
            photoURL: currentUser.avatar,
          },
          [combinedId + ".date"]: serverTimestamp(),
        });
      }
    } catch (err) {}

    dispatch({ type: "CHANGE_USER", payload: user });

    setUser(null);
    setUsername("");
  };

  return (
    <div className="chatsearch">
      <div className="searchForm">
        <input
          type="text"
          placeholder="Find a user"
          name=""
          onKeyDown={handleKey}
          onChange={(e) => setUsername(e.target.value)}
          value={username}
        />
        <img
          src={add}
          alt=""
          className="pull-right"
          style={{ height: "25px", width: "25px", cursor: "pointer" }}
          onClick={handleSearch}
        />
      </div>
      {err && (
        <span style={{ color: "white", marginLeft: "12px" }}>
          Oops! User does not exists!
        </span>
      )}
      {user && (
        <div className="userChat" onClick={handleSelect}>
          <img src={user?.avatar || demo_user} alt={demo_user} />
          <div className="userChatInfo">
            <span>{user.FullName}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatSearch;
