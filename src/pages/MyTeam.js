import React, { useState } from "react";

import { Link } from "react-router-dom";

import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "../utils/axiosInstance";

import useDebounce from "../utils/useDebounce.js";

import demo_user from "../assets/images/users/no-avatar.jpg";

function MyTeam() {
  const [query, setQuery] = useState("");

  const searchValue = useDebounce(query, 500);
  const { isLoading, error, data } = useQuery(["MyTeam", searchValue], () =>
    axiosInstance
      .get("/rest.php", {
        params: {
          q: "/restAPI/user/getUsersList/",
          auth: sessionStorage.getItem("AuthToken"),
        },
      })
      .then((res) => {
        if (searchValue.length === 0 || searchValue.length > 2) {
          const keys = [
            "userid",
            "firstname",
            "lastname",
            "FullName",
            "userType",
            "userLevel",
          ];
          return res.data["users_list"].filter((item) =>
            keys.some((key) => item[key].toLowerCase().includes(searchValue))
          );
        }

        return res.data["users_list"];
      })
  );
  // console.log(data);
  // data.map((user) => ( console.log(user)))

  return (
    <div className="content-page">
      {/* Start content */}
      <div className="content">
        <div className="container">
          <div className="row m-b-15">
            <div className="col-sm-8">
              <h4>My Team</h4>
            </div>
            <div className="col-sm-4">
              {/* <div className="btn-group pull-right">
                <button
                  type="button"
                  className="btn btn-default dropdown-toggle waves-effect waves-light"
                  data-toggle="dropdown"
                  aria-expanded="false"
                >
                  Manage
                  <span className="m-l-5">
                    <i className="fa fa-cog" />
                  </span>
                </button>
                <ul className="dropdown-menu" role="menu">
                  <li>
                    <Link to="/#">Export Report</Link>
                  </li>
                  <li>
                    <Link to="/#">Invite member to your team</Link>
                  </li>
                  <li>
                    <Link to="/#">Seta team goal</Link>
                  </li>
                  <li className="divider" />
                  <li>
                    <Link to="/#">Settings</Link>
                  </li>
                </ul>
              </div> */}
              <div className="input-group">
                <input
                  id="searchCourses"
                  type="text"
                  className="form-control"
                  placeholder="Search..."
                  onChange={(e) =>
                    setQuery(e.target.value.toLowerCase().trim())
                  }
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
            </div>
          </div>
          <div className="panel panel-default">
            <div className="panel-body">
              <div className="table-responsive">
                <table
                  className="table table-striped table-hover"
                  id="myTeamDatatable"
                >
                  <thead>
                    <tr>
                      <th></th>
                      <th>Name</th>
                      <th>Level</th>
                      <th>Position</th>
                      <th>Points</th>
                      <th>Course Progress</th>
                      <th>Manage</th>
                    </tr>
                  </thead>
                  <tbody>
                    {error ? (
                      <tr>
                        <td rowSpan={7}>
                          Something went wrong with your request
                        </td>
                      </tr>
                    ) : isLoading ? (
                      <tr>
                        <td rowSpan={7}>Loading</td>
                      </tr>
                    ) : (
                      data.map((user) => (
                        <tr key={user.idst}>
                          <td>
                            <img
                              src={user?.avatar || demo_user}
                              alt={demo_user}
                              className="img-circle img-xs"
                            />
                          </td>
                          <td>
                            <Link
                              to={`/profile/${user.idst}`}
                            >{`${user.firstname} ${user.lastname}`}</Link>
                          </td>
                          <td>{user?.userLevel}</td>
                          <td>{user?.userType}</td>
                          <td>{user?.userPoints} XP</td>
                          <td>{user?.courseSummary}</td>
                          <td>
                            <Link to={`/profile/${user.idst}`}>View</Link>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyTeam;
