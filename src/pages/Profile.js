import React from "react";

import demo_user from "../assets/images/users/demo-user.jpg";
import xpicon from "../assets/images/icons/xp-icon.svg";
import tokenicon from "../assets/images/icons/token-icon.svg";
import badgesicon from "../assets/images/icons/badges-icon.svg";
import rankicon from "../assets/images/icons/rank-icon.svg";
import token from "../assets/images/icons/token.png";
import xpbadge from "../assets/images/icons/xpbadge.png";
import img26 from "../assets/images/icons/26.png";
import img27 from "../assets/images/icons/27.png";
import img78 from "../assets/images/icons/78.png";
import img95 from "../assets/images/icons/95.png";
import img15 from "../assets/images/icons/15.png";

function Profile() {
  return (
    <div className="content-page">
      {/* Start content */}
      <div className="content">
        <div className="container">
          {/*=========================== breadcrumbs ===========================*/}
          <ul className="breadcrumb p-0 hidden-xs">
            <li className="breadcrumb-item">
              <a href="index.html">
                <i className="md md-home" />
                <span> Home </span>
              </a>
            </li>
            <li className="breadcrumb-item active">Profile</li>
          </ul>
          {/*=========================== content ===========================*/}
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
                    <img className="img-lg img-circle" src={demo_user} alt="" />
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
                  <h4>Peter Semenya</h4>
                  <h6>Business intelligence analyst</h6>
                </div>
              </div>
              {/*========== course and mission overview ==========*/}
              <div className="panel panel-default">
                <div className="panel-body">
                  <div className="row">
                    <div className="col-xs-10">
                      <h6 className="bold progressTitle">
                        <a href="course">Analysis of Financial Reports</a>
                      </h6>
                    </div>
                    <div className="col-xs-2">
                      <h6 className="matrixPercent pull-right">60%</h6>
                    </div>
                    <div className="col-md-12">
                      <div className="progress progress-sm">
                        <div
                          className="progress-bar progress-bar-success"
                          role="progressbar"
                          aria-valuenow={60}
                          aria-valuemin={0}
                          aria-valuemax={100}
                          style={{ width: "60%" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="panel-footer">
                  <div className="row text-center">
                    <div
                      className="col-xs-6"
                      style={{ borderRight: "1px solid #ddd" }}
                    >
                      <h5 className="bold">1/2</h5>
                      <span className="small">Completed Courses</span>
                    </div>
                    <div className="col-xs-6">
                      <h5 className="bold">3/5</h5>
                      <span className="small">Completed Mission</span>
                    </div>
                  </div>
                </div>
              </div>
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
                      <h3 className="bold">1500</h3>
                      <p>XP Points</p>
                    </div>
                    <div className="col-sm-3 text-center">
                      <img
                        src={tokenicon}
                        className="img-center img-sm img-responsive img-center"
                        alt=""
                      />
                      <h3 className="bold">100</h3>
                      <p>Tokens</p>
                    </div>
                    <div className="col-sm-3 text-center">
                      <img
                        src={badgesicon}
                        className="img-center img-sm img-responsive img-center"
                        alt=""
                      />
                      <h3 className="bold">5</h3>
                      <p>Badges</p>
                    </div>
                    <div className="col-sm-3 text-center">
                      <img
                        src={rankicon}
                        className="img-center img-responsive img-center"
                        style={{ height: 50, width: "initial" }}
                        alt=""
                      />
                      <h3 className="bold">15/25</h3>
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
                        <li className>
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
                        <li className>
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
                    <div className="tab-pane active" id="challenges">
                      <a
                        href="/#"
                        data-toggle="modal"
                        data-target="openChallengeInfo"
                      >
                        <div className="panel panel-default">
                          <div className="panel-body">
                            <div className="row">
                              <div className="col-sm-8">
                                <h5 className="m-0">
                                  Complete the onboarding tutorial
                                </h5>
                              </div>
                              <div className="col-sm-4 text-right">
                                <span
                                  className="info-default label label-default"
                                  title
                                >
                                  0/1
                                </span>
                                <span
                                  className="info-default label label-default m-r-5"
                                  title
                                >
                                  <img
                                    src={token}
                                    style={{ maxHeight: 18, marginTop: "-2px" }}
                                    alt=""
                                  />{" "}
                                  10
                                </span>
                                <span
                                  className="info-default label label-default"
                                  title
                                >
                                  <img
                                    src={xpbadge}
                                    style={{ maxHeight: 18, marginTop: "-2px" }}
                                    alt=""
                                  />{" "}
                                  100
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </a>
                      <a
                        href="/#"
                        data-toggle="modal"
                        data-target="openChallengeInfo"
                      >
                        <div className="panel panel-default">
                          <div className="panel-body">
                            <div className="row">
                              <div className="col-sm-8">
                                <h5 className="m-0">Do a staff survey</h5>
                              </div>
                              <div className="col-sm-4 text-right">
                                <span
                                  className="info-default label label-default"
                                  title
                                >
                                  0/1
                                </span>
                                <span
                                  className="info-default label label-default m-r-5"
                                  title
                                >
                                  <img
                                    src={token}
                                    style={{ maxHeight: 18, marginTop: "-2px" }}
                                    alt=""
                                  />{" "}
                                  10
                                </span>
                                <span
                                  className="info-default label label-default"
                                  title
                                >
                                  <img
                                    src={xpbadge}
                                    style={{ maxHeight: 18, marginTop: "-2px" }}
                                    alt=""
                                  />{" "}
                                  100
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </a>
                      <a
                        href="/#"
                        data-toggle="modal"
                        data-target="openChallengeInfo"
                      >
                        <div className="panel panel-default">
                          <div className="panel-body">
                            <div className="row">
                              <div className="col-sm-8">
                                <h5 className="m-0">Comment on 10 posts</h5>
                              </div>
                              <div className="col-sm-4 text-right">
                                <span
                                  className="info-default label label-default"
                                  title
                                >
                                  0/10
                                </span>
                                <span
                                  className="info-default label label-default m-r-5"
                                  title
                                >
                                  <img
                                    src={token}
                                    style={{ maxHeight: 18, marginTop: "-2px" }}
                                    alt=""
                                  />{" "}
                                  10
                                </span>
                                <span
                                  className="info-default label label-default"
                                  title
                                >
                                  <img
                                    src={xpbadge}
                                    style={{ maxHeight: 18, marginTop: "-2px" }}
                                    alt=""
                                  />{" "}
                                  100
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </a>
                      <a
                        href="/#"
                        data-toggle="modal"
                        data-target="openChallengeInfo"
                      >
                        <div className="panel panel-default">
                          <div className="panel-body">
                            <div className="row">
                              <div className="col-sm-8">
                                <h5 className="m-0">High five 20 posts</h5>
                              </div>
                              <div className="col-sm-4 text-right">
                                <span
                                  className="info-default label label-default"
                                  title
                                >
                                  0/20
                                </span>
                                <span
                                  className="info-default label label-default m-r-5"
                                  title
                                >
                                  <img
                                    src={token}
                                    style={{ maxHeight: 18, marginTop: "-2px" }}
                                    alt=""
                                  />{" "}
                                  10
                                </span>
                                <span
                                  className="info-default label label-default"
                                  title
                                >
                                  <img
                                    src={xpbadge}
                                    style={{ maxHeight: 18, marginTop: "-2px" }}
                                    alt=""
                                  />{" "}
                                  100
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                    {/*========== badges ==========*/}
                    <div className="tab-pane" id="badges">
                      <div className="row">
                        <div className="col-sm-3 text-center m-b-15">
                          <div className="badge-icon img-md img-circle">
                            <img src={img26} className="img-sm" alt="" />
                          </div>
                          <h6>Profile Setup</h6>
                          <p>Profile setup complete</p>
                        </div>
                        <div className="col-sm-3 text-center m-b-15">
                          <div className="badge-icon img-md img-circle">
                            <img src={img27} className="img-sm" alt="" />
                          </div>
                          <h6>Thumbs up!</h6>
                          <p>Liked 5 posts on feed and forum</p>
                        </div>
                        <div className="col-sm-3 text-center m-b-15">
                          <div className="badge-icon img-md img-circle">
                            <img src={img78} className="img-sm" alt="" />
                          </div>
                          <h6>Topic creator</h6>
                          <p>Posting your first topic on the forum</p>
                        </div>
                        <div className="col-sm-3 text-center m-b-15">
                          <div className="badge-icon img-md img-circle">
                            <img src={img95} className="img-sm" alt="" />
                          </div>
                          <h6>Some reward</h6>
                          <p>some description goes herer</p>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-sm-3 text-center m-b-15">
                          <div className="badge-icon img-md img-circle">
                            <img src={img15} className="img-sm" alt="" />
                          </div>
                          <h6>Some reward</h6>
                          <p>some description goes herer</p>
                        </div>
                        <div className="col-sm-3 text-center m-b-15"></div>
                      </div>
                    </div>
                    {/*========== rewards ==========*/}
                    <div className="tab-pane" id="rewards">
                      <div className="no-rewards text-center">
                        <h6 className="text-uppercase">There are no rewards</h6>
                        <p>You have not redeemed any reward</p>
                        <a
                          href="rewards"
                          className="btn btn-secondary waves-light waves-effect"
                        >
                          Redeem a reward
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>{" "}
        {/* container */}
      </div>{" "}
      {/* content */}
    </div>
  );
}

export default Profile;
