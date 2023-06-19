import React from "react";

import demo_user from "../../assets/images/users/no-avatar.jpg";

const Chats = () => {
  return (
    <div className="chats">
      <div className="userChat">
        <img src={demo_user} alt="no-avatar.jpg" />
        <div className="userChatInfo">
          <span>Xen</span>
          <p>Test</p>
        </div>
      </div>
    </div>
  );
};

export default Chats;
