import React from "react";
import Cam from "../../assets/images/chat-imgs/cam.png";
import Add from "../../assets/images/chat-imgs/add.png";
import More from "../../assets/images/chat-imgs/more.png";
import ChatMessages from "./ChatMessages";
import ChatInput from "./ChatInput";

const Chat = () => {
  return (
    <div className="chatside">
      <div className="chatInfo">
        <span>Xen</span>
        <div className="chatIcons">
          <img src={Cam} alt="" />
          <img src={Add} alt="" />
          <img src={More} alt="" />
        </div>
      </div>
      <ChatMessages />
      <ChatInput />
    </div>
  );
};

export default Chat;
