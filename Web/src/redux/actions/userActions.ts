import axios from "axios";
import ENDPOINTS from "constants/endpoints";
import { USER_LOGIN_ACTION_TYPES } from "constants/redux-constants";

export const login =
  (email: string, password: string) => async (dispatch: any) => {
    try {
      dispatch({
        type: USER_LOGIN_ACTION_TYPES.USER_LOGIN_REQUEST,
      });

      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const { data } = await axios.post(
        ENDPOINTS.USER_LOGIN,
        {
          email,
          password,
        },
        config
      );

      dispatch({
        type: USER_LOGIN_ACTION_TYPES.USER_LOGIN_SUCCESS,
        payload: data,
      });

      localStorage.setItem("userInfo", JSON.stringify(data));
    } catch (error: any) {
      dispatch({
        type: USER_LOGIN_ACTION_TYPES.USER_LOGIN_FAIL,
        payload:
          error?.response! && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const logout = () => (dispatch: any) => {
  localStorage.removeItem("userInfo");
  dispatch({
    type: USER_LOGIN_ACTION_TYPES.USER_LOGOUT,
  });
};
