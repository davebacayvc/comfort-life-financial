import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  eventInviteDeleteReducer,
  eventInviteDetailsReducer,
  eventInvitesListReducer,
  eventListReducer,
} from "redux/reducers/eventReducers";
import { userLoginReducer } from "redux/reducers/userReducers";

const reducer = combineReducers({
  eventList: eventListReducer,
  eventInviteDetails: eventInviteDetailsReducer,

  /* Admin Reducers */
  userLogin: userLoginReducer,
  eventInvitesList: eventInvitesListReducer,
  eventInvitesDelete: eventInviteDeleteReducer,
});

const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo") as string)
  : null;

const initialState = {
  userLogin: { userInfo: userInfoFromStorage },
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
