import axios from "axios";
import {
  EVENT_ACTION_TYPES,
  EVENT_INVITE_ACTION_TYPES,
} from "constants/redux-constants";
import ENDPOINTS from "constants/endpoints";

export const listEvents = () => async (dispatch: any) => {
  try {
    dispatch({
      type: EVENT_ACTION_TYPES.EVENT_LIST_REQUEST,
    });
    const { data } = await axios.get(ENDPOINTS.EVENTS);
    dispatch({
      type: EVENT_ACTION_TYPES.EVENT_LIST_SUCCESS,
      payload: data,
    });
  } catch (error: any) {
    dispatch({
      type: EVENT_ACTION_TYPES.EVENT_LIST_FAIL,
      payload:
        error?.response! && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const listEventInviteDetails = (id: string) => async (dispatch: any) => {
  try {
    dispatch({
      type: EVENT_INVITE_ACTION_TYPES.EVENT_INVITE_LIST_REQUEST,
    });
    const { data } = await axios.get(ENDPOINTS.EVENT_INVITE.replace(":id", id));
    dispatch({
      type: EVENT_INVITE_ACTION_TYPES.EVENT_INVITE_LIST_SUCCESS,
      payload: data,
    });
  } catch (error: any) {
    dispatch({
      type: EVENT_INVITE_ACTION_TYPES.EVENT_INVITE_LIST_FAIL,
      payload:
        error?.response! && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
