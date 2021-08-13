import {
  FETCH_REPOSITORIES_LOADING,
  FETCH_REPOSITORIES_SUCCESS,
  FETCH_REPOSITORIES_ERROR,
} from "./constants";
import { handleActions } from "redux-actions";

const initialState = {
  items: [],
  loading: false,
  error: null,
};

const repositoriesReducer = handleActions(
  {
    [FETCH_REPOSITORIES_LOADING]: (state, action) => {
      return { ...state, loading: true }; //возвращает предыдущее состояние  и меняет лоадин на тру
    },
    [FETCH_REPOSITORIES_SUCCESS]: (state, action) => {
      return { ...state, items: action.payload.items, loading: false };
    },
    [FETCH_REPOSITORIES_ERROR]: (state, action) => {
      return { ...state, loading: false, error: action.payload.error };
    },
  },
  initialState
);

export default repositoriesReducer;
