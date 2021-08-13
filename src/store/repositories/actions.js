import {
  FETCH_REPOSITORIES_LOADING,
  FETCH_REPOSITORIES_SUCCESS,
  FETCH_REPOSITORIES_ERROR,
} from "./constants";
import { createActions } from "redux-actions";
import { getRepositories } from "../../api";

export const {
  fetchRepositoriesLoading,
  fetchRepositoriesSuccess,
  fetchRepositoriesError,
} = createActions({
  [FETCH_REPOSITORIES_LOADING]: (loading) => ({ loading }),
  [FETCH_REPOSITORIES_SUCCESS]: (items) => ({ items }),
  [FETCH_REPOSITORIES_ERROR]: (error) => ({ error }),
});

export const fetchRepositories = () => async (dispatch) => {
  try {
    dispatch(fetchRepositoriesLoading());
    let data = await getRepositories();
    dispatch(fetchRepositoriesSuccess(data));
  } catch (error) {
    dispatch(fetchRepositoriesError({ error }));
  }
};
