import React from "react";

import { Link } from "react-router-dom";

function Footer() {
  const d = new Date();
  let year = d.getFullYear();
  return (
    <>
      <div className="bottombar visible-xs">
        <div
          className="navbar bg-secondary navbar-fixed-bottom"
          style={{ zIndex: "1 !important" }}
        >
          <div className="row">
            <div className="col-md-12">
              <ul className="nav nav-tabs text-center">
                <li className="tab" style={{ width: "20%" }}>
                  <Link
                    to="index"
                    className="btn-secondary waves-effect waves-light"
                  >
                    <span>
                      <i className="fa fa-home text-white" />
                    </span>
                  </Link>
                </li>
                <li className="tab" style={{ width: "20%" }}>
                  <Link to="learning-journey" className="btn-secondary">
                    <span>
                      <i className="md md-directions-walk text-white" />
                    </span>
                  </Link>
                </li>
                <li className="tab" style={{ width: "20%" }}>
                  <Link
                    to="findacourse"
                    className="btn-secondary waves-effect waves-light"
                  >
                    <span>
                      <i className="md md-explore text-white" />
                    </span>
                  </Link>
                </li>
                <li className="tab" style={{ width: "20%" }}>
                  <a
                    href="/#"
                    data-toggle="modal"
                    data-target="#notification_modal"
                    className="btn-secondary waves-effect waves-light"
                  >
                    <span>
                      <i className="md md-notifications text-white" />
                    </span>
                  </a>
                </li>
                <li className="tab" style={{ width: "20%" }}>
                  <a
                    href="/#"
                    className="profile btn-secondary waves-effect waves-light"
                    data-toggle="modal"
                    data-target="#profile_modal"
                  >
                    <span>
                      <i className="md md-account-circle text-white" />
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <footer className="footer text-right">
        {year} © SynrgiseLearn LMS. Powered by
        <Link
          to="http://www.synrgise.com"
          target="_new"
          className="text-danger"
        >
          Synrgise
        </Link>
      </footer>
    </>
  );
}

export default Footer;
