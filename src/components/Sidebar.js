import React, { useEffect, useState } from "react";

import { Link, useLocation } from "react-router-dom";

function Sidebar() {

  const location = useLocation();

  const [url, setUrl] = useState(null);

  useEffect(() => {
    setUrl(location.pathname);
  }, [location]);

  // console.log(url);

  return (
    <div className="left side-menu" id="side-menu">
      <div className="sidebar-inner slimscrollleft">
        <div id="sidebar-menu">
          <ul>
            <li>
              <Link to="main" className={"waves-effect" + (url === "/main" ?" active" : "")}>
                <i className="md md-home" />
                <span> Home </span>
              </Link>
            </li>
            <li>
              <Link to="feed" className={"waves-effect" + (url === "/feed" ?" active" : "")}>
                <i className="md md-dashboard" />
                <span> Feed </span>
              </Link>
            </li>
            <li>
              <Link to="findacourse" className={"waves-effect" + (url === "/findacourse" ?" active" : "")}>
                <i className="fa fa-compass" />
                <span> Find a course </span>
              </Link>
            </li>
            <li>
              <Link to="courses" className={"waves-effect" + (url === "/courses" ?" active" : "")}>
                <i className="md md-bookmark" />
                <span> Courses </span>
              </Link>
            </li>
            <li>
              <Link to="leaderboard" className={"waves-effect" + (url === "/leaderboard" ?" active" : "")}>
                <i className="fa fa-trophy" />
                <span> Leaderboard </span>
              </Link>
            </li>
            <li>
              <Link to="myteam" className={"waves-effect" + (url === "/myteam" ?" active" : "")}>
                <i className="md md-people" />
                <span> My Team </span>
              </Link>
            </li>
            <li>
              <Link to="servicesproducts" className={"waves-effect" + (url === "/servicesproducts" ?" active" : "")}>
                <i className="md md-info" />
                <span> Services &amp; Products </span>
              </Link>
            </li>
            <li>
              <Link to="kb" className={"waves-effect" + (url === "/kb" ?" active" : "")}>
                <i className="md md-live-help" />
                <span> Knowledge Base </span>
              </Link>
            </li>
            <li>
              <Link to="vacancies" className={"waves-effect" + (url === "/vacancies" ?" active" : "")}>
                <i className="fa fa-briefcase" />
                <span> Vacancies </span>
              </Link>
            </li>
            <li>
              <Link to="rewards" className={"waves-effect" + (url === "/rewards" ?" active" : "")}>
                <i className="fa fa-gift" />
                <span> Rewards Store </span>
              </Link>
            </li>
          </ul>
          <div className="clearfix" />
        </div>
        <div className="clearfix" />
      </div>
    </div>
  );
}

export default Sidebar;
