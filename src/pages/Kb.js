import React from "react";

import { Link } from "react-router-dom";

function Kb() {
  return (
    <div className="content-page">
      <div className="content">
        <div className="container">
          {/*=========================== search ===========================*/}
          <div className="panel panel-default bg-custom1">
            <div className="panel-body text-center text-white">
              <h3 className="text-white">Welcome to our Knowledge Centre.</h3>
              <p>
                Browse through availble documents below, visit our services page
                to learn more, or simply contact us for futher support or
                feedback.
              </p>
              <form action="#" className="main-search m-t-15">
                <div className="input-group content-group">
                  <div className="has-feedback has-feedback-left">
                    <input
                      name="searchkb"
                      type="text"
                      className="form-control input-xlg"
                      placeholder="Start searching..."
                    />
                  </div>
                  <div className="input-group-btn">
                    <button type="submit" className="btn btn-secondary">
                      Search
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          {/*=========================== Quick links ===========================*/}
          <div className="row">
            <div className="col-md-4">
              <div className="panel panel-default">
                <div className="panel-body text-center">
                  <h1 className="text-custom2">
                    <i className="fa fa-comments-o" />
                  </h1>
                  <h5>The Forum</h5>
                  <p className="content-group">
                    Join the community and have your say on the forum and get
                    feedback from fellow peers.
                  </p>
                  <p>
                    <Link
                      to="/#"
                      className="btn btn-custom2 waves-light waves-effect"
                    >
                      Visit forum
                    </Link>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="panel panel-default">
                <div className="panel-body text-center">
                  <h1 className="text-success">
                    <i className="fa fa-life-ring" />
                  </h1>
                  <h5>Support Center</h5>
                  <p className="content-group">
                    Can't find what you are looking for? Contact us and our
                    support team will assist you further.
                  </p>
                  <p>
                    <a
                      href="/#"
                      className="btn btn-success waves-light waves-effect"
                      data-toggle="modal"
                      data-target="#help_modal"
                    >
                      Contact us
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="panel panel-default">
                <div className="panel-body text-center">
                  <h1 className="text-custom3">
                    <i className="fa fa-copy" />
                  </h1>
                  <h5>Know Your Services</h5>
                  <p className="content-group">
                    Browse through the services Oceana LMS has to offer, and
                    gain more insight.
                  </p>
                  <p>
                    <Link
                      to="../servicesproducts"
                      className="btn btn-custom3 waves-light waves-effect"
                    >
                      Browse services
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/*=========================== Browse Categories ===========================*/}
          {/* Directory */}
          <div className="text-center">
            <h3>Browse articles by category</h3>
            <p>Click the plus sign to view items inside each category.</p>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="panel panel-default">
                <div className="panel-body">
                  <div className="row">
                    <div className="panel-group" id="accordionCategories">
                      <div className="col-sm-6">
                        <div className="panel panel-light">
                          <div
                            className="panel-heading"
                            style={{ padding: "5px 10px" }}
                          >
                            <h4 className="panel-title">
                              <Link
                                data-toggle="collapse"
                                data-parent="#accordionCategories"
                                to="#policiesProcedures"
                                aria-expanded="false"
                                className="collapsed"
                              >
                                <h6>
                                  <i className="fa fa-folder-open-o" /> Policies
                                  &amp; Procedures
                                </h6>
                              </Link>
                            </h4>
                          </div>
                          <div
                            id="policiesProcedures"
                            className="panel-collapse collapse"
                          >
                            <div className="panel-body p-0">
                              <div className="no-border">
                                <Link to="/#" className="list-group-item b-0">
                                  <i className="fa fa-file-pdf-o m-r-5" />{" "}
                                  Induction Document
                                </Link>
                                <Link to="/#" className="list-group-item b-0">
                                  <i className="fa fa-file-pdf-o m-r-5" />{" "}
                                  Policies and Procedures
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="panel panel-light">
                          <div
                            className="panel-heading"
                            style={{ padding: "5px 10px" }}
                          >
                            <h4 className="panel-title">
                              <Link
                                data-toggle="collapse"
                                data-parent="#accordionCategories"
                                to="#empBenefits"
                                aria-expanded="false"
                                className="collapsed"
                              >
                                <h6>
                                  <i className="fa fa-folder-open-o" /> Employee
                                  Benefits
                                </h6>
                              </Link>
                            </h4>
                          </div>
                          <div
                            id="empBenefits"
                            className="panel-collapse collapse"
                          >
                            <div className="panel-body p-0">
                              <div className="no-border">
                                <Link to="/#" className="list-group-item b-0">
                                  <i className="fa fa-file-pdf-o m-r-5" />{" "}
                                  Provident fund withdrawal forms
                                </Link>
                                <Link to="/#" className="list-group-item b-0">
                                  <i className="fa fa-file-pdf-o m-r-5" />{" "}
                                  Discovery - Application for registration of
                                  newborn baby
                                </Link>
                                <Link to="/#" className="list-group-item b-0">
                                  <i className="fa fa-file-pdf-o m-r-5" /> 2017
                                  Plan Change request form (Holtzhausen)
                                </Link>
                                <Link to="/#" className="list-group-item b-0">
                                  <i className="fa fa-file-pdf-o m-r-5" /> 2017
                                  Application to join Discovery Health as part
                                  of an employer Group
                                </Link>
                                <Link to="/#" className="list-group-item b-0">
                                  <i className="fa fa-file-pdf-o m-r-5" />{" "}
                                  KeyCare hospital networks
                                </Link>
                                <Link to="/#" className="list-group-item b-0">
                                  <i className="fa fa-file-pdf-o m-r-5" />{" "}
                                  Resolution Health Application forms 2017
                                </Link>
                                <Link to="/#" className="list-group-item b-0">
                                  <i className="fa fa-file-pdf-o m-r-5" />{" "}
                                  Momentum Health Brochure
                                </Link>
                                <Link to="/#" className="list-group-item b-0">
                                  <i className="fa fa-file-pdf-o m-r-5" />{" "}
                                  Momentum Health Group Application form
                                </Link>
                                <Link to="/#" className="list-group-item b-0">
                                  <i className="fa fa-file-pdf-o m-r-5" />{" "}
                                  Discovery - Compare our plans 2017
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="panel panel-light">
                          <div
                            className="panel-heading"
                            style={{ padding: "5px 10px" }}
                          >
                            <h4 className="panel-title">
                              <Link
                                data-toggle="collapse"
                                data-parent="#accordionCategories"
                                to="#disciplinaryDocs"
                                aria-expanded="false"
                                className="collapsed"
                              >
                                <h6>
                                  <i className="fa fa-folder-open-o" />{" "}
                                  Disciplinary Documents
                                </h6>
                              </Link>
                            </h4>
                          </div>
                          <div
                            id="disciplinaryDocs"
                            className="panel-collapse collapse"
                          >
                            <div className="panel-body p-0">
                              <div className="no-border">
                                <Link to="/#" className="list-group-item b-0">
                                  <i className="fa fa-file-pdf-o m-r-5" />{" "}
                                  Verbal Warning
                                </Link>
                                <Link to="/#" className="list-group-item b-0">
                                  <i className="fa fa-file-pdf-o m-r-5" />{" "}
                                  Notice of Suspension
                                </Link>
                                <Link to="/#" className="list-group-item b-0">
                                  <i className="fa fa-file-pdf-o m-r-5" />{" "}
                                  Notice of Dismissal
                                </Link>
                                <Link to="/#" className="list-group-item b-0">
                                  <i className="fa fa-file-pdf-o m-r-5" />{" "}
                                  Notice of Disciplinary Hearing
                                </Link>
                                <Link to="/#" className="list-group-item b-0">
                                  <i className="fa fa-file-pdf-o m-r-5" />{" "}
                                  Intoxication form
                                </Link>
                                <Link to="/#" className="list-group-item b-0">
                                  <i className="fa fa-file-pdf-o m-r-5" />{" "}
                                  Grievance Form
                                </Link>
                                <Link to="/#" className="list-group-item b-0">
                                  <i className="fa fa-file-pdf-o m-r-5" /> Final
                                  Warning
                                </Link>
                                <Link to="/#" className="list-group-item b-0">
                                  <i className="fa fa-file-pdf-o m-r-5" />{" "}
                                  Chairpersons Record
                                </Link>
                                <Link to="/#" className="list-group-item b-0">
                                  <i className="fa fa-file-pdf-o m-r-5" />{" "}
                                  Written Warning
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="panel panel-light">
                          <div
                            className="panel-heading"
                            style={{ padding: "5px 10px" }}
                          >
                            <h4 className="panel-title">
                              <Link
                                data-toggle="collapse"
                                data-parent="#accordionCategories"
                                to="#OnboardingProcess"
                                aria-expanded="false"
                                className="collapsed"
                              >
                                <h6>
                                  <i className="fa fa-folder-open-o" /> Group
                                  On-boarding process and documentation
                                </h6>
                              </Link>
                            </h4>
                          </div>
                          <div
                            id="OnboardingProcess"
                            className="panel-collapse collapse"
                          >
                            <div className="panel-body p-0">
                              <div className="no-border">
                                <Link to="/#" className="list-group-item b-0">
                                  <i className="fa fa-file-pdf-o m-r-5" /> New
                                  Employee Induction check list
                                </Link>
                                <Link to="/#" className="list-group-item b-0">
                                  <i className="fa fa-file-pdf-o m-r-5" />{" "}
                                  On-Boarding Strategy
                                </Link>
                                <Link to="/#" className="list-group-item b-0">
                                  <i className="fa fa-file-pdf-o m-r-5" />{" "}
                                  On-Boarding Procedure
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="panel panel-light">
                          <div
                            className="panel-heading"
                            style={{ padding: "5px 10px" }}
                          >
                            <h4 className="panel-title">
                              <Link
                                data-toggle="collapse"
                                data-parent="#accordionCategories"
                                to="#performanceManagement"
                                aria-expanded="false"
                                className="collapsed"
                              >
                                <h6>
                                  <i className="fa fa-folder-open-o" />{" "}
                                  Performance Management
                                </h6>
                              </Link>
                            </h4>
                          </div>
                          <div
                            id="performanceManagement"
                            className="panel-collapse collapse"
                          >
                            <div className="panel-body p-0">
                              <div className="no-border">
                                <Link to="/#" className="list-group-item b-0">
                                  <i className="fa fa-file-pdf-o m-r-5" />{" "}
                                  Performance Management Policies
                                </Link>
                                <Link to="/#" className="list-group-item b-0">
                                  <i className="fa fa-file-pdf-o m-r-5" />{" "}
                                  Managerial Directive for the effective
                                  evaluation of Group values within the
                                  framework of performance management
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="panel panel-light">
                          <div
                            className="panel-heading"
                            style={{ padding: "5px 10px" }}
                          >
                            <h4 className="panel-title">
                              <Link
                                data-toggle="collapse"
                                data-parent="#accordionCategories"
                                to="#empWellness"
                                aria-expanded="false"
                                className="collapsed"
                              >
                                <h6>
                                  <i className="fa fa-folder-open-o" /> Employee
                                  Wellness
                                </h6>
                              </Link>
                            </h4>
                          </div>
                          <div
                            id="empWellness"
                            className="panel-collapse collapse"
                          >
                            <div className="panel-body p-0">
                              <div className="no-border">
                                <Link to="/#" className="list-group-item b-0">
                                  <i className="fa fa-file-pdf-o m-r-5" />{" "}
                                  Employee Wellness Policy
                                </Link>
                                <Link to="/#" className="list-group-item b-0">
                                  <i className="fa fa-file-pdf-o m-r-5" />{" "}
                                  Wellness Report
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* /directory */}
        </div>{" "}
        {/* container */}
      </div>{" "}
      {/* content */}
    </div>
  );
}

export default Kb;
