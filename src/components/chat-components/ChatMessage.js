import React, { useContext, useEffect, useRef } from "react";
import { useSelector } from "react-redux";

import demo_user from "../../assets/images/users/no-avatar.jpg";
import { ChatContext } from "../../context/ChatContext";
import moment from "moment";

const ChatMessage = ({ message }) => {
  const currentUser = useSelector((state) => state.user.currentUser);
  const { data } = useContext(ChatContext);

  const ref = useRef();

  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  }, [message]);

  // console.log(moment(message.date.toDate()).fromNow());

  return (
    <div
      ref={ref}
      className={`message ${message.senderId === currentUser.idst && "owner"}`}
    >
      <div className="messageInfo">
        <img
          src={
            message.senderId === currentUser.idst
              ? currentUser?.avatar || demo_user
              : data.user?.photoURL || demo_user
          }
          alt={demo_user}
        />
        <span>{moment(message.date.toDate()).fromNow()}</span>
      </div>
      <div className="messageContent">
        {message.text !== "" && <p>{message?.text}</p>}
        {message.img && <img src={message.img} alt="" />}
      </div>
    </div>
  );
};

export default ChatMessage;
