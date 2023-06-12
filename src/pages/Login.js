import React, { useState } from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/authContext";

import company_logo from "../assets/images/Oceana_Logo.jpg";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { loginFailure, loginStart, loginSuccess } from "../redux/userSlice";
import { useDispatch } from "react-redux";

export default function Login() {
  const [err, setError] = useState(null);

  const schema = yup
    .object()
    .shape({
      username: yup
        .string()
        .min(6, "Must be more than 6 characters")
        .max(255)
        .required("Username is required"),
      password: yup
        .string()
        .min(6, "Must be more than 6 characters")
        .max(255)
        .required("Password is required"),
    })
    .required();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { login } = useContext(AuthContext);

  const onSubmit = async (inputs) => {
    dispatch(loginStart());
    try {
      const loginRes = await login(inputs);
      if (loginRes.error !== undefined) return setError(loginRes.error);

      if (loginRes.userInfo !== undefined) {
        dispatch(loginSuccess(loginRes.userInfo));
        navigate("/main");
      } else {
        dispatch(loginFailure());
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="login-page">
      <div className="wrapper-page">
        <div className="panel panel-default">
          <div className="panel-body">
            <div className="login logo text-center">
              <img src={company_logo} alt="Company Logo" />
            </div>
            <form className="form-horizontal m-t-20">
              <div className="form-group">
                <div className="col-xs-12">
                  <input
                    className="form-control input-lg"
                    type="text"
                    name="username"
                    required
                    placeholder="Username"
                    {...register("username")}
                  />
                  {errors.username?.message && (
                    <span style={{ color: "red" }}>
                      {errors.username.message}{" "}
                    </span>
                  )}
                </div>
              </div>
              <div className="form-group">
                <div className="col-xs-12">
                  <input
                    className="form-control input-lg"
                    type="password"
                    name="password"
                    required
                    placeholder="Password"
                    {...register("password")}
                  />
                  {errors.password?.message && (
                    <span style={{ color: "red" }}>
                      {errors.password.message}{" "}
                    </span>
                  )}
                </div>
              </div>
              <div className="form-group text-center m-t-40">
                <div className="col-xs-12">
                  <button
                    className="btn btn-secondary btn-block btn-lg w-lg waves-effect waves-light"
                    type="submit"
                    onClick={handleSubmit(onSubmit)}
                  >
                    Log In
                  </button>
                </div>
              </div>
              {err && <span style={{ color: "red" }}>{err}</span>}
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
