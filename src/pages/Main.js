import React from "react";

import { Link } from 'react-router-dom';

import demo_user from "../assets/images/users/demo-user.jpg";
import slide1 from "../assets/images/slide/slide-1.jpg";
import slide2 from "../assets/images/slide/slide-2.jpg";

function Main() {
  return (
    <div className="content-page">
      {/* Start content */}
      <div className="content">
        <div className="container">
          <div className="row">
            <div className="col-sm-3">
              {/*========== profile ovrview ==========*/}
              <div id="profileOverview" className="panel panel-default">
                <div className="text-center">
                  <div className="half-bg p-t-20 p-b-20">
                    <Link to="/profile">
                      <div id="ProfileImg">
                        <img
                          className="img-lg img-circle"
                          src={demo_user}
                          alt="demo-user.jpg"
                        />
                      </div>
                      <h4>Peter Semenya</h4>
                    </Link>
                  </div>
                  <hr className="m-0" />
                  {/*========== course and mission overview ==========*/}
                  <div className="panel-body">
                    <div className="row">
                      <div className="col-xs-10">
                        <h6 className="bold progressTitle">
                          <Link to="course">
                            Analysis of Financial Reports
                          </Link>
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
              {/*========== to do ==========*/}
              <div id="todos" className="clearfix panel panel-primary">
                <div className="panel-heading">
                  <h3 className="panel-title text-white">To-Do List</h3>
                </div>
                <div className="panel-body p-0">
                  <div>
                    <Link to="#" className="list-group-item b-0">
                      <i className="fa fa-chevron-right pull-right" />
                      <span>
                        <i className="fa fa-square-o m-r-5" />
                      </span>{" "}
                      Complete Induction course
                    </Link>
                    <Link to="#" className="list-group-item b-0">
                      <i className="fa fa-chevron-right pull-right" />
                      <span>
                        <i className="fa fa-square-o m-r-5" />
                      </span>
                      Start learning Journey
                    </Link>
                    <Link to="#" className="list-group-item b-0">
                      <i className="fa fa-chevron-right pull-right" />
                      <span>
                        <i className="fa fa-square-o m-r-5" />
                      </span>
                      Create a learning journey for yourself
                    </Link>
                    <Link to="#" className="list-group-item b-0">
                      <i className="fa fa-chevron-right pull-right" />
                      <span>
                        <i className="fa fa-square-o m-r-5" />
                      </span>
                      Complete sales mission
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-9">
              {/*========== carousel ==========*/}
              <div
                className="clearfix carousel fade-carousel slide"
                data-ride="carousel"
                data-interval={4000}
                id="home-slide"
              >
                {/* Indicators */}
                <ol className="carousel-indicators">
                  <li
                    data-target="#home-slide"
                    data-slide-to={0}
                    className="active"
                  />
                  <li data-target="#home-slide" data-slide-to={1} />
                  {/* <li data-target="#home-slide" data-slide-to="2"></li> */}
                </ol>
                {/* Wrapper for slides */}
                <div className="carousel-inner">
                  <div className="item slides active">
                    <img
                      src={slide1}
                      alt="slide-1.jpg"
                      style={{ width: "100%" }}
                    />
                    <div className="bannerOverlay" />
                    <div className="hero">
                      <hgroup className="m-b-15">
                        <h3 className="text-white m-b-15">Welcome to</h3>
                        <h1 className="text-white">Oceana LMS</h1>
                        <h5 className="text-white">Learning made simple</h5>
                      </hgroup>
                      <button className="btn btn-secondary">Quick Guide</button>
                    </div>
                  </div>
                  <div className="item slides">
                    <img
                      src={slide2}
                      alt="slide-2.jpg"
                      style={{ width: "100%" }}
                    />
                    <div className="bannerOverlay" />
                    <div className="hero">
                      <hgroup className="m-b-15">
                        <h3 className="text-white m-b-15">on the surface</h3>
                        <h1 className="text-white">a fishing company</h1>
                        <h5 className="text-white">Deepdown, so much more</h5>
                      </hgroup>
                      <button className="btn btn-secondary">Quick Guide</button>
                    </div>
                  </div>
                </div>
              </div>
              {/*========== quick links ==========*/}
              <div className="row m-t-20">
                <div className="col-sm-6" id="myjourneyDash">
                  <div id="journeyStatus" className="panel panel-default">
                    <div className="panel-heading bg-custom1">
                      <div className="row">
                        <div className="col-md-12 col-lg-6">
                          <h2 className="panel-title text-white">
                            My Journey Progress:
                          </h2>
                        </div>
                        <div className="col-md-12 col-lg-6">
                          <form>
                            <select className="form-control input-sm">
                              <option>Management</option>
                            </select>
                          </form>
                        </div>
                      </div>
                    </div>
                    <div className="panel-body">
                      <div className="row">
                        <div className="col-md-12">
                          <h6 className="bold">
                            Store Manager
                            <span className="matrixPercent pull-right">0%</span>
                          </h6>
                          <div className="progress progress-sm">
                            <div
                              className="progress-bar progress-bar-info"
                              role="progressbar"
                              aria-valuenow={89}
                              aria-valuemin={0}
                              aria-valuemax={100}
                              style={{ width: "0%" }}
                            />
                          </div>
                          <Link to="career_journey" title="Set a goal">
                            <label>Due:</label> No goal set{" "}
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="xpGained" className="panel panel-default">
                    <div className="panel-heading bg-custom1">
                      <h5 className="panel-title text-white">
                        Experience Gained
                      </h5>
                    </div>
                    <div className="panel-body text-center">
                      <h3 className="panel-title">No experienced gained yet</h3>
                      Complete courses within your journey to gain experience in
                      specific fields
                    </div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="row">
                    {/*========== find a course ==========*/}
                    <div className="col-sm-6">
                      <div className="panel panel-primary bg-primary bg-img1">
                        <div className="panel-body text-center mx-box-xs center-vertical">
                          <Link to="findacourse">
                            <h5 className="text-white text-uppercase bold m-b-0">
                              Find a course
                            </h5>
                            <h6 className="text-white m-t-0">Suited for you</h6>
                          </Link>
                        </div>
                      </div>
                    </div>
                    {/*========== my courses ==========*/}
                    <div className="col-sm-6">
                      <div className="panel panel-info bg-default bg-img2">
                        <div className="panel-body text-center mx-box-xs center-vertical">
                          <Link to="courses">
                            <h5 className="text-blue text-uppercase bold m-b-0">
                              My Courses
                            </h5>
                            <h6 className="m-t-0">
                              Available training material
                            </h6>
                          </Link>
                        </div>
                      </div>
                    </div>
                    {/*========== available vacancies ==========*/}
                    <div className="col-sm-6">
                      <div className="panel panel-info bg-default bg-img3">
                        <div className="panel-body text-center mx-box-xs center-vertical">
                          <Link to="vacancies">
                            <h5 className="text-blue text-uppercase bold m-b-0">
                              Available Vacancies
                            </h5>
                            <h6 className="m-t-0">Apply today</h6>
                          </Link>
                        </div>
                      </div>
                    </div>
                    {/*========== i need help ==========*/}
                    <div className="col-sm-6">
                      <div
                        className="panel panel-info bg-info bg-img4"
                        data-toggle="modal"
                        data-target="#help_modal"
                      >
                        <div className="panel-body text-center mx-box-xs center-vertical">
                          <h5 className="text-white text-uppercase bold">
                            I need help
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* end row */}
        </div>
        {/* container */}
      </div>
      {/* content */}
    </div>
  );
}

export default Main;
