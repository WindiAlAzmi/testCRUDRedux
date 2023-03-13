const InitialState = {
  loading: true,
  postData:{},
  error: "",
};

const detailPostUser = (state = InitialState, action) => {
  switch (action.type) {
    case "USER_FETCH_DATA_REQUEST_DETAIL":
      return {
        loading: true,
        postData: {},
        error: "",
      };
    case "USER_FETCH_DATA_SUCCESS_DETAIL":
      return {
        loading: false,
        postData: action.payload,
        error: "",
      };
    case "USER_FETCH_DATA_ERROR_DETAIL":
      return {
        loading: false,
        postData:{},
        error: action.payload,
      };
    default:
      return state;
  }
};
export const loadingDataDetailUser = (state) => state.detailStatePostUser.loading;
export const dataAllPostDetailUser = (state) => state.detailStatePostUser.postData;
console.log(dataAllPostDetailUser);
export const errorDataDetailUser = (state) => state.detailStatePostUser.error;
export default detailPostUser;
