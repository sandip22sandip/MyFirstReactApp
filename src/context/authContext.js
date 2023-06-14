import axios from "axios";
import { createContext } from "react";
import CryptoJS from "crypto-js";

export const AuthContext = createContext();

export const AuthContexProvider = ({ children }) => {
  const login = async (inputs) => {
    var username = inputs.username;
    var password = inputs.password;
    var md5Hash = CryptoJS.MD5(password);

    const res = await axios.get("rest.php", {
      params: {
        q: "/restAPI/auth/authenticate",
        username: username,
        password: md5Hash.toString(),
      },
    });

    if (res.data.token !== undefined)
      sessionStorage.setItem("AuthToken", res.data.token);

    return res.data;
  };

  const loginWithGoogle = async (inputs) => {
    var email = inputs.email;
    var emailVerified = inputs.emailVerified;
    var accessToken = inputs.accessToken;

    const res = await axios.get("rest.php", {
      params: {
        q: "/restAPI/auth/googleAuth",
        email: email,
        emailVerified: emailVerified,
        accessToken: accessToken,
      },
    });

    if (res.data.token !== undefined)
      sessionStorage.setItem("AuthToken", res.data.token);

    return res.data;
  };

  const logoutAuth = async () => {
    const res = await axios.get("rest.php", {
      params: {
        q: "/restAPI/auth/authLogout",
        auth: sessionStorage.getItem("AuthToken"),
      },
    });

    sessionStorage.removeItem("AuthToken");
    delete axios.defaults.headers.common["Authorization"];
    return res.data;
  };

  return (
    <AuthContext.Provider value={{ login, logoutAuth, loginWithGoogle }}>
      {children}
    </AuthContext.Provider>
  );
};
