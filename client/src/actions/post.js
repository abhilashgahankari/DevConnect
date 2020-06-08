import axios from "axios";
import { POST_ERROR, GET_POSTS } from "./types";
import { setAlert } from "./alert";

//Get posts
export const getPosts = () => async (dispatch) => {
  try {
    const res = axios.get("/api/posts");

    dispatch({
      type: GET_POSTS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};
