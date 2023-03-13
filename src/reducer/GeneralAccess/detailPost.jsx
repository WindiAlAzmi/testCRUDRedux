const InitialState = {
  loading: true,
  postData:[],
  error: "",
};

const detailPost = (state = InitialState, action) => {
  switch (action.type) {
    case "FETCH_DATA_REQUEST_DETAIL":
      return {
        loading: true,
        postData: [],
        error: "",
      };
    case "FETCH_DATA_SUCCESS_DETAIL":
      return {
        loading: false,
        postData: [...action.payload],
        error: "",
      };
    case "FETCH_DATA_ERROR_DETAIL":
      return {
        loading: false,
        postData:[],
        error: action.payload,
      };
    default:
      return state;
  }
};
export const loadingDataDetail = (state) => state.detailStatePost.loading;
export const dataAllPostDetail = (state) => state.detailStatePost.postData;
console.log(dataAllPostDetail);
export const errorDataDetail = (state) => state.detailStatePost.error;
export default detailPost;
