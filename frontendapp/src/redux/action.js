import axios from "axios";
import {
  GET_Login_Error,
  GET_Login_Success,
  GET_Login_request,
  GET_Singup_Error,
  GET_Singup_Success,
  GET_Singup_request,
} from "./actionTypes";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const get_singup_request = () => {
  return {
    type: GET_Singup_request,
  };
};

const get_singup_success = (payload) => {
  return {
    type: GET_Singup_Success,
    payload,
  };
};

const get_singup_Error = () => {
  return {
    type: GET_Singup_Error,
  };
};

const get_login_request = () => {
  return {
    type: GET_Login_request,
  };
};
const get_login_success = (payload) => {
  return {
    type: GET_Login_Success,
    payload,
  };
};

const get_login_Error = () => {
  return {
    type: GET_Login_Error,
  };
};

export const signupfunc = ({
 
  email: email,
  password: password,

}) => (dispatch) => {
  dispatch(get_singup_request());
  axios
    .post("http://localhost:3000/user", {
        email: email,
      password: password,
    })
    .then((res) => {
      console.log(res);
      dispatch(get_singup_success(res.data));
      toast.success("Signup Success!");
    })
    .catch((err) => {
        if (err.response && err.response.data && err.response.data.error) {
          dispatch(get_singup_Error(err.response.data.error));
          toast.error(err.response.data.error);
        } else {
          dispatch(get_singup_Error("Something went wrong"));
          toast.error("Something went wrong");
        }
      });
};
export const loginfunc = (data) => (dispatch) => {
    dispatch(get_login_request());
    dispatch(get_login_success(data));
    dispatch(get_login_Error  ());

  };
  
  
  