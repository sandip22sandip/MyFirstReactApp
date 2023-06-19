import React from "react";
import ChatNavbar from "./ChatNavbar";
import ChatSearch from "./ChatSearch";
import Chats from "./Chats";

const ChatSidebar = () => {
  return (
    <div className="chatsidebar">
      <ChatNavbar />
      <ChatSearch />
      <Chats />
    </div>
  );
};

export default ChatSidebar;
