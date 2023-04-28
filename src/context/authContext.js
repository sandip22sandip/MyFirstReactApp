import axios from "axios";
import { createContext, useEffect, useState } from "react";
import CryptoJS from "crypto-js";

export const AuthContext = createContext();

export const AuthContexProvider = ({ children }) => {
  
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );

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
    if (res.data.userInfo !== undefined) setCurrentUser(res.data.userInfo);
    
    if (res.data.token !== undefined)
      sessionStorage.setItem("AuthToken", res.data.token);

    // console.log(currentUser)

    return res.data;
  };

  const logout = async () => {
    sessionStorage.removeItem("AuthToken");
    setCurrentUser(null);
    delete axios.defaults.headers.common["Authorization"];
  };

  useEffect(() => {
    // console.log(currentUser)
    localStorage.setItem("user", JSON.stringify(currentUser));
  }, [currentUser]);

  return (
    <AuthContext.Provider value={{ currentUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
