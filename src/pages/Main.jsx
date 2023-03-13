import { Box } from "@mui/material";
import React, {useEffect} from "react";
import { Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { loadingData, dataAllPost, errorData } from "../reducer/GeneralAccess/ReducerPost";
import { dataFavoriteState, messageFavoriteState } from "../reducer/GeneralAccess/generalReducer";
import { Link } from "react-router-dom";

const Main = () => {

     const dataPostGeneral = useSelector(dataAllPost);
     const loadingPostGeneral = useSelector(loadingData);
     const errorPostGeneral = useSelector(errorData);
     const dataFavorite = useSelector(dataFavoriteState);
     const messageFavorite = useSelector(messageFavoriteState);
     
     console.log(dataPostGeneral, 'ini dari post general');
       console.log(dataFavorite, "ini dari post favorite");
     console.log(messageFavorite, "ini dar message favorite");


     const dispatch = useDispatch();

     const FETCH_DATA_REQUESTED = "FETCH_DATA_REQUESTED";
     const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS";
     const FETCH_DATA_ERROR = "FETCH_DATA_ERROR";

     const fetchDataRequest = () => {
       return {
         type: FETCH_DATA_REQUESTED,
       };
     };

     const fetchDataSuccess = (posts) => {
       return {
         type: FETCH_DATA_SUCCESS,
         payload: posts,
       };
     };

     const fetchDataError = (error) => {
       return {
         type: FETCH_DATA_ERROR,
         payload: error,
       };
     };

     const fetchUser = () => {
         dispatch(fetchDataRequest());
         axios
           .get(`https://jsonplaceholder.typicode.com/posts?_page=1&_limit=5`)
           .then((res) => {
             const dataPost = res.data;
             console.log(dataPost, "ini data post dari axios");
             dispatch(fetchDataSuccess(dataPost));
           })
           .catch((err) => {
             dispatch(fetchDataError(err.message));
           });
     };


     useEffect(() => {
      fetchUser();
     // eslint-disable-next-line react-hooks/exhaustive-deps
     }, []);

      const favoriteHandler = (ds) => {
        dispatch({
        type: "LIKE_POST",
        payload: ds,
      });
      };

    const removeFavoriteHandler = (dr) => {
            dispatch({
              type: "REMOVE_POST",
              payload: dr,
            });
     };

    return (
      <Box sx={{ backgroundColor: "brown", padding: 2 }}>
        ini halaman utama
        <div>
          <h1>reducer with axios</h1>
          <ul>
            {loadingPostGeneral ? (
              <li>loading</li>
            ) : (
              dataPostGeneral.map((ds) => {
                return (
                   <Link to={`/posts/${ds.id}`}>
                  <li key={ds.id}>
                    {ds.id} - {ds.title}
                    <button onClick={() => favoriteHandler(ds)}>like</button>
                  </li>
                  </Link>
                );
              })
            )}
            {errorPostGeneral ? <li>{errorPostGeneral}</li> : null}
          </ul>
        </div>
        <Outlet />
        <p>dibawah itu favorite</p>
        <Box sx={{ backgroundColor:"pink" }}>
           {dataFavorite.map((dr) => {
                return (
                  <li key={dr.id}>
                    {dr.id} - {dr.title}
                    <button onClick={() => removeFavoriteHandler(dr)}>remove like</button>
                  </li>
                );
              })
           }
        </Box>
      </Box>
    );
}

export default Main;