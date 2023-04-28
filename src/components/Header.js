import React, { useContext } from "react";

import { Link } from 'react-router-dom';

import demo_user from "../assets/images/users/demo-user.jpg";
import company_logo from "../assets/images/company-logo-alt.png";
import { AuthContext } from "../context/authContext";

function Header() {
  const { logout } = useContext(AuthContext);
  return (
    <div className="topbar topbar-min" id="topbar">
      {/* Button mobile view to collapse sidebar menu */}
      <div className="navbar navbar-primary" role="navigation">
        <div className="container">
          <div className="row">
            <div className="col-sm-6">
              <div className="pull-left">
                <button className="button-menu-mobile open-left">
                  <i className="fa fa-bars" />
                </button>
                <span className="clearfix" />
              </div>
              {/* ========== logo ========== */}
              <div className>
                <Link to="main" className="logo">
                  <img src={company_logo} alt="company_logo" />
                </Link>
              </div>
            </div>
            {/* ========== ICON MENU ==========*/}
            <div className="col-sm-6">
              <ul
                id="topicons"
                className="nav navbar-nav navbar-right pull-right"
              >
                {/********** NOTIFICATION ICON **********/}
                <li className="hidden-xs">
                  <a
                    href="/#"
                    data-toggle="modal"
                    data-target="#notification_modal"
                  >
                    <span className="badge badge-xs badge-danger">1</span>
                    <div className="btn btn-circle waves-effect waves-light no-shadow">
                      <i className="fa fa-bell-o" />
                    </div>
                  </a>
                </li>
                {/********** HELP ICON **********/}
                <li className="hidden-xs">
                  <a href="/#" data-toggle="modal" data-target="#help_modal">
                    <div className="btn btn-circle waves-effect waves-light no-shadow">
                      <i className="fa fa-question" />
                    </div>
                  </a>
                </li>
                {/********** PROFILE ICON **********/}
                <li className="dropdown hidden-xs">
                  <a
                    href="/#"
                    className="dropdown-toggle profile"
                    data-toggle="dropdown"
                    aria-expanded="true"
                  >
                    <img
                      src={demo_user}
                      alt="user-img"
                      className="img-circle img-sm img-fit"
                    />{" "}
                  </a>
                  <ul className="dropdown-menu profile">
                    <li className="row" id="profileDropdown">
                      <div className="col-md-3 text-center">
                        <img
                          src={demo_user}
                          alt="user-img"
                          className="img-circle img-sm m-t-10"
                        />
                      </div>
                      <div className="col-md-9">
                        <h6 className="bold">Peter Semenya</h6>
                        <p>psemenya@oceana.co.za</p>
                      </div>
                    </li>
                    <li>
                      <Link to="profile">Profile</Link>
                    </li>
                    <li className="divider" />
                    <li>
                      <Link to="courses"> Courses</Link>
                    </li>
                    <li className="divider" />
                    <li>
                      <Link to="login" onClick={logout}> Sign Out</Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
          {/*/.nav-collapse */}
        </div>
      </div>
    </div>
  );
}

export default Header;
