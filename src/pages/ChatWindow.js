import React from "react";
import ChatSidebar from "../components/chat-components/ChatSidebar";
import Chat from "../components/chat-components/Chat";
import "../chat.scss";

const ChatWindow = () => {
  return (
    <div className="chathome">
      <div className="chatcontainer">
        <ChatSidebar />
        <Chat />
      </div>
    </div>
  );
};

export default ChatWindow;
