import React, { useState } from "react";

import noimage from "../assets/images/course-imgs/noimage.png";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useEffect } from "react";
import Spinner from "../utils/Spinner";

function Courses() {
  const [type, setType] = useState("");
  const [status, setStatus] = useState("");
  const [search, setSearch] = useState("");

  const { isLoading, error, data, refetch } = useQuery(["SubCourses"], () =>
    axios
      .get("/rest.php", {
        params: {
          q: "/restAPI/course/getSubCourses/",
          auth: sessionStorage.getItem("AuthToken"),
          type: type,
          status: status,
          search: search,
        },
      })
      .then((res) => {
        return res.data["course_info"];
      })
  );

  const handleSearch = () => {
    refetch();
  };

  useEffect(() => {
    refetch();
  }, [refetch, type]);

  useEffect(() => {
    refetch();
  }, [refetch, status]);

  if (isLoading) {
    return (
      <div>
        <Spinner />
      </div>
    );
  }

  if (error) {
    return <div>Error occurred while fetching data</div>;
  }

  // console.log(options);
  // console.log(search);

  return (
    <div className="content-page">
      <div className="content">
        <div className="container">
          {/*=========================== search and filter panel ===========================*/}
          <div className="row m-b-15">
            {/*========== filter Category ==========*/}
            <div className="col-sm-2">
              <select
                id="filterTypes"
                name="filterTypes"
                className="filter form-control"
                onChange={(e) => setType(e.target.value)}
              >
                <option value="">All Types</option>
                <option value="elearning">E-Learning</option>
                <option value="classroom">Classroom</option>
                <option value="assessment">Assessment</option>
                <option value="edition">E-Learning with Editions</option>
              </select>
              <i className="fa fa-filter text-muted" />
            </div>
            {/*========== filter Status ==========*/}
            <div className="col-sm-2">
              <select
                id="filterStatus"
                name="filterStatus"
                className="form-control filter"
                onChange={(e) => setStatus(e.target.value)}
              >
                <option value="">All Status</option>
                <option value="1">In progress</option>
                <option value="2">Completed</option>
                <option value="0">Pending</option>
              </select>
              <i className="fa fa-filter text-muted" />
            </div>
            {/*========== search ==========*/}
            <div className="col-sm-4 col-sm-offset-4">
              <form className="search">
                <div className="input-group">
                  <input
                    id="searchCourses"
                    name="searchCourses"
                    type="text"
                    className="form-control"
                    placeholder="Search..."
                    onChange={(e) => setSearch(e.target.value)}
                  />
                  <span className="input-group-btn">
                    <button
                      id="searchBtn"
                      className="btn btn-secondary waves-effect waves-light"
                      type="button"
                      onClick={handleSearch}
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
            {data.length === 0 ? (
              <p>No data found.</p>
            ) : (
              data.map((course) => (
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
                      <img src={course.course_logo || noimage} alt={noimage} />
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
                      <div className="small m-b-5" title="{course.course_name}">
                        <i className="fa fa-bookmark-o" /> {course.course_type}
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
              ))
            )}
          </div>
        </div>{" "}
        {/* container */}
      </div>{" "}
      {/* content */}
    </div>
  );
}

export default Courses;
