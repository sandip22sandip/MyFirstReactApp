import React, { useState } from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/authContext";

import company_logo from "../assets/images/Oceana_Logo.jpg";
// import bg1 from "../assets/images/slide/ocean1.png";

export default function Login() {
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });
  const [err, setError] = useState(null);

  const navigate = useNavigate();

  const { login } = useContext(AuthContext);

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(inputs);
      navigate("/");
    } catch (err) {
      setError(err.response.data);
    }
  };
  return (
    <div
      className="login-page"
      // style={{ background: "transparent", backgroundImage: `url(${bg1})` }}
    >
      <div className="wrapper-page">
        <div className="panel panel-default">
          <div className="panel-body">
            <div className="login logo text-center">
              <img src={company_logo} alt="Company Logo" />
            </div>
            <form className="form-horizontal m-t-20" action="index">
              <div className="form-group">
                <div className="col-xs-12">
                  <input
                    className="form-control input-lg"
                    type="text"
                    required
                    placeholder="Username"
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="form-group">
                <div className="col-xs-12">
                  <input
                    className="form-control input-lg"
                    type="password"
                    required
                    placeholder="Password"
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="form-group text-center m-t-40">
                <div className="col-xs-12">
                  <button
                    className="btn btn-secondary btn-block btn-lg w-lg waves-effect waves-light"
                    type="submit"
                    onClick={handleSubmit}
                  >
                    Log In
                  </button>
                </div>
                {err && <p>{err}</p>}
              </div>
              <div className="form-group m-t-30">
                <div className="col-sm-12 text-center">
                  <a href="recoverpw">
                    <i className="fa fa-lock m-r-5" /> Forgot your password?
                  </a>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
