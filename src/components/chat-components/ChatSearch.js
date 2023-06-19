import React from "react";

import demo_user from "../../assets/images/users/no-avatar.jpg";

const ChatSearch = () => {
  return (
    <div className="chatsearch">
      <div className="searchForm">
        <input type="text" placeholder="Find a user" name="" />
      </div>
      <div className="userChat">
        <img src={demo_user} alt="no-avatar.jpg" />
        <div className="userChatInfo">
          <span>Jean</span>
        </div>
      </div>
    </div>
  );
};

export default ChatSearch;
