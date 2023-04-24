import React from "react";

// import { Link } from 'react-router-dom';

import course1 from "../assets/images/course-imgs/course1.jpg";
import course2 from "../assets/images/course-imgs/course2.jpg";
import course3 from "../assets/images/course-imgs/course3.jpg";
import course4 from "../assets/images/course-imgs/course4.jpg";
import course5 from "../assets/images/course-imgs/course5.jpg";
import course6 from "../assets/images/course-imgs/course6.jpg";
import course7 from "../assets/images/course-imgs/course7.jpg";
import course8 from "../assets/images/course-imgs/course8.jpg";

function FindACourse() {
  return (
    <div className="content-page">
      <div className="content">
        <div className="container">
          {/*=========================== filters ===========================*/}
          <div className="panel simple">
            <div className="panel-body p-r-0 p-l-0">
              <div className="row">
                <div className="col-sm-4">
                  <div className="row">
                    <div className="col-sm-6">
                      <select
                        id="filterCourses"
                        className="filter form-control"
                      >
                        <option value="all">All Types</option>
                        <option value="online">E-Learning</option>
                        <option value="class">Classroom</option>
                        <option value="assessment">Assessment</option>
                      </select>
                      <i className="fa fa-filter text-muted" />
                    </div>
                    <div className="col-sm-6">
                      <select
                        id="filterCourses"
                        className="filter form-control"
                      >
                        <option value="all">All Categories</option>
                        <option value="online">Finance</option>
                        <option value="class">Communication</option>
                        <option value="assessment">Entrepreneurship</option>
                        <option>Management</option>
                        <option>Sales</option>
                        <option>Strategy</option>
                        <option>Operations</option>
                        <option>Business Law</option>
                        <option>Data &amp; Analytics</option>
                        <option>Human Resources</option>
                        <option>Industry</option>
                        <option>Real Estate</option>
                      </select>
                      <i className="fa fa-filter text-muted" />
                    </div>
                  </div>
                </div>
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
                  <img src={course1} alt="..." />
                </div>
                <div className="panel-body hover-desc">
                  <div className="small m-b-5" title="topic">
                    <i className="fa fa-bookmark-o" /> E-learning
                  </div>
                  <h3 className="panelTitle">
                    Financial Management &amp; Cost Accounting
                  </h3>
                  <button
                    type="button"
                    className="btn btn-default btn-block waves-effect waves-light"
                  >
                    Enroll
                  </button>
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
                  <img src={course8} alt="..." />
                </div>
                <div className="panel-body hover-desc">
                  <div className="small m-b-5" title="topic">
                    <i className="fa fa-bookmark-o" /> Classroom
                  </div>
                  <h3 className="panelTitle">Enterprise Risk Management</h3>
                  <button
                    type="button"
                    className="btn btn-default btn-block waves-effect waves-light"
                  >
                    Enroll
                  </button>
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
                  <img src={course3} alt="..." />
                </div>
                <div className="panel-body hover-desc">
                  <div className="small m-b-5" title="topic">
                    <i className="fa fa-bookmark-o" /> E-learning
                  </div>
                  <h3 className="panelTitle">
                    Course in Business Administration - Essential Business
                    Finance (ICB)
                  </h3>
                  <button
                    type="button"
                    className="btn btn-default btn-block waves-effect waves-light"
                  >
                    Enroll
                  </button>
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
                  <img src={course4} alt="..." />
                </div>
                <div className="panel-body hover-desc">
                  <div className="small m-b-5" title="topic">
                    <i className="fa fa-bookmark-o" /> Classroom
                  </div>
                  <h3 className="panelTitle">
                    Course in Accounting - Skills Programme in Computerised
                    Bookkeeping (ICB)
                  </h3>
                  <button
                    type="button"
                    className="btn btn-default btn-block waves-effect waves-light"
                  >
                    Enroll
                  </button>
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
                  <img src={course5} alt="..." />
                </div>
                <div className="panel-body hover-desc">
                  <div className="small m-b-5" title="topic">
                    <i className="fa fa-bookmark-o" /> E-learning
                  </div>
                  <h3 className="panelTitle">
                    Course in Banking - Skills Programme 1 in Wealth Management
                  </h3>
                  <button
                    type="button"
                    className="btn btn-default btn-block waves-effect waves-light"
                  >
                    Enroll
                  </button>
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
                  <img src={course6} alt="..." />
                </div>
                <div className="panel-body hover-desc">
                  <div className="small m-b-5" title="topic">
                    <i className="fa fa-bookmark-o" /> Classroom
                  </div>
                  <h3 className="panelTitle">
                    Short Courses in Economic and Financial Sciences
                  </h3>
                  <button
                    type="button"
                    className="btn btn-default btn-block waves-effect waves-light"
                  >
                    Enroll
                  </button>
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
                  <img src={course7} alt="..." />
                </div>
                <div className="panel-body hover-desc">
                  <div className="small m-b-5" title="topic">
                    <i className="fa fa-bookmark-o" /> E-learning
                  </div>
                  <h3 className="panelTitle">
                    {" "}
                    Corporate Finance and Capital Investment Decisions
                  </h3>
                  <button
                    type="button"
                    className="btn btn-default btn-block waves-effect waves-light"
                  >
                    Enroll
                  </button>
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
                  <img src={course2} alt="..." />
                </div>
                <div className="panel-body hover-desc">
                  <div className="small m-b-5" title="topic">
                    <i className="fa fa-bookmark-o" /> Classroom
                  </div>
                  <h3 className="panelTitle">
                    Finance for Non-financial Managers - Module 1t
                  </h3>
                  <button
                    type="button"
                    className="btn btn-default btn-block waves-effect waves-light"
                  >
                    Enroll
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>{" "}
        {/* container */}
      </div>
    </div>
  );
}

export default FindACourse;
