const InitialState = {
  loading: true,
  postData: [],
  error: "",
};

const userReducer = (state = InitialState, action) => {
  switch (action.type) {
    case "FETCH_DATA_REQUEST_AllUser":
      return {
        loading: true,
        postData: [],
        error: "",
      };
    case "FETCH_DATA_SUCCESS_AllUser":
      return {
        loading: false,
        postData: action.payload,
        error: "",
      };
    case "FETCH_DATA_ERROR_AllUser":
      return {
        loading: false,
        postData: [],
        error: action.payload,
      };
    default:
      return state;
  }
};
export const loadingDataAllUser = (state) => state.allPostUser.loading;
export const dataAllPostAllUser = (state) => state.allPostUser.postData;
console.log(dataAllPostAllUser);
export const errorDataAllUser = (state) => state.allPostUser.error;
export default userReducer;
