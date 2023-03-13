import { Box } from "@mui/material";
import React, {useEffect} from "react";
import { Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { loadingData, dataAllPost, errorData } from "../reducer/GeneralAccess/ReducerPost";
import { dataFavoriteState, messageFavoriteState } from "../reducer/GeneralAccess/generalReducer";
import { loadingDataAllUser, dataAllPostAllUser, errorDataAllUser } from "../reducer/GeneralAccess/UserReducer";
import { Link } from "react-router-dom";

const Main = () => {

     const dataPostGeneral = useSelector(dataAllPost);
     const loadingPostGeneral = useSelector(loadingData);
     const errorPostGeneral = useSelector(errorData);

     const dataUserList = useSelector(dataAllPostAllUser);
     const loadingUserList = useSelector(loadingDataAllUser);
     const errorUserList = useSelector(errorDataAllUser);


     const dataFavorite = useSelector(dataFavoriteState);
     const messageFavorite = useSelector(messageFavoriteState);
     
     console.log(dataPostGeneral, 'ini dari post general');
    console.log(dataUserList, "ini dari user post general");



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


    const FETCH_DATA_REQUESTED_AllUser = "FETCH_DATA_REQUESTED_AllUser";
     const FETCH_DATA_SUCCESS_AllUser = "FETCH_DATA_SUCCESS_AllUser";
     const FETCH_DATA_ERROR_AllUser = "FETCH_DATA_ERROR_AllUser";

     const fetchDataRequestAllUser = () => {
       return {
         type: FETCH_DATA_REQUESTED_AllUser,
       };
     };

     const fetchDataSuccessAllUser = (posts) => {
       return {
         type: FETCH_DATA_SUCCESS_AllUser,
         payload: posts,
       };
     };

     const fetchDataErrorAllUser = (error) => {
       return {
         type: FETCH_DATA_ERROR_AllUser,
         payload: error,
       };
     };

     const fetchAllUser = () => {
        dispatch(fetchDataRequestAllUser());
         axios
           .get(`https://jsonplaceholder.typicode.com/users`)
           .then((res) => {
             const dataPost = res.data;
             console.log(dataPost, "ini data user dari axios");
             dispatch(fetchDataSuccessAllUser(dataPost));
           })
           .catch((err) => {
             dispatch(fetchDataErrorAllUser(err.message));
           });
     };



     useEffect(() => {
      fetchUser();
      fetchAllUser();
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
        <div>
          <p>dibawah semua user</p>
           {dataUserList.map((ds) => {
                return (
               
                  <li key={ds.id}>
                    {ds.id} - {ds.name}
                    <button onClick={() => favoriteHandler(ds)}>like</button>
                  </li>
              
                );
              })}
        </div>
      </Box>
    );
}

export default Main;