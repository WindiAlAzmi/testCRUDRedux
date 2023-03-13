const initialState = {
  pagePagination: 1,
  favoriteData: [],
  messageFavorite : "",

};

export const generalAllReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_PAGE":
      const numberPage = action.payload;
      return { ...state, pagePagination: numberPage};
    case "LIKE_POST":
        let  ds  = action.payload;
        console.log(ds, 'ini ds');
        
        const cekId = state.favoriteData.find(
            (fsItem) => fsItem.id === ds.id
        );
        console.log(cekId);

        if (cekId) {
        
            return {
                       ...state,
                       messageFavorite: 'data sudah ada'
                     };

        } else {

            return { ...state, favoriteData: [...state.favoriteData, ds]};

        }
    case "REMOVE_POST":
          let  dr  = action.payload;
        console.log(dr, 'ini dr');
        
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
                       favoriteData: newItemFavorite
                     };

        } 
    break;
    default:
      return state;
  }
};

export const dataPagination = (state) => state.generalStateData.pagePagination;
export const dataFavoriteState = (state) => state.generalStateData.favoriteData;
export const messageFavoriteState = (state) => state.generalStateData.messageFavorite;
export default generalAllReducer;