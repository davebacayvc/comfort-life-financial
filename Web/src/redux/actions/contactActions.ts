import axios from "axios";
import ENDPOINTS from "constants/endpoints";
import { CONTACT_ACTION_TYPES } from "constants/redux-constants";

export const listContacts = () => async (dispatch: any) => {
  try {
    dispatch({
      type: CONTACT_ACTION_TYPES.CONTACT_ACTION_TYPES_REQUEST,
    });
    const { data } = await axios.get(ENDPOINTS.CONTACTS);
    dispatch({
      type: CONTACT_ACTION_TYPES.CONTACT_ACTION_TYPES_SUCCESS,
      payload: data,
    });
  } catch (error: any) {
    dispatch({
      type: CONTACT_ACTION_TYPES.CONTACT_ACTION_TYPES_FAIL,
      payload:
        error?.response! && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
