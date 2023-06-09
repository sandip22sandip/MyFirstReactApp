import React from "react";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { axiosInstance } from "../../utils/axiosInstance";

function CourseProgressMini() {
  const { isLoading, error, data } = useQuery(["userCPMini"], () =>
  axiosInstance
      .get("/rest.php", {
        params: {
          q: "/restAPI/course/getSubCoursesMini/",
          auth: sessionStorage.getItem("AuthToken"),
        },
      })
      .then((res) => {
        return res.data;
      })
  );
  //   console.log(data);

  return (
    <div className="panel panel-default">
      <div className="panel-body">
        {error
          ? "Something went wrong with your request"
          : isLoading
          ? "Loading"
          : data &&
            data["course_info"].map((course) => (
              <div className="row" key={course.course_id}>
                <div className="col-xs-10">
                  <h6 className="bold progressTitle">
                    <Link to={`/course/${course.course_id}`}>
                      {course.course_name}
                    </Link>
                  </h6>
                </div>
                <div className="col-xs-2">
                  <h6 className="matrixPercent pull-right">
                    {course.CompRatio}%
                  </h6>
                </div>
                <div className="col-md-12">
                  <div className="progress progress-sm">
                    <div
                      className="progress-bar progress-bar-success"
                      role="progressbar"
                      aria-valuenow={course.CompRatio}
                      aria-valuemin={0}
                      aria-valuemax={100}
                      style={{ width: `${course.CompRatio}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
      </div>
      <div className="panel-footer" style={{ marginBottom: 14 }}>
        <div className="row text-center">
          <div className="col-xs-12">
            {/* <h5 className="bold">{`${data["CompC"]} / ${data["TotalC"]}`}</h5> */}
            <h5 className="bold">
              {data && data["CompC"]} / {data && data["TotalC"]}
            </h5>
            <span className="small">Completed Courses</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseProgressMini;
