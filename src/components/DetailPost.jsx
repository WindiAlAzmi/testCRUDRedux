import { Box } from "@mui/material";
import React, {useEffect} from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { dataFavoriteState, messageFavoriteState } from "../reducer/GeneralAccess/generalReducer";
import {  dataAllPostDetail } from "../reducer/GeneralAccess/detailPost";
import axios from "axios";


const DetailPost = () => {
  const { postId } = useParams();

       const dataPostGeneral = useSelector(dataAllPostDetail);


        const dataPostUser = useSelector(state => state.detailStatePostUser.postData);
  


       const dataFavorite = useSelector(dataFavoriteState);
       const messageFavorite = useSelector(messageFavoriteState);

       console.log(dataPostGeneral, "ini dari post general");
       console.log(dataPostUser, "ini dari post user azxios general");
       console.log(dataFavorite, "ini dari post favorite");
       console.log(messageFavorite, "ini dar message favorite");

       const dispatch = useDispatch();

       const FETCH_DATA_REQUESTED_DETAIL = "FETCH_DATA_REQUESTED_DETAIL";
       const FETCH_DATA_SUCCESS_DETAIL = "FETCH_DATA_SUCCESS_DETAIL";
       const FETCH_DATA_ERROR_DETAIL = "FETCH_DATA_ERROR_DETAIL";
        const FETCH_DATA_REQUESTED_DETAIL_USER = "USER_FETCH_DATA_REQUESTED_DETAIL";
       const FETCH_DATA_SUCCESS_DETAIL_USER = "USER_FETCH_DATA_SUCCESS_DETAIL";
       const FETCH_DATA_ERROR_DETAIL_USER = "USER_FETCH_DATA_ERROR_DETAIL";

       const fetchDataRequest = () => {
         return {
           type: FETCH_DATA_REQUESTED_DETAIL,
         };
       };

       const fetchDataSuccess = (posts) => {
         return {
           type: FETCH_DATA_SUCCESS_DETAIL,
           payload: posts,
         };
       };

       const fetchDataError = (error) => {
         return {
           type: FETCH_DATA_ERROR_DETAIL,
           payload: error,
         };
       };

       const fetchData = () => {
         dispatch(fetchDataRequest());
         axios
           .get(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
           .then((res) => {
             const dataPost = res.data;
             console.log(dataPost, "ini data post dari axios");
             dispatch(fetchDataSuccess(dataPost));
           })
           .catch((err) => {
             dispatch(fetchDataError(err.message));
           });
       };

        const UserFetchDataRequest = () => {
         return {
           type: FETCH_DATA_REQUESTED_DETAIL_USER,
         };
       };

       const UserFetchDataSuccess= (posts) => {
        console.log('jalan user', posts);
         return {
           type: FETCH_DATA_SUCCESS_DETAIL_USER,
           payload: posts,
         };
       };

       const UserFetchDataError= (error) => {
         return {
           type: FETCH_DATA_ERROR_DETAIL_USER,
           payload: error,
         };
       };


         const fetchDataUser = () => {
           dispatch(UserFetchDataRequest());
           axios
             .get(
               `https://jsonplaceholder.typicode.com/posts/${postId}`
             )
             .then((res) => {
               const dataPost = res.data;
               console.log(dataPost, "ini data post dari axios user");
               dispatch(UserFetchDataSuccess(dataPost));
             })
             .catch((err) => {
               dispatch(UserFetchDataError(err.message));
             });
         };

  useEffect(() => {
      fetchData();
      fetchDataUser();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [postId])

 
  return (
    <Box>
  
            <div>
        ini modal detail post {postId} - {dataPostUser.title} - {dataPostUser.body}
      </div>
  
  
      <Box>
        {dataPostGeneral.map((dr) => {
          return (
            <li key={dr.id}>
              {dr.email} - {dr.body}
               
            </li>
          );
        })}
      </Box>

    </Box>
  );
};

export default DetailPost;
