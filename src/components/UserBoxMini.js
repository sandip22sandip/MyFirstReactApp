import React from "react";
import { useQuery } from "@tanstack/react-query";
import demo_user from "../assets/images/users/no-avatar.jpg";
import Spinner from "../utils/Spinner";
import { axiosInstance } from "../utils/axiosInstance";

function UserBoxMini() {
  const { isLoading, error, data } = useQuery(["userInfo"], () =>
    axiosInstance
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

  return (
    <div className="panel panel-default">
      {
        <>
          <div className="panel-body half-bg text-center">
            <div
              id="ProfileImg"
              style={{ position: "relative", margin: "0 auto" }}
            >
              <img
                className="img-lg img-circle"
                src={data?.avatar || demo_user}
                alt={demo_user}
              />
            </div>
            <h4>{data?.FullName}</h4>
            <h6>
              {data?.userLevel} - {data?.userType}
            </h6>
          </div>
          <div className="panel-body">
            <div className="row text-center">
              <div className="col-xs-4">
                <p className="text-blue m-0">
                  <strong>{data?.points}</strong>
                </p>
                <p className="m-0">Points</p>
              </div>
              <div className="col-xs-4">
                <p className="text-blue m-0">
                  <strong>{data?.coins}</strong>
                </p>
                <p className="m-0">Tokens</p>
              </div>
              <div className="col-xs-4">
                <p className="text-blue m-0">
                  <strong>
                    {data?.rank} / {data?.TotalUsers}
                  </strong>
                </p>
                <p className="m-0">Rank</p>
              </div>
            </div>
          </div>
          <div className="panel-footer">
            <div className="row text-center">
              <div className="col-xs-12">
                <h5 className="bold">{data?.courseSummary}</h5>
                <span className="small">Completed Courses</span>
              </div>
            </div>
          </div>
        </>
      }
    </div>
  );
}

export default UserBoxMini;
