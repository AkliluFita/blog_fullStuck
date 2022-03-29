import http from "./httpCommon";
import jwt_decode from "jwt-decode";
// register new user
export const registerCall = async (userCredential) => {
  try {
    await http.post("user/register/", userCredential);
  } catch (err) {
    console.log(err);
  }
};

// login user
export const loginCall = async (userCredential) => {
  // we need despatch b/c user comes from context

  try {
    const res = await http.post("token/obtain/", userCredential);
    try {
      localStorage.setItem("access_token", res.data.access);
      localStorage.setItem("refresh_token", res.data.refresh);
      http.defaults.headers["Authorization"] =
        "JWT " + localStorage.getItem("access_token");

      console.log(res.data);
      console.log(jwt_decode(res.data.access));
    } catch (error) {
      console.log(error);
    }
  } catch (err) {
    console.log(err);
  }
};

// logout user
export const logoutCall = async () => {
  try {
    const res = await http.post("user/logout/blacklist/", {
      refresh_token: localStorage.getItem("refresh_token"),
    });
    try {
      localStorage.removeItem("access_token");
      localStorage.removeItem("refresh_token");
      http.defaults.headers["Authorization"] = null;
      console.log(res.data);
      console.log(jwt_decode(res.data.access));
    } catch (error) {
      console.log(error);
    }
  } catch (err) {
    console.log(err);
  }
};
