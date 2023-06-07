import React from "react";

import demo_user from "../assets/images/users/no-avatar.jpg";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import Spinner from "../utils/Spinner";

function Leaderboard() {
  const { isLoading, error, data } = useQuery(["leaderboard"], () =>
    axios
      .get("/rest.php", {
        params: {
          q: "/restAPI/reward/getLeaderboard/",
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
              <select name="filter" className="form-control">
                <option value="">All Time</option>
                <option value="month">This Month</option>
                <option value="week">This Week</option>
              </select>
            </div>
          </div>
          <div className="row">
            <div className="col-md-9">
              {data.map((user, i) => (
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
              ))}
            </div>
            {/*=========================== challenges ===========================*/}
            <div className="col-md-3">
              <div className="p-10">
                <h5>Get to the top!</h5>
                <p>Do challenges to earn more points and rank higher.</p>
                <div className="m-t-15 m-b-15">
                  <span>
                    0/1 <a href="/#">Onboarding Tutorial Challenge</a>
                  </span>
                  <p className="small">Points: 100 | Coins: 20</p>
                </div>
                <div className="m-t-15 m-b-15">
                  <span>
                    0/1 <a href="/#">Staff Survey Challenge</a>
                  </span>
                  <p className="small">Points: 500 | Coins: 50</p>
                </div>
                <div className="m-t-15 m-b-15">
                  <span>
                    0/1 <a href="/#">Oceana LMS Poll Challenge</a>
                  </span>
                  <p className="small">Points: 250 | Coins: 100</p>
                </div>
                <div className="m-t-15 m-b-15">
                  <span>
                    0/1 <a href="/#">Comment on 10 Posts</a>
                  </span>
                  <p className="small">Points: 150 | Coins: 15</p>
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

export default Leaderboard;
