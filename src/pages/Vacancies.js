import React from "react";

function Vacancies() {
  return (
    <div className="content-page">
      <div className="content">
        <div className="container">
          <div className="row">
            <div className="col-sm-9">
              {/*=========================== vacancies ===========================*/}
              <div className="panel-group" id="sectionAccordion">
                {/*========== section ==========*/}
                <div className="panel sections">
                  <a
                    data-toggle="collapse"
                    data-parent="#sectionAccordion"
                    href="#section1"
                    className="panel-heading collapsed"
                  >
                    <div className="row">
                      <div className="col-xs-11 col-sm-8">
                        <h6 className="bold">Supervisor: Warehouse</h6>
                      </div>
                      <div className="col-xs-1 col-sm-4">
                        <div className="text-right">
                          <h6>
                            <i className="fa fa-circle text-success" />{" "}
                            <span className="hidden-xs">Available</span>
                          </h6>
                        </div>
                      </div>
                    </div>
                  </a>
                  <div id="section1" className="panel-collapse collapse">
                    <div className="panel-body p-t-0">
                      <hr className="m-t-0" />
                      <div className="m-b-30">
                        <span
                          className="label text-dark"
                          title="Reference Number"
                        >
                          Ref 60008665
                        </span>
                        <span
                          className="label label-warning"
                          title="Closing date"
                        >
                          <i className="fa fa-clock-o" />7 Nov 2018
                        </span>
                        <span
                          className="label label-info"
                          title="Job Type Classification"
                        >
                          Type: Permanent
                        </span>
                        <span
                          className="label label-info"
                          title="Location - Town / City"
                        >
                          Location: City Deep, Johannesburg
                        </span>
                        <span
                          className="label label-info"
                          title="Location - Province"
                        >
                          Province: Gauteng
                        </span>
                        <span
                          className="label label-info"
                          title="Location - Country"
                        >
                          Country: South Africa
                        </span>
                      </div>
                      <h6>Salary</h6>
                      <p>ZAR200,000 - ZAR2,300,000/annum</p>
                      <hr />
                      <h6>Key Performance Areas:</h6>
                      <ul>
                        <li>
                          Planning and organising the daily activities of staff.
                        </li>
                        <li>
                          Monitor and control the loading/offloading of
                          containers to ensure best posiible series through fast
                          turnaround times.
                        </li>
                        <li>
                          Minimise errors, damage to products and claims through
                          ongoing application of corrective actions.
                        </li>
                        <li>
                          Ensure that the work environment is maintained in
                          accordance with set helath, safety and environmental
                          standards.
                        </li>
                        <li>Ensure that company regulations are adhered to.</li>
                        <li>
                          Planning regular stock counts and ensuring accurate
                          record keeping of stock movement is maintained.
                        </li>
                        <li>Documenr controller for ISO management system.</li>
                        <li>
                          Adherance to documented procedures and controls.
                        </li>
                        <li>Effective customer liaisison.</li>
                        <li>
                          Disciplining of staff as per Company's disciplinary
                          procedures and ensuring that company rules and
                          regulations are adhered to.
                        </li>
                      </ul>
                      <hr />
                      <h6>Knowledge, Skills and Attributes</h6>
                      <ul>
                        <li>Good communication skills</li>
                        <li>
                          Adaptability to make careful independent decisions
                        </li>
                        <li>Ability to handle pressure</li>
                        <li>Planning and organising ability</li>
                        <li>
                          Availability to work overtime and shifts(includng
                          weekends)
                        </li>
                        <li>
                          Knowledgable with the intake documentation and
                          inspection process.
                        </li>
                        <li>Understanding of SAP workflow processes.</li>
                      </ul>
                      <hr />
                      <h6>Qualifications, Competencies and Experience</h6>
                      <ul>
                        <li>Matric plus a relevant tertiary qualification</li>
                        <li>
                          At least 3 years relevant supervisory experience in a
                          similar environment
                        </li>
                        <li>Computer lietrate (MS Word,Excel and Outlook)</li>
                        <li>SAP experience</li>
                      </ul>
                    </div>
                    <div className="panel-footer">
                      <div className="text-right">
                        <button
                          type="button"
                          data-toggle="modal"
                          data-target="#openJobApplication"
                          className="btn btn-success"
                        >
                          Apply
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                {/*========== section ==========*/}
                <div className="panel sections">
                  <a
                    data-toggle="collapse"
                    data-parent="#sectionAccordion"
                    href="#section2"
                    className="panel-heading collapsed"
                  >
                    <div className="row">
                      <div className="col-xs-11 col-sm-8">
                        <h6 className="bold">Customer Support Specialist</h6>
                      </div>
                      <div className="col-xs-1 col-sm-4">
                        <div className="text-right">
                          <h6>
                            <i className="fa fa-circle text-warning" />{" "}
                            <span className="hidden-xs">Applied</span>
                          </h6>
                        </div>
                      </div>
                    </div>
                  </a>
                  <div id="section2" className="panel-collapse collapse">
                    <div className="panel-body p-t-0">
                      <hr className="m-t-0" />
                      <div className="m-b-30">
                        <span
                          className="label text-dark"
                          title="Reference Number"
                        >
                          Ref CCS0027
                        </span>
                        <span
                          className="label label-warning"
                          title="Closing date"
                        >
                          <i className="fa fa-clock-o" />7 Nov 2018
                        </span>
                        <span
                          className="label label-info"
                          title="Job Type Classification"
                        >
                          Type: Permanent
                        </span>
                        <span
                          className="label label-info"
                          title="Location - Town / City"
                        >
                          Location: Paarden Eiland
                        </span>
                        <span
                          className="label label-info"
                          title="Location - Province"
                        >
                          Province: Western Cape
                        </span>
                        <span
                          className="label label-info"
                          title="Location - Country"
                        >
                          Country: South Africa
                        </span>
                      </div>
                      <h6>Job Description</h6>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit
                        anim id est laborum.
                      </p>
                      <hr />
                      <p>
                        <a
                          href="../assets/images/content/job-sample.pdf"
                          target="_new"
                          className="link-info"
                        >
                          View job specifications
                        </a>
                      </p>
                    </div>
                    <div className="panel-footer">
                      <div className="text-right">
                        <button
                          className="btn btn-warning waves-effect waves-light"
                          id="applied-vac"
                        >
                          Applied
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                {/*========== section ==========*/}
                <div className="panel sections">
                  <a
                    data-toggle="collapse"
                    data-parent="#sectionAccordion"
                    href="#section3"
                    className="panel-heading collapsed"
                  >
                    <div className="row">
                      <div className="col-xs-11 col-sm-8">
                        <h6 className="bold">Junior Marketing Assistant</h6>
                      </div>
                      <div className="col-xs-1 col-sm-4">
                        <div className="text-right">
                          <h6>
                            <i className="fa fa-circle text-danger" />{" "}
                            <span className="hidden-xs">Vacant Filled</span>
                          </h6>
                        </div>
                      </div>
                    </div>
                  </a>
                  <div id="section3" className="panel-collapse collapse">
                    <div className="panel-body p-t-0">
                      <hr className="m-t-0" />
                      <div className="m-b-30">
                        <span
                          className="label text-dark"
                          title="Company"
                          id="company"
                        >
                          Ref CD123457
                        </span>
                        <span
                          className="label label-warning"
                          title="Closing date"
                        >
                          <i className="fa fa-clock-o" />7 Nov 2018
                        </span>
                        <span
                          className="label label-info"
                          title="Job Type Classification"
                          id="jobType"
                        >
                          Type: Permanent
                        </span>
                        <span
                          className="label label-info"
                          title="Location - Town / City"
                          id="city"
                        >
                          Location: Johannesburg North
                        </span>
                        <span
                          className="label label-info"
                          title="Location - Province"
                          id="province"
                        >
                          Province: Gauteng
                        </span>
                        <span
                          className="label label-info"
                          title="Location - Country"
                          id="country"
                        >
                          Country: South Africa
                        </span>
                      </div>
                      <h6>Job Description</h6>
                      <p>
                        Oceana Karaglen Branch is one of the Lorem ipsum dolor
                        sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut
                        enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat. Duis
                        aute irure dolor in reprehenderit in voluptate velit
                        esse cillum dolore eu fugiat nulla pariatur. Excepteur
                        sint occaecat cupidatat non proident, sunt in culpa qui
                        officia deserunt mollit anim id est laborum.
                      </p>
                      <hr />
                      <h6>Minimum Requirements</h6>
                      <ul>
                        <li> Matric</li>
                        <li>Previous customer service / sales experience</li>
                        <li>
                          At least 3 years retail and or cosmetics experience
                        </li>
                        <li>At least 2 years make-up experience</li>
                        <li>Must be a team player</li>
                      </ul>
                      <hr />
                      <h6>Duties &amp; Responsibilities</h6>
                      <ul>
                        <li>Maximize turnover, profit and productivity</li>
                        <li>
                          Achieve counter sales targets and minimum monthly IPT
                          of 2.5
                        </li>
                        <li>Brand Management</li>
                        <li>Increase brand awareness</li>
                        <li>
                          Stock management, merchandising and adherence to
                          procedures
                        </li>
                        <li>Superior customer service</li>
                        <li>
                          Uphold and reinforce the Client experience standards
                        </li>
                        <li>
                          Drive increased customer data base (attraction of NEW
                          customers)
                        </li>
                        <li>Teamwork</li>
                        <li>Complete all progress reports required</li>
                        <li>
                          Work in collaboration with other colleagues to drive
                          and execute overall budgets as well as supporting
                          events
                        </li>
                        <li>
                          Build relationships with respective retailer to
                          achieve key outputs
                        </li>
                      </ul>
                    </div>
                    <div className="panel-footer">
                      <div className="text-right">
                        <button
                          type="button"
                          className="btn btn-danger"
                          id="expired-vac"
                        >
                          Vacant Filled
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*=========================== right column ===========================*/}
            <div className="col-sm-3">
              {/*========== search and filter panel ==========*/}
              <div className="panel panel-default">
                <div className="panel-body">
                  <form>
                    {/*========== search ==========*/}
                    <div className="form-group">
                      <div className="input-group content-group">
                        <div className="has-feedback has-feedback-left">
                          <input
                            type="text"
                            className="form-control input-xlg"
                            defaultValue
                            placeholder="Start searching..."
                          />
                        </div>
                        <div className="input-group-btn">
                          <button
                            type="submit"
                            className="btn btn-secondary btn-xlg"
                          >
                            <i className="fa fa-search" />
                          </button>
                        </div>
                      </div>
                    </div>
                    {/*========== filter ==========*/}
                    <div className="form-group">
                      <select className="form-control filter">
                        <option>- Show all Departments -</option>
                        <option>Finance</option>
                        <option>Sales</option>
                        <option>Marketing</option>
                        <option>Education</option>
                        <option>Administration</option>
                      </select>
                      <i className="fa fa-filter" />
                    </div>
                    <div className="form-group">
                      <select className="form-control filter">
                        <option>- Show all Provinces -</option>
                        <option>Easter Cape</option>
                        <option>Free State</option>
                        <option>Gauteng</option>
                        <option>KwaZulu-Natal</option>
                        <option>Limpopo</option>
                        <option>Mpumalanga</option>
                        <option>Northern Cape</option>
                        <option>North-West</option>
                        <option>Western Cape</option>
                      </select>
                      <i className="fa fa-filter" />
                    </div>
                  </form>
                </div>
              </div>
              {/*========== need help panel ==========*/}
              <div
                className="panel panel-primary bg-primary bg-img4"
                data-toggle="modal"
                data-target="#help_modal"
              >
                <div className="panel-body text-center">
                  <h3 className="text-white m-t-30">Need Help?</h3>
                  <p className="text-white m-b-30">
                    Click here to contact our support center and recieve support
                    documentation.
                  </p>
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

export default Vacancies;
