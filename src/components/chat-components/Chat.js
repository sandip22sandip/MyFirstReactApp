import React, { useContext } from "react";
import Home from "../../assets/images/chat-imgs/Home.png";
import ChatMessages from "./ChatMessages";
import ChatInput from "./ChatInput";
import { ChatContext } from "../../context/ChatContext";
import { useNavigate } from "react-router-dom";

const Chat = () => {
  const { data } = useContext(ChatContext);
  const navigate = useNavigate();

  return (
    <div className="chatside">
      <div className="chatInfo">
        <span>{data.user?.displayName || "Start Chatting .. "}</span>
        <div className="chatIcons">
          <span onClick={() => navigate(-1)}>
            <img src={Home} alt="" />
          </span>
        </div>
      </div>
      <ChatMessages />
      <ChatInput />
    </div>
  );
};

export default Chat;
