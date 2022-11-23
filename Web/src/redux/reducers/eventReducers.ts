import {
  EVENT_ACTION_TYPES,
  EVENT_INVITE_ACTION_TYPES,
} from "constants/redux-constants";

export const eventListReducer = (state: any = { events: [] }, action: any) => {
  switch (action.type) {
    case EVENT_ACTION_TYPES.EVENT_LIST_REQUEST:
      return { loading: true, events: [] };
    case EVENT_ACTION_TYPES.EVENT_LIST_SUCCESS:
      return {
        loading: false,
        events: action.payload,
      };
    case EVENT_ACTION_TYPES.EVENT_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const eventInviteDetailsReducer = (
  state: any = { event: {} },
  action: any
) => {
  switch (action.type) {
    case EVENT_INVITE_ACTION_TYPES.EVENT_INVITE_LIST_REQUEST:
      return { loading: true, ...state };
    case EVENT_INVITE_ACTION_TYPES.EVENT_INVITE_LIST_SUCCESS:
      return {
        loading: false,
        event: action.payload,
      };
    case EVENT_INVITE_ACTION_TYPES.EVENT_INVITE_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
