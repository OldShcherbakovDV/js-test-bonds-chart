import { handleActions } from "redux-actions";
import { createActionThunk } from "redux-thunk-actions";

import API from "../../../mocks/api";

//- Actions
// ------------------
export const bondsFetchInfoAction = createActionThunk(
  "BONDS_FETCH_INFO",
  API.getInfo
);
export const bondsFetchDataAction = createActionThunk(
  "BONDS_FETCH_DATA",
  API.getData
);

//- Selectors
// ------------------
export const getBonds = ({ bonds }) => bonds;
export const getBondsInfo = store => getBonds(store).info;
export const getBondsData = store => getBonds(store).data;

//- Initisal state
// ------------------
const initialState = {
  data: null,
  info: null
};

//- Reducer
// ------------------
export default handleActions(
  {
    BONDS_FETCH_INFO_SUCCEEDED: (state, { payload: data }) => ({
      ...state,
      info: data
    }),
    BONDS_FETCH_DATA_SUCCEEDED: (state, { payload: data }) => ({
      ...state,
      data: data
    })
  },
  initialState
);
