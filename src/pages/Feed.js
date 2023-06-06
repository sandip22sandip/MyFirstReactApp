import React from "react";

import { Link } from 'react-router-dom';

import demo_user from "../assets/images/users/demo-user.jpg";
import avatar2 from "../assets/images/users/avatar-2.png";
import avatar1 from "../assets/images/users/avatar-1.jpg";
import avatar9 from "../assets/images/users/avatar-9.jpg";
import performance from "../assets/images/icons/performance.png";
import accolade from "../assets/images/icons/accolade.png";
import certificate from "../assets/images/icons/certificate.png";
import noavatar from "../assets/images/users/no-avatar.jpg";


function Feed() {
  return (
    <div className="content-page">
      {/* Start content */}
      <div className="content">
        <div className="container">
          <div className="row">
            <div className="col-sm-3">
              <div className="panel panel-default">
                <div className="panel-body half-bg text-center">
                  <div
                    id="ProfileImg"
                    style={{ position: "relative", margin: "0 auto" }}
                  >
                    <img
                      className="img-lg img-circle"
                      src={demo_user}
                      alt="demo-user.jpg"
                    />
                  </div>
                  <h4>Peter Semenya</h4>
                  <h6>Business intelligence analyst</h6>
                </div>
                <div className="panel-body">
                  <div className="row text-center">
                    <div className="col-xs-4">
                      <p className="text-blue m-0">
                        <strong>100</strong>
                      </p>
                      <p className="m-0">Points</p>
                    </div>
                    <div className="col-xs-4">
                      <p className="text-blue m-0">
                        <strong>10</strong>
                      </p>
                      <p className="m-0">Tokens</p>
                    </div>
                    <div className="col-xs-4">
                      <p className="text-blue m-0">
                        <strong>3/10</strong>
                      </p>
                      <p className="m-0">Rank</p>
                    </div>
                  </div>
                </div>
                <div className="panel-footer">
                  <div className="row text-center">
                    <div
                      className="col-xs-12"
                      style={{ borderRight: "1px solid #ddd" }}
                    >
                      <h5 className="bold">0/2</h5>
                      <span className="small">Completed Courses</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="panel panel-default">
                <div className="panel-body">
                  <p className="text-muted">
                    Share an article, post, or give a praise
                  </p>
                  <hr />
                  <button type="button" className="btn btn-sm btn-default">
                    <i className="fa fa-edit" /> Post
                  </button>
                  <button type="button" className="btn btn-sm btn-default">
                    <i className="fa fa-trophy" /> Accolade
                  </button>
                  <button type="button" className="btn btn-sm btn-default">
                    <i className="fa fa-bullhorn" /> Mention
                  </button>
                  <button type="button" className="btn btn-sm btn-default">
                    <i className="ion-ribbon-b" /> Brilliance
                  </button>
                  <button type="button" className="btn btn-sm btn-default">
                    <i className="fa fa-star" /> Performance
                  </button>
                </div>
              </div>
              <div className="panel panel-default">
                <div className="panel-body">
                  <div className="row m-b-15">
                    <div className="col-sm-12">
                      <img
                        src={avatar9}
                        className="img-circle img-sm pull-left m-10"
                        alt="avatar-9.jpg"
                      />
                      <i className="fa fa-ellipsis-v pull-right" />
                      <p className="m-0 m-t-15">
                        <b>Elvis Bruintjies</b> recieved an accolade
                      </p>
                      <p className="small m-0">10 min ago</p>
                    </div>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam.
                  </p>
                  <p className="text-center">
                    <img
                      src={accolade}
                      className="img-center img-xl"
                      alt="accolade.png"
                    />
                  </p>
                  <div className="row m-t-15">
                    <div className="col-sm-12">
                      <span className="small m-r-10">
                        <Link to="#">20 High fives</Link>
                      </span>
                      <span className="small m-r-10">
                        <Link to="#">1 Comment</Link>
                      </span>
                    </div>
                  </div>
                  <hr />
                  <Link to="#" className="small text-muted m-r-10">
                    <i className="ion-android-hand " /> High Five
                  </Link>
                  <Link to="#" className="small text-muted">
                    <i className="fa fa-comment-o" /> Comment
                  </Link>
                </div>
              </div>
              <div className="panel panel-default">
                <div className="panel-body">
                  <div className="row m-b-15">
                    <div className="col-sm-12">
                      <img
                        src={avatar2}
                        className="img-circle img-sm pull-left m-10"
                        alt="avatar-2.png"
                      />
                      <i className="fa fa-ellipsis-v pull-right" />
                      <p className="m-0 m-t-15">
                        <b>Yolandi Myburgh</b> recieved an award for performance
                      </p>
                      <p className="small m-0">10 min ago</p>
                    </div>
                  </div>
                  <p>
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium.
                  </p>
                  <p className="text-center">
                    <img
                      src={performance}
                      className="img-responsive img-center img-xl"
                      alt="performance.png"
                    />
                  </p>
                  <div className="row m-t-15">
                    <div className="col-sm-12">
                      <span className="small m-r-10">
                        <Link to="#">20 High fives</Link>
                      </span>
                      <span className="small m-r-10">
                        <Link to="#">1 Comment</Link>
                      </span>
                    </div>
                  </div>
                  <hr />
                  <Link to="#" className="small text-muted m-r-10">
                    <i className="ion-android-hand " /> High Five
                  </Link>
                  <Link to="#" className="small text-muted">
                    <i className="fa fa-comment-o" /> Comment
                  </Link>
                </div>
              </div>
              <div className="panel panel-default">
                <div className="panel-body">
                  <div className="row m-b-15">
                    <div className="col-sm-12">
                      <img
                        src={avatar1}
                        className="img-circle img-sm pull-left m-10"
                        alt="avatar-1.jpg"
                      />
                      <i className="fa fa-ellipsis-v pull-right" />
                      <p className="m-0 m-t-15">
                        <b>Moses Makhoba</b> recieved an award for brilliance
                      </p>
                      <p className="small m-0">10 min ago</p>
                    </div>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                  <h5 className="text-center bold">
                    <img
                      src={certificate}
                      className="img-responsive img-center img-xl m-b-10"
                      alt="certificate.png"
                    />{" "}
                    Moses Makhoba
                  </h5>
                  <div className="row m-t-15">
                    <div className="col-sm-12">
                      <span className="small m-r-10">
                        <Link to="#">20 High fives</Link>
                      </span>
                      <span className="small m-r-10">
                        <Link to="#">1 Comment</Link>
                      </span>
                    </div>
                  </div>
                  <hr />
                  <Link to="#" className="small text-muted m-r-10">
                    <i className="ion-android-hand " /> High Five
                  </Link>
                  <Link to="#" className="small text-muted">
                    <i className="fa fa-comment-o" /> Comment
                  </Link>
                </div>
              </div>
              <div className="panel panel-default">
                <div className="panel-body">
                  <div className="row m-b-15">
                    <div className="col-sm-12">
                      <img
                        src={noavatar}
                        className="img-circle img-sm pull-left m-10"
                        alt="no-avatar.jpg"
                      />
                      <i className="fa fa-ellipsis-v pull-right" />
                      <p className="m-0 m-t-15">
                        <b>Tilana Immelman</b> mentioned
                        <b>Zelda Van Rooyen</b>
                      </p>
                      <p className="small m-0">10 min ago</p>
                    </div>
                  </div>
                  <div className="panel panel-fill panel-primary">
                    <div className="panel-body text-center p-30">
                      <h2 className="text-white bold">
                        An amazing contribution to the academic launch of Oceana
                        LMS
                      </h2>
                    </div>
                  </div>
                  <div className="row m-t-15">
                    <div className="col-sm-12">
                      <span className="small m-r-10">
                        <Link to="#">20 High fives</Link>
                      </span>
                      <span className="small m-r-10">
                        <Link to="#">1 Comment</Link>
                      </span>
                    </div>
                  </div>
                  <hr />
                  <Link to="#" className="small text-muted m-r-10">
                    <i className="ion-android-hand " /> High Five
                  </Link>
                  <Link to="#" className="small text-muted">
                    <i className="fa fa-comment-o" /> Comment
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="panel panel-default">
                <div className="panel-heading bg-custom1">
                  <h3 className="panel-title text-white">Challenge yourself</h3>
                </div>
                <div className="panel-body">
                  <div className="m-b-15">
                    <p>Earn more points when you complete a challenge.</p>
                  </div>
                  <Link to="#" className="text-inverse">
                    <div className="panel panel-default m-b-5">
                      <div style={{ padding: 10 }}>
                        <span>0/1 Onboarding Tutorial Challenge</span>
                        <p className="small">Points: 100 | Coins: 20</p>
                      </div>
                    </div>
                  </Link>
                  <Link to="#" className="text-inverse">
                    <div className="panel panel-default m-b-5">
                      <div style={{ padding: 10 }}>
                        <span>0/1 Staff Survey Challenge</span>
                        <p className="small">Points: 500 | Coins: 50</p>
                      </div>
                    </div>
                  </Link>
                  <Link to="#" className="text-inverse">
                    <div className="panel panel-default m-b-5">
                      <div style={{ padding: 10 }}>
                        <span>0/1 Oceana LMS Beta Poll Challenge</span>
                        <p className="small">Points: 250 | Coins: 100</p>
                      </div>
                    </div>
                  </Link>
                  <Link to="#" className="text-inverse">
                    <div className="panel panel-default m-b-5">
                      <div style={{ padding: 10 }}>
                        <span>0/1 Comment on 10 Posts</span>
                        <p className="small">Points: 150 | Coins: 15</p>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* container */}
      </div>
      {/* content */}
    </div>
  );
}

export default Feed;
