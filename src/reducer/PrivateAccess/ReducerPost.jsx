const InitialState = {
  loading: true,
  postDataAdmin: [],
  error: "",
};

const reducerPostAdmin = (state = InitialState, action) => {
  switch (action.type) {
    case "FETCH_DATA_REQUEST_ADMIN":
      return {
        loading: true,
        postDataAdmin: [],
        error: "",
      };
    case "FETCH_DATA_SUCCESS_ADMIN":
      return {
        loading: false,
        postDataAdmin: action.payload,
        error: "",
      };
    case "FETCH_DATA_ERROR_ADMIN":
      return {
        loading: false,
        postDataAdmin: [],
        error: action.payload,
      };
    default:
      return state;
  }
};
export const loadingDataPostAdmin = (state) => state.postAdmin.loading;
export const dataPostAdmin = (state) => state.postAdmin.postDataAdmin;
console.log(dataPostAdmin);
export const errorDataPostAdmin = (state) => state.error;
export default reducerPostAdmin;
