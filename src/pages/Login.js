import React, { useState } from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/authContext";

import company_logo from "../assets/images/Oceana_Logo.jpg";
import googleIcon from "../assets/images/icons/google.png";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { loginFailure, loginStart, loginSuccess } from "../redux/userSlice";
import { useDispatch } from "react-redux";
import { auth, provider } from "../firebase";
import { signInWithPopup } from "firebase/auth";

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

  const { login, loginWithGoogle } = useContext(AuthContext);

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

  const signInWithGoogle = async () => {
    dispatch(loginStart());
    signInWithPopup(auth, provider)
      .then(async (result) => {
        const authData = {
          name: result.user.displayName,
          email: result.user.email,
          img: result.user.photoURL,
          emailVerified: result.user.emailVerified,
          accessToken: result.user.accessToken,
        };
        const loginRes = await loginWithGoogle(authData);
        if (loginRes.error !== undefined) return setError(loginRes.error);

        if (loginRes.userInfo !== undefined) {
          dispatch(loginSuccess(loginRes.userInfo));
          navigate("/main");
        } else {
          dispatch(loginFailure());
        }
      })
      .catch((error) => {
        dispatch(loginFailure());
        console.log(error);
      });
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
              {err && <span style={{ color: "red" }}>{err}</span>}
              <div style={{ marginTop: "20px" }}>
                <div className="row d-flex align-items-center">
                  <div className="col-xs-6" style={{ marginTop: "14px" }}>
                    <a
                      data-toggle="modal"
                      data-target="#resetpw_modal"
                      href="/#"
                    >
                      <i className="fa fa-lock m-r-5" /> Forgot your password?
                    </a>
                  </div>
                  <div className="col-xs-6 text-right">
                    <button
                      className="btn btn-secondary btn-lg w-lg waves-effect waves-light"
                      type="submit"
                      onClick={handleSubmit(onSubmit)}
                    >
                      Log in
                    </button>
                  </div>
                </div>
              </div>
            </form>
            <div className="m-t-15">
              <span className="line-thru text-center text-uppercase m-t-15 m-b-15">
                <span>or</span>
              </span>
              <button
                className="btn btn-default btn-block waves-effect waves-light"
                onClick={signInWithGoogle}
              >
                Log in with{" "}
                <img
                  src={googleIcon}
                  style={{ height: "30px", width: "60px" }}
                  alt=""
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
