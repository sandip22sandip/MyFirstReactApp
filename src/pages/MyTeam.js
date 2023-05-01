import React from "react";

import { Link } from "react-router-dom";

import { useQuery } from "@tanstack/react-query";
import axios from "axios";

// //jQuery libraries
// import "jquery/dist/jquery.min.js";

// //Datatable Modules
// import "datatables.net-dt/js/dataTables.dataTables";
// import "datatables.net-dt/css/jquery.dataTables.min.css";
// import $ from "jquery";

import demo_mngr from "../assets/images/users/demo-manager.jpg";

function MyTeam() {
  const { isLoading, error, data } = useQuery(["MyTeam"], () =>
    axios
      .get("/rest.php", {
        params: {
          q: "/restAPI/user/getUsersList/",
          auth: sessionStorage.getItem("AuthToken"),
        },
      })
      .then((res) => {
        return res.data["users_list"];
      })
  );
  // console.log(data)
  // data.map((user) => ( console.log(user)))

  //initialize datatable
  // $(() => {
  //   $("#myTeamDatatable").DataTable({
  //     stateSave: true,
  //     bDestroy: true,
  //     aoColumnDefs: [
  //       { bSortable: false, aTargets: [-1] },
  //       { bSearchable: false, aTargets: [-1] },
  //     ],
  //   });
  // });

  return (
    <div className="content-page">
      {/* Start content */}
      <div className="content">
        <div className="container">
          <div className="row m-b-15">
            <div className="col-sm-6">
              <h4>My Team</h4>
            </div>
            <div className="col-sm-6">
              <div className="btn-group pull-right">
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
                      <th>Learning Journey Progress</th>
                      <th>Manage</th>
                    </tr>
                  </thead>
                  <tbody>
                    {error
                      ? <tr><td rowSpan={7}>Something went wrong with your request</td></tr>
                      : isLoading
                      ? <tr><td rowSpan={7}>Loading</td></tr>
                      : data.map((user) => (
                          <tr key={user.idst}>
                            <td>
                              <img
                                src={demo_mngr}
                                className="img-circle img-xs"
                                alt=""
                              />
                            </td>
                            <td>
                              <Link to="/#">{`${user.firstname} ${user.lastname}`}</Link>
                            </td>
                            <td>Manager</td>
                            <td>HR Assistant</td>
                            <td>500xp</td>
                            <td>20%</td>
                            <td>
                              <Link to="/#">Edit</Link> |
                              <Link to="/#">Del</Link>
                            </td>
                          </tr>
                        ))}
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
