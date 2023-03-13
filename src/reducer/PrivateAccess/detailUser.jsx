const InitialState = {
  postData:{},
};

const detailUser = (state = InitialState, action) => {
  switch (action.type) {
    case "USER_FETCH_DATA_SUCCESS_DETAIL":
      return {
        loading: false,
        postData: action.payload,
        error: "",
      };
    default:
      return state;
  }
};
export const dataAllPostDetailUserLogin = (state) => state.detailStatePostUserLogin.postData;
console.log(dataAllPostDetailUserLogin);
export default detailUser;
