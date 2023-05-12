import React from "react";

import { Link } from "react-router-dom";

function Modals() {
  return (
    <>
      <div>
        <div
          className="modal fade modal-slideright"
          id="help_modal"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content b-0 p-0">
              <div className="panel panel-primary b-0 no-shadow">
                <div className="panel-heading">
                  <button
                    type="button"
                    data-dismiss="modal"
                    className="close btn-xs text-white"
                  >
                    <i className="fa fa-times" />
                  </button>
                  <h4 className="panel-title text-white">Helpdesk</h4>
                </div>
                <div className="panel-body">
                  <div className="row form">
                    <div className="col-md-12">
                      <div className="form-group">
                        <select id="supportOptions" className="form-control">
                          <option>I need help with...</option>
                          <option id={1} value="Platform Support">
                            I need assistance with system
                          </option>
                          <option id={2} value="Facilities Help Desk">
                            Facilities Help Desk
                          </option>
                          <option id={3} value="Facilities Help Desk">
                            I want to ask the CEO a question
                          </option>
                          <option id={4} value="Other">
                            Other
                          </option>
                        </select>
                      </div>
                      <div className="form-group">
                        <textarea
                          id="supportText"
                          className="form-control"
                          rows={5}
                          placeholder="Type additional info here..."
                          defaultValue={""}
                        />
                      </div>
                      <div className="form-group">
                        <div
                          className="fileinput fileinput-new"
                          data-provides="fileinput"
                        >
                          <span className="btn btn-default btn-file">
                            <span>Choose file</span>
                            <input type="file" />
                          </span>
                          <span className="fileinput-filename" />
                          <span className="fileinput-new">No file chosen</span>
                        </div>
                      </div>
                      <hr />
                      <button
                        id="sendSupportRequest_btn"
                        type="button"
                        data-dismiss="modal"
                        className="btn btn-secondary btn-block"
                      >
                        Send
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* notification modal */}
        <div
          className="modal fade modal-slideright"
          id="notification_modal"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content p-0 b-0">
              <div className="panel panel-primary b-0 no-shadow">
                <div className="panel-heading">
                  <button
                    type="button"
                    data-dismiss="modal"
                    className="close btn-xs text-white"
                  >
                    <i className="fa fa-times" />
                  </button>
                  <h4 className="panel-title text-white">Notifications</h4>
                </div>
                <div className="panel-body">
                  <h6 className="bold">1 New notification</h6>
                  <hr />
                  <div>
                    <Link to="/courses" className="list-group-item b-0" data-dismiss="modal">
                      <i className="fa fa-chevron-right pull-right" /> New
                      journey assignment
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* profile modal */}
        <div
          className="modal fade modal-slideright"
          id="profile_modal"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content p-0 b-0">
              <div className="panel panel-primary b-0 no-shadow">
                <div className="panel-heading">
                  <button
                    type="button"
                    data-dismiss="modal"
                    className="close btn-xs text-white"
                  >
                    <i className="fa fa-times" />
                  </button>
                  <h4 className="panel-title text-white">Notifications</h4>
                </div>
                <div className="panel-body">
                  <div className="row m-b-15">
                    <div className="col-xs-6">
                      <Link
                        className="btn btn-default btn-block btn-lg p-30"
                        to="profile"
                      >
                        Profile
                      </Link>
                    </div>
                    <div className="col-xs-6">
                      <Link
                        className="btn btn-default btn-block btn-lg p-30"
                        to="courses"
                      >
                        {" "}
                        Courses
                      </Link>
                    </div>
                  </div>
                  <div className="row m-b-15">
                    <div className="col-xs-6">
                      <Link
                        className="btn btn-default btn-block btn-lg p-30"
                        to="missions"
                      >
                        {" "}
                        Missions
                      </Link>
                    </div>
                    <div className="col-xs-6">
                      <Link
                        className="btn btn-default btn-block btn-lg p-30"
                        to="learning-journey"
                      >
                        {" "}
                        Learning Journey
                      </Link>
                    </div>
                  </div>
                  <div className="row m-b-15">
                    <div className="col-xs-6">
                      <Link
                        className="btn btn-default btn-block btn-lg p-30"
                        to="performance"
                      >
                        {" "}
                        Performance
                      </Link>
                    </div>
                    <div className="col-xs-6">
                      <Link
                        className="btn btn-default btn-block btn-lg p-30"
                        to="../manager/login"
                      >
                        {" "}
                        Sign Out
                      </Link>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-xs-6">
                      <Link
                        className="btn btn-default btn-block btn-lg p-30"
                        to="#"
                        data-toggle="modal"
                        data-target="#help_modal"
                      >
                        {" "}
                        Help
                      </Link>
                    </div>
                    <div className="col-xs-6"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Modals;
