import { Box } from "@mui/material";
import React, {useEffect} from "react";
import { Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { dataPostAdmin, loadingDataPostAdmin, errorDataPostAdmin } from "../reducer/PrivateAccess/ReducerPost";
import { dataFavoriteState, messageFavoriteState } from "../reducer/GeneralAccess/generalReducer";
import axios from "axios";
import { dataAllPostDetailUserLogin } from "../reducer/PrivateAccess/detailUser";
import { Link } from "react-router-dom";


const Admin = () => {
    const dataLoginUser = useSelector(dataAllPostDetailUserLogin);

    const dataPost = useSelector(dataPostAdmin);
     const loadingPost = useSelector(loadingDataPostAdmin);
     const errorPost = useSelector(errorDataPostAdmin);


     const dataFavorite = useSelector(dataFavoriteState);
     const messageFavorite = useSelector(messageFavoriteState);
     

    console.log(dataLoginUser, "ini dari  post admin general");



       console.log(dataFavorite, "ini dari post favorite");
     console.log(messageFavorite, "ini dar message favorite");


     const dispatch = useDispatch();

     const FETCH_DATA_REQUESTED_USERLOGIN = "FETCH_DATA_REQUESTED_ADMIN";
     const FETCH_DATA_SUCCESS_USERLOGIN = "FETCH_DATA_SUCCESS_ADMIN";
     const FETCH_DATA_ERROR_USERLOGIN = "FETCH_DATA_ERROR_ADMIN";

     const fetchDataRequestUserLogin = () => {
       return {
         type: FETCH_DATA_REQUESTED_USERLOGIN,
       };
     };

     const fetchDataSuccessUserLogin = (posts) => {
       return {
         type: FETCH_DATA_SUCCESS_USERLOGIN,
         payload: posts,
       };
     };

     const fetchDataErrorUserLogin = (error) => {
       return {
         type: FETCH_DATA_ERROR_USERLOGIN,
         payload: error,
       };
     };

    
         const fetchAllData = () => {
        dispatch(fetchDataRequestUserLogin());
         axios
           .get(`https://jsonplaceholder.typicode.com/users/${dataLoginUser.id}/posts`)
           .then((res) => {
             const dataPost = res.data;
             console.log(dataPost, "ini data user dari axios");
             dispatch(fetchDataSuccessUserLogin(dataPost));
           })
           .catch((err) => {
             dispatch(fetchDataErrorUserLogin(err.message));
           });
     };



     useEffect(() => {
      fetchAllData();
     // eslint-disable-next-line react-hooks/exhaustive-deps
     }, [dataLoginUser]);

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
      <Box sx={{ backgroundColor: "green", padding: 10 }}>
        ini halaman admin
        <div>
          <ul>
            {loadingPost ? (
              <li>loading</li>
            ) : (
              dataPost.map((ds) => {
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
            {errorPost ? <li>{errorPost}</li> : null}
          </ul>
        </div>
        <Outlet />
      </Box>
    );
}

export default Admin;