import React from "react";
import { useSelector } from "react-redux";

import demo_user from "../../assets/images/users/no-avatar.jpg";

const ChatMessage = () => {
  const currentUser = useSelector((state) => state.user.currentUser);

  return (
    <>
      <div className="message">
        <div className="messageInfo">
          <img src={demo_user} alt="no-avatar.jpg" />
          <span>1 hour ago</span>
        </div>
        <div className="messageContent">
          <p>Good Morning, How are you?</p>
        </div>
      </div>
      <div className="message owner">
        <div className="messageInfo">
          <img src={currentUser?.avatar || demo_user} alt={demo_user} />
          <span>1 hour ago</span>
        </div>
        <div className="messageContent">
          <p>I am Good, Thanks. And you?</p>
        </div>
      </div>
      <div className="message">
        <div className="messageInfo">
          <img src={demo_user} alt="no-avatar.jpg" />
          <span>5 min ago</span>
        </div>
        <div className="messageContent">
          <p>Good, too. Thanks.</p>
        </div>
      </div>
      <div className="message owner">
        <div className="messageInfo">
          <img src={currentUser?.avatar || demo_user} alt={demo_user} />
          <span>just now</span>
        </div>
        <div className="messageContent">
          <p>Hi, How are you?</p>
        </div>
      </div>
    </>
  );
};

export default ChatMessage;
