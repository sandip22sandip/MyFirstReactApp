import React from "react";

import demo_user from "../assets/images/users/demo-user.jpg";
import xpicon from "../assets/images/icons/xp-icon.svg";
import tokenicon from "../assets/images/icons/token-icon.svg";
import badgesicon from "../assets/images/icons/badges-icon.svg";
import rankicon from "../assets/images/icons/rank-icon.svg";

import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import CourseProgressMini from "../components/CourseProgressMini";
import ProfileRewards from "../components/ProfileRewards";
import ProfileBadges from "../components/ProfileBadges";
import ProfileChallanges from "../components/ProfileChallanges";

function Profile() {
  const { isLoading, error, data } = useQuery(["userInfo"], () =>
    axios
      .get("/rest.php", {
        params: {
          q: "/restAPI/user/getUserDetails/",
          auth: sessionStorage.getItem("AuthToken"),
        },
      })
      .then((res) => {
        return res.data["details"];
      })
  );
  // console.log(data);

  return (
    <div className="content-page">
      {/* Start content */}
      <div className="content">
        <div className="container">
          {/*=========================== breadcrumbs ===========================*/}
          <ul className="breadcrumb p-0 hidden-xs">
            <li className="breadcrumb-item">
              <Link to="/main">
                <i className="md md-home" />
                <span> Home </span>
              </Link>
            </li>
            <li className="breadcrumb-item active">Profile</li>
          </ul>
          {/*=========================== content ===========================*/}
          {error ? (
            "Something went wrong with your request"
          ) : isLoading ? (
            "Loading"
          ) : (
            <div className="row">
              {/*=========================== left col ===========================*/}
              <div className="col-sm-3">
                {/*========== avatar ==========*/}
                <div className="panel panel-default">
                  <div className="panel-body half-bg text-center">
                    <div
                      id="ProfileImg"
                      style={{ position: "relative", margin: "0 auto" }}
                    >
                      <img
                        className="img-lg img-circle"
                        src={demo_user}
                        alt=""
                      />
                      <div
                        style={{
                          position: "absolute",
                          bottom: 0,
                          right: "0%",
                          left: "40%",
                        }}
                      >
                        <a
                          href="/#"
                          id="editprofile"
                          className="btn btn-default btn-circle"
                        >
                          <i className="fa fa-camera" />
                        </a>
                      </div>
                    </div>
                    <h4>{data.FullName}</h4>
                    <h6>
                      {data.userLevel} - {data.userType}
                    </h6>
                  </div>
                </div>
                <CourseProgressMini />
              </div>
              {/*=========================== right col ===========================*/}
              <div className="col-sm-9">
                {/*========== stats overview ==========*/}
                <div className="panel panel-default">
                  <div className="panel-body">
                    <div className="row">
                      <div className="col-sm-3 text-center">
                        <img
                          src={xpicon}
                          className="img-center img-sm img-responsive img-center"
                          alt=""
                        />
                        <h3 className="bold">{data.points}</h3>
                        <p>XP Points</p>
                      </div>
                      <div className="col-sm-3 text-center">
                        <img
                          src={tokenicon}
                          className="img-center img-sm img-responsive img-center"
                          alt=""
                        />
                        <h3 className="bold">{data.coins}</h3>
                        <p>Tokens</p>
                      </div>
                      <div className="col-sm-3 text-center">
                        <img
                          src={badgesicon}
                          className="img-center img-sm img-responsive img-center"
                          alt=""
                        />
                        <h3 className="bold">{data.TotalBadges}</h3>
                        <p>Badges</p>
                      </div>
                      <div className="col-sm-3 text-center">
                        <img
                          src={rankicon}
                          className="img-center img-responsive img-center"
                          style={{ height: 50, width: "initial" }}
                          alt=""
                        />
                        <h3 className="bold">{`${data.rank} / ${data.TotalUsers}`}</h3>
                        <p>Rank</p>
                      </div>
                    </div>
                  </div>
                </div>
                {/*========== tabs ==========*/}
                <div className="row">
                  <div className="col-sm-12">
                    <div className="panel panel-default">
                      <div className="panel-body p-0">
                        <ul className="custom nav nav-tabs nav-justified b-0">
                          <li className="active">
                            <a
                              href="#challenges"
                              data-toggle="tab"
                              aria-expanded="true"
                            >
                              <span className="visible-xs">
                                <i className="fa fa-home" />
                              </span>
                              <span className="hidden-xs">Challenges</span>
                            </a>
                          </li>
                          <li>
                            <a
                              href="#badges"
                              data-toggle="tab"
                              aria-expanded="false"
                            >
                              <span className="visible-xs">
                                <i className="fa fa-user" />
                              </span>
                              <span className="hidden-xs">Badges</span>
                            </a>
                          </li>
                          <li>
                            <a
                              href="#rewards"
                              data-toggle="tab"
                              aria-expanded="false"
                            >
                              <span className="visible-xs">
                                <i className="fa fa-envelope-o" />
                              </span>
                              <span className="hidden-xs">Rewards</span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="custom tab-content">
                      {/*========== challenges ==========*/}
                      <ProfileChallanges />
                      {/*========== badges ==========*/}
                      <ProfileBadges />
                      {/*========== rewards ==========*/}
                      <ProfileRewards />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        {/* container */}
      </div>
      {/* content */}
    </div>
  );
}

export default Profile;
