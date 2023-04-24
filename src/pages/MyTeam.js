import React from "react";

import { Link } from "react-router-dom";

//jQuery libraries
import "jquery/dist/jquery.min.js";

//Datatable Modules
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import $ from "jquery";

import demo_user from "../assets/images/users/demo-user.jpg";
import demo_mngr from "../assets/images/users/demo-manager.jpg";
import avatar8 from "../assets/images/users/avatar-8.jpg";
import avatar9 from "../assets/images/users/avatar-9.jpg";
import avatar5 from "../assets/images/users/avatar-5.jpg";
import avatar2 from "../assets/images/users/avatar-2.jpg";

function MyTeam() {
  
  //initialize datatable
  $(() => {
    $("#myTeamDatatable").DataTable({
      stateSave: true,
      bDestroy: true,
      aoColumnDefs: [
        { bSortable: false, aTargets: [-1] },
        { bSearchable: false, aTargets: [-1] },
      ],
    });
  });

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
                      <th />
                      <th>Name</th>
                      <th>Level</th>
                      <th>Position</th>
                      <th>Points</th>
                      <th>Learning Journey Progress</th>
                      <th>Manage</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <img
                          src={demo_mngr}
                          className="img-circle img-xs"
                          alt=""
                        />
                      </td>
                      <td>
                        <Link to="/#">Tshepi Maleswena (me)</Link>
                      </td>
                      <td>Manager</td>
                      <td>HR Assistant</td>
                      <td>500xp</td>
                      <td>20%</td>
                      <td>
                        <Link to="/#">Edit</Link> | <Link to="/#">Del</Link>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <img
                          src={demo_user}
                          className="img-circle img-xs"
                          alt=""
                        />
                      </td>
                      <td>
                        <Link to="/#">Peter Semenya</Link>
                      </td>
                      <td>Subordinate</td>
                      <td>Business intelligence analyst</td>
                      <td>100xp</td>
                      <td>
                        <span className="text-danger">No journey assigned</span>
                      </td>
                      <td>
                        <Link to="/#">Edit</Link> | <Link to="/#">Del</Link>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <img
                          src={avatar8}
                          className="img-circle img-xs"
                          alt=""
                        />
                      </td>
                      <td>
                        <Link to="/#">Jean Van Onselen</Link>
                      </td>
                      <td>Subordinate</td>
                      <td>IT Support</td>
                      <td>250xp</td>
                      <td>40%</td>
                      <td>
                        <Link to="/#">Edit</Link> | <Link to="/#">Del</Link>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <img
                          src={avatar9}
                          className="img-circle img-xs"
                          alt=""
                        />
                      </td>
                      <td>
                        <Link to="/#">Werner Minnaar</Link>
                      </td>
                      <td>Subordinate</td>
                      <td>IT Manager</td>
                      <td>290xp</td>
                      <td>70%</td>
                      <td>
                        <Link to="/#">Edit</Link> | <Link to="/#">Del</Link>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <img
                          src={avatar2}
                          className="img-circle img-xs"
                          alt=""
                        />
                      </td>
                      <td>
                        <Link to="/#">Cintia Simoes</Link>
                      </td>
                      <td>Subordinate</td>
                      <td>Junior Marketing Assistant</td>
                      <td>180xp</td>
                      <td>30%</td>
                      <td>
                        <Link to="/#">Edit</Link> | <Link to="/#">Del</Link>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <img
                          src={avatar8}
                          className="img-circle img-xs"
                          alt=""
                        />
                      </td>
                      <td>
                        <Link to="/#">Fred Durst</Link>
                      </td>
                      <td>Subordinate</td>
                      <td>Marketing Assistant</td>
                      <td>430xp</td>
                      <td>70%</td>
                      <td>
                        <Link to="/#">Edit</Link> | <Link to="/#">Del</Link>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <img
                          src={avatar5}
                          className="img-circle img-xs"
                          alt=""
                        />
                      </td>
                      <td>
                        <Link to="/#">Angelique Van Vuuren</Link>
                      </td>
                      <td>Subordinate</td>
                      <td>Sales administrator</td>
                      <td>470xp</td>
                      <td>80%</td>
                      <td>
                        <Link to="/#">Edit</Link> | <Link to="/#">Del</Link>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <img
                          src={avatar5}
                          className="img-circle img-xs"
                          alt=""
                        />
                      </td>
                      <td>
                        <Link to="/#">Ryan Gosling</Link>
                      </td>
                      <td>Subordinate</td>
                      <td>Managing Assistant</td>
                      <td>430xp</td>
                      <td>90%</td>
                      <td>
                        <Link to="/#">Edit</Link> | <Link to="/#">Del</Link>
                      </td>
                    </tr>
                  </tbody>
                </table>
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

export default MyTeam;
