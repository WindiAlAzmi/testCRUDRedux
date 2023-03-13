const InitialState = {
  loading: true,
  postData: [],
  error: "",
};

const ReducerPost = (state = InitialState, action) => {
  switch (action.type) {
    case "FETCH_DATA_REQUEST":
      return {
        loading: true,
        postData: [],
        error: "",
      };
    case "FETCH_DATA_SUCCESS":
      return {
        loading: false,
        postData: action.payload,
        error: "",
      };
    case "FETCH_DATA_ERROR":
      return {
        loading: false,
        postData: [],
        error: action.payload,
      };
    default:
      return state;
  }
};
export const loadingData = (state) => state.allPost.loading;
export const dataAllPost = (state) => state.allPost.postData;
console.log(dataAllPost);
export const errorData = (state) => state.allPost.error;
export default ReducerPost;
