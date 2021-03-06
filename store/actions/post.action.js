import * as types from "../types";
import * as apis from "../../apis";
export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await apis.getPosts();
    dispatch({ type: types.GET_POST, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const getSinglePost = (id) => async (dispatch) => {
  try {
    if (id) {
      const { data } = await apis.getSinglePost(id);
      dispatch({ type: types.GET_SINGLE_POST, payload: { post: data } });
    } else {
      dispatch({ type: types.GET_SINGLE_POST, payload: {} });
    }
  } catch (error) {
    console.log(error);
  }
};
export const setLoading = (type) => (dispatch) => {
  dispatch({ type: types.SET_LOADING, payload: type });
};
