import React, { useEffect, useState } from "react";

import noimage from "../assets/images/course-imgs/noimage.png";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import Spinner from "../utils/Spinner";

import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.css";
import QueryString from "qs";

function FindACourse() {
  const [type, setType] = useState("");
  const [cat, setCat] = useState("");
  const [search, setSearch] = useState("");
  const [options, setOptions] = useState([]);

  const queryClient = useQueryClient();

  const { isLoading, error, data, refetch } = useQuery(["FindACourse"], () =>
    axios
      .get("/rest.php", {
        params: {
          q: "/restAPI/course/getUnSubCourses/",
          auth: sessionStorage.getItem("AuthToken"),
          type: type,
          cat: cat,
          search: search,
        },
      })
      .then((res) => {
        return res.data["course_info"];
      })
  );

  const mutation = useMutation({
    mutationFn: (course_id) => {
      var csData = QueryString.stringify({
        course_id: course_id,
      });

      var config = {
        method: "post",
        url: "/rest.php",
        params: {
          q: "/restAPI/course/addUserSubscription/",
          auth: sessionStorage.getItem("AuthToken"),
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        data: csData,
      };

      return axios(config);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["FindACourse"]);
    },
  });

  useEffect(() => {
    async function fetchData() {
      // Fetch data
      const { data } = await axios.get("/rest.php", {
        params: {
          q: "/restAPI/course/getAllCourseCat/",
          auth: sessionStorage.getItem("AuthToken"),
        },
      });
      const results = [];
      // Store results in the results array
      data["details"] &&
        data["details"].forEach((value) => {
          results.push({
            key: value.path,
            value: value.idCategory,
          });
        });
      // Update the options state
      setOptions([{ key: "All Categories", value: "" }, ...results]);
    }

    // Trigger the fetch
    fetchData();
  }, []);

  const handleSearch = () => {
    refetch();
  };

  useEffect(() => {
    refetch();
  }, [refetch, type]);

  useEffect(() => {
    refetch();
  }, [refetch, cat]);

  const showAlert = (course_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You will be subscribe to the Course!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, subscribe me!",
    }).then((result) => {
      if (result.isConfirmed) {
        mutation.mutate(course_id);
        Swal.fire(
          "Subscribed!",
          "You have been successfully subscribe to the Course.",
          "success"
        );
      }
    });
  };

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

  // console.log(data.length);
  // console.log(search);

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
                        id="filterTypes"
                        name="filterTypes"
                        className="filter form-control"
                        onChange={(e) => setType(e.target.value)}
                      >
                        <option value="">All Types</option>
                        <option value="elearning">E-Learning</option>
                        <option value="classroom">Classroom</option>
                        <option value="assessment">Assessment</option>
                        <option value="edition">
                          E-Learning with Editions
                        </option>
                      </select>
                      <i className="fa fa-filter text-muted" />
                    </div>
                    <div className="col-sm-6">
                      <select
                        id="filterCat"
                        className="filter form-control"
                        onChange={(e) => setCat(e.target.value)}
                      >
                        {options.map((option) => {
                          return (
                            <option key={option.value} value={option.value}>
                              {option.key}
                            </option>
                          );
                        })}
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
                        name="searchCourses"
                        type="text"
                        className="form-control"
                        placeholder="Search..."
                        onChange={(e) => setSearch(e.target.value)}
                      />
                      <span className="input-group-btn">
                        <button
                          id="searchBtn"
                          name="searchBtn"
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
                    <div className="panel-body hover-desc">
                      <div className="small m-b-5" title="topic">
                        <i className="fa fa-bookmark-o" /> {course.course_type}
                      </div>
                      <h3 className="panelTitle">{course?.course_name}</h3>
                      <button
                        type="button"
                        className="btn btn-default btn-block waves-effect waves-light"
                        onClick={() => showAlert(course.course_id)}
                      >
                        Enroll
                      </button>
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
                            <h5>{course?.course_name}</h5>
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
      </div>
    </div>
  );
}

export default FindACourse;
