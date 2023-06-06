import React, { useState } from "react";

import noimage from "../assets/images/course-imgs/noimage.png";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

import useDebounce from "../customhooks/useDebounce.js";

function Courses() {
  const [query, setQuery] = useState("");

  const searchValue = useDebounce(query, 500);

  const { isLoading, error, data } = useQuery(["courses", searchValue], () =>
    axios
      .get("/rest.php", {
        params: {
          q: "/restAPI/course/getSubCourses/",
          auth: sessionStorage.getItem("AuthToken"),
        },
      })
      .then((res) => {
        if (searchValue.length === 0 || searchValue.length > 2) {
          const keys = ["course_name"];
          return res.data["course_info"].filter((item) =>
            keys.some((key) => item[key].toLowerCase().includes(searchValue))
          );
        }

        return res.data["course_info"];
      })
  );
  // console.log(data);

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
                    onChange={(e) => setQuery(e.target.value.toLowerCase())}
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
            {error
              ? "Something went wrong with your request"
              : isLoading
              ? "Loading"
              : data.map((course) => (
                  <div
                    key={course.course_id}
                    className="col-sm-6 col-md-4 col-lg-3 col-xl-2"
                  >
                    <div className="panel panel-default card">
                      <div className="card-img-thumb">
                        <div className="overlay">
                          <div id="card-info-btn" className="card-info-btn">
                            <a
                              href="/#"
                              data-toggle="modal"
                              data-target={`#courseInfo${course.course_id}`}
                              className="btn btn-default btn-sm"
                            >
                              <i className="fa fa-info" />
                            </a>
                          </div>
                        </div>
                        <img
                          src={course.course_logo || noimage}
                          alt={noimage}
                        />
                      </div>
                      <div className="progress progress-sm">
                        <div
                          className="progress-bar progress-bar-secondary"
                          role="progressbar"
                          aria-valuenow={
                            !isNaN(course.CompRatio) && course.CompRatio
                          }
                          aria-valuemin={0}
                          aria-valuemax={100}
                          style={{
                            width: `${
                              !isNaN(course.CompRatio) && course.CompRatio
                            }%`,
                          }}
                        ></div>
                      </div>
                      <div className="panel-body hover-desc">
                        <div
                          className="small m-b-5"
                          title="{course.course_name}"
                        >
                          <i className="fa fa-bookmark-o" />{" "}
                          {course.course_type}
                        </div>
                        <h3 className="panelTitle">{course?.course_name}</h3>
                        <Link
                          to={`/course/${course.course_id}`}
                          type="button"
                          className="btn btn-default btn-block waves-effect waves-light"
                        >
                          Launch
                        </Link>
                      </div>
                    </div>

                    <div
                      className="modal fade"
                      id={`courseInfo${course.course_id}`}
                    >
                      <div className="modal-dialog">
                        <div className="modal-content p-0 b-0">
                          <div className="panel panel-color panel-info b-0">
                            <div className="panel-heading">
                              <button
                                type="button"
                                className="close"
                                data-dismiss="modal"
                                aria-hidden="true"
                              >
                                <i className="fa fa-close" />
                              </button>
                              <h3 className="panel-title">
                                {course?.course_name}
                              </h3>
                            </div>
                            <div className="panel-body">
                              <p>{course?.course_description}</p>
                            </div>
                            <div className="panel-footer">
                              <div>
                                <a
                                  href="/#"
                                  className="btn btn-default waves-light waves-effect"
                                  data-dismiss="modal"
                                >
                                  Cancel
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
          </div>
        </div>{" "}
        {/* container */}
      </div>{" "}
      {/* content */}
    </div>
  );
}

export default Courses;
