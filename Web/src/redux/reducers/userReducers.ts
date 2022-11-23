import { USER_LOGIN_ACTION_TYPES } from "constants/redux-constants";

export const userLoginReducer = (state: any = {}, action: any) => {
  switch (action.type) {
    case USER_LOGIN_ACTION_TYPES.USER_LOGIN_REQUEST:
      return { loading: true };
    case USER_LOGIN_ACTION_TYPES.USER_LOGIN_SUCCESS:
      return {
        loading: false,
        userInfo: action.payload,
      };
    case USER_LOGIN_ACTION_TYPES.USER_LOGIN_FAIL:
      return { loading: false, error: action.payload };
    case USER_LOGIN_ACTION_TYPES.USER_LOGOUT:
      return {};
    default:
      return state;
  }
};
