import React, { useContext } from "react";

import { Link, useNavigate } from "react-router-dom";

import demo_user from "../assets/images/users/no-avatar.jpg";
import company_logo from "../assets/images/company-logo-alt.png";
import { useSelector } from "react-redux";
import { logout } from "../redux/userSlice";
import { useDispatch } from "react-redux";
import { AuthContext } from "../context/authContext";

function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const currentUser = useSelector((state) => state.user.currentUser);

  const { logoutAuth } = useContext(AuthContext);

  const handleLogout = async () => {
    try {
      await logoutAuth();
      dispatch(logout());
      navigate("/login");
    } catch (err) {
      console.log(err);
    }
  };

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
              <div>
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
                {/********** CHAT ICON **********/}
                <li className="hidden-xs">
                  <Link to="/chatwindow">
                    <div className="btn btn-circle waves-effect waves-light no-shadow">
                      <i className="fa fa-comment" />
                    </div>
                  </Link>
                </li>
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
                      src={currentUser?.avatar || demo_user}
                      alt={demo_user}
                      className="img-circle img-sm img-fit"
                    />{" "}
                  </a>
                  <ul className="dropdown-menu profile">
                    <li className="row" id="profileDropdown">
                      <div className="col-md-3 text-center">
                        <img
                          src={currentUser?.avatar || demo_user}
                          alt={demo_user}
                          className="img-circle img-sm m-t-10"
                        />
                      </div>
                      <div className="col-md-9">
                        <h6 className="bold">
                          {currentUser?.firstname} {currentUser?.lastname}
                        </h6>
                        <p>{currentUser?.email}</p>
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
                      <Link to="login" onClick={handleLogout}>
                        Sign Out
                      </Link>
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
