const initialState = {
  pagePagination: 1,
  favoriteData: [],
  messageFavorite : "",
  isModalLogin : false,
  setLocationModal : "",
  setLogoutModal:false
};

export const generalAllReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_PAGE":
      const numberPage = action.payload;
      return { ...state, pagePagination: numberPage };
    case "LIKE_POST":
      let ds = action.payload;
      console.log(ds, "ini ds");

      const cekId = state.favoriteData.find((fsItem) => fsItem.id === ds.id);
      console.log(cekId);

      if (cekId) {
        return {
          ...state,
          messageFavorite: "data sudah ada",
        };
      } else {
        return { ...state, favoriteData: [...state.favoriteData, ds] };
      }
    case "REMOVE_POST":
      let dr = action.payload;
      console.log(dr, "ini dr");

      const cekIdFavorite = state.favoriteData.find(
        (fsItem) => fsItem.id === dr.id
      );
      console.log(cekIdFavorite);

      if (cekIdFavorite) {
        const newItemFavorite = state.favoriteData.filter(
          (fsData) => fsData.id !== dr.id
        );
        return {
          ...state,
          favoriteData: newItemFavorite,
        };
      }
      break;
    case "SET_MODAL":
      return { ...state, isModalLogin: action.payload };

    case "SET_LOCATION_MODAL":
      return {
        ...state,
        setLocationModal: action.payload.cr,
        isModalLogin: action.payload.bl,
      };
    case "SET_LOGOUT_MODAL":
      return {
        ...state,
        setLogoutModal: action.payload
       
      };
    default:
      return state;
  }
};

export const dataPagination = (state) => state.generalStateData.pagePagination;
export const dataFavoriteState = (state) => state.generalStateData.favoriteData;
export const messageFavoriteState = (state) => state.generalStateData.messageFavorite;
export const dataModalLogin = (state) => state.generalStateData.isModalLogin;
export const dataModalLocation = (state) => state.generalStateData.setLocationModal;
export const dataLogoutModal = (state) =>
  state.generalStateData.setLogoutModal;
export default generalAllReducer;