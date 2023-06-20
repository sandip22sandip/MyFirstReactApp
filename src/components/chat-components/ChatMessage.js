import React, { useContext, useEffect, useRef } from "react";
import { useSelector } from "react-redux";

import demo_user from "../../assets/images/users/no-avatar.jpg";
import { ChatContext } from "../../context/ChatContext";

const ChatMessage = ({ message }) => {
  const currentUser = useSelector((state) => state.user.currentUser);
  const { data } = useContext(ChatContext);

  const ref = useRef();

  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  }, [message]);

  return (
    <div
      ref={ref}
      className={`message ${message.senderId === currentUser.idst && "owner"}`}
    >
      <div className="messageInfo">
        <img
          src={
            message.senderId === currentUser.idst
              ? currentUser.avatar
              : data.user.photoURL
          }
          alt={demo_user}
        />
        <span>just now</span>
      </div>
      <div className="messageContent">
        <p>{message.text}</p>
        {message.img && <img src={message.img} alt="" />}
      </div>
    </div>
  );
};

export default ChatMessage;
