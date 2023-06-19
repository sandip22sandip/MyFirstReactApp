import React from "react";
import { Link } from "react-router-dom";

import demo_user from "../../assets/images/users/no-avatar.jpg";
import company_logo from "../../assets/images/company-logo-alt.png";
import { useSelector } from "react-redux";

const ChatNavbar = () => {
  const currentUser = useSelector((state) => state.user.currentUser);

  return (
    <div className="chatnavbar">
      <Link to="/main" className="logo">
        <img src={company_logo} alt="company_logo" />
      </Link>
      <div className="user">
        <img src={currentUser?.avatar || demo_user} alt={demo_user} />
        <span>
          {currentUser?.firstname} {currentUser?.lastname}
        </span>
      </div>
    </div>
  );
};

export default ChatNavbar;
