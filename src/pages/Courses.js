import React from "react";

import course10 from "../assets/images/course-imgs/course10.jpg";
import course9 from "../assets/images/course-imgs/course9.jpg";
import socialmedia from "../assets/images/course-imgs/social-media.gif";
import { Link } from "react-router-dom";

function Courses() {
  return (
    <div className="content-page">
      <div className="content">
        <div className="container">
          {/*=========================== search and filter panel ===========================*/}
          <div className="row m-b-15">
            {/*========== filter Category ==========*/}
            <div className="col-sm-2">
              <select id="filterCategory" className="form-control filter">
                <option value="all">All Types</option>
                <option value="online">E-Learning</option>
                <option value="class">Classroom</option>
                <option value="assessment">Assessment</option>
              </select>
              <i className="fa fa-filter text-muted" />
            </div>
            {/*========== filter Status ==========*/}
            <div className="col-sm-2">
              <select id="filterStatus" className="form-control filter">
                <option value="all">All Statuses</option>
                <option value="completed">Completed</option>
                <option value="inprogress">In Progress</option>
                <option value="incomplete">Incomplete</option>
              </select>
              <i className="fa fa-filter text-muted" />
            </div>
            {/*========== search ==========*/}
            <div className="col-sm-4 col-sm-offset-4">
              <form className="search">
                <div className="input-group">
                  <input
                    id="searchCourses"
                    type="text"
                    className="form-control"
                    placeholder="Search..."
                  />
                  <span className="input-group-btn">
                    <button
                      id="searchBtn"
                      className="btn btn-secondary waves-effect waves-light"
                      type="button"
                    >
                      <i className="fa fa-search" />
                    </button>
                  </span>
                </div>
              </form>
            </div>
          </div>
          {/*=========================== courses ===========================*/}
          <div className="row">
            <div className="col-sm-6 col-md-4 col-lg-3 col-xl-2">
              <div className="panel panel-default card">
                <div className="card-img-thumb">
                  <div className="overlay">
                    <div id="card-info-btn" className="card-info-btn">
                      <a
                        href="/#"
                        data-toggle="modal"
                        data-target=".openCardInfo"
                        className="btn btn-default btn-sm"
                      >
                        <i className="fa fa-info" />
                      </a>
                    </div>
                  </div>
                  <img
                    src={course10}
                    alt="course10.jpg"
                  />
                </div>
                <div className="progress progress-sm">
                  <div
                    className="progress-bar progress-bar-secondary"
                    role="progressbar"
                    aria-valuenow={60}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    style={{ width: "60%" }}
                  ></div>
                </div>
                <div className="panel-body hover-desc">
                  <div className="small m-b-5" title="topic">
                    <i className="fa fa-bookmark-o" /> E-learning
                  </div>
                  <h3 className="panelTitle">Analysis of Financial Reports</h3>
                  <Link
                    to="/course"
                    type="button"
                    className="btn btn-default btn-block waves-effect waves-light"
                  >
                    Launch
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3 col-xl-2">
              <div className="panel panel-default card">
                <div className="card-img-thumb">
                  <div className="overlay">
                    <div id="card-info-btn" className="card-info-btn">
                      <a
                        href="/#"
                        data-toggle="modal"
                        data-target=".openCardInfo"
                        className="btn btn-default btn-sm"
                      >
                        <i className="fa fa-info" />
                      </a>
                    </div>
                  </div>
                  <img
                    src={course9}
                    alt="course9.jpg"
                  />
                </div>
                <div className="progress progress-sm">
                  <div
                    className="progress-bar progress-bar-secondary"
                    role="progressbar"
                    aria-valuenow={10}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    style={{ width: "100%" }}
                  ></div>
                </div>
                <div className="panel-body hover-desc">
                  <div className="small m-b-5" title="topic">
                    <i className="fa fa-bookmark-o" /> E-learning
                  </div>
                  <h3 className="panelTitle">
                    Retirement Fund Trustee Training
                  </h3>
                  <Link
                    to="course"
                    className="btn btn-default btn-block waves-effect waves-light"
                  >
                    Launch
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3 col-xl-2">
              <div className="panel panel-default card">
                <div className="card-img-thumb">
                  <div className="overlay">
                    <div id="card-info-btn" className="card-info-btn">
                      <a
                        href="/#"
                        data-toggle="modal"
                        data-target=".openCardInfo"
                        className="btn btn-default btn-sm"
                      >
                        <i className="fa fa-info" />
                      </a>
                    </div>
                  </div>
                  <img
                    src={socialmedia}
                    alt="social-media.gif"
                  />
                </div>
                <div className="progress progress-sm">
                  <div
                    className="progress-bar progress-bar-secondary"
                    role="progressbar"
                    aria-valuenow={10}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    style={{ width: "0%" }}
                  ></div>
                </div>
                <div className="panel-body hover-desc">
                  <div className="small m-b-5" title="topic">
                    <i className="fa fa-bookmark-o" /> E-learning
                  </div>
                  <h3 className="panelTitle">Social Media Policy</h3>
                  <a
                    href="/#"
                    data-toggle="modal"
                    data-target="#scorm_modal"
                    className="btn btn-default btn-block waves-effect waves-light"
                  >
                    Launch
                  </a>
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

export default Courses;
