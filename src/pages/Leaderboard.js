import React, { useEffect, useState } from "react";

import demo_user from "../assets/images/users/no-avatar.jpg";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import Spinner from "../utils/Spinner";

function Leaderboard() {
  const [filter, setFilter] = useState("");

  const { isLoading, error, data, refetch } = useQuery(["leaderboard"], () =>
    axios
      .get("/rest.php", {
        params: {
          q: "/restAPI/reward/getLeaderboard/",
          auth: sessionStorage.getItem("AuthToken"),
          filter: filter,
        },
      })
      .then((res) => {
        return res.data["details"];
      })
  );
  // console.log(data);

  useEffect(() => {
    refetch();
  }, [refetch, filter]);

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
    <div className="content-page">
      {/* Start content */}
      <div className="content">
        <div className="container">
          {/*=========================== intro & filter ===========================*/}
          <div className="row m-b-15">
            <div className="col-sm-9">
              <h4>Who is taking flight?</h4>
              <p>
                Check the leaderboard below to see where you rank, and who is in
                the poll position.
              </p>
            </div>
            <div className="col-sm-3">
              <select
                name="filter"
                className="form-control"
                onChange={(e) => setFilter(e.target.value)}
              >
                <option value="">All Time</option>
                <option value="day">Today</option>
                <option value="week">This Week</option>
                <option value="month">This Month</option>
              </select>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              {data.length === 0 ? (
                <p>No data found.</p>
              ) : (
                data.map((user, i) => (
                  <div key={user.idst} className="panel panel-default">
                    <div className="row leaderboard__user p-10">
                      <div className="col-xs-3 col-sm-2 leaderboard__user__points-position text-center">
                        <h3 className="bold">#{i + 1}</h3>
                      </div>
                      <div className="visible-xs col-xs-9 leaderboard__user__points-position text-right">
                        <h3 className="bold">{user?.TotalPoints} XP</h3>
                      </div>
                      <div className="col-xs-12 col-sm-8">
                        <img
                          className="img-sm img-circle pull-left m-r-10"
                          src={user?.avatar || demo_user}
                          alt={demo_user}
                        />
                        <h5 className="bold">
                          <span className="m-r-15">
                            {user?.firstname} {user?.lastname}
                          </span>
                        </h5>
                      </div>
                      <div className="hidden-xs col-sm-2 leaderboard__user__points-position text-right">
                        <h3 className="bold">{user?.TotalPoints} XP</h3>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>{" "}
        {/* container */}
      </div>{" "}
      {/* content */}
    </div>
  );
}

export default Leaderboard;
