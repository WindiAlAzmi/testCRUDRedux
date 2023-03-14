import { Avatar, Box, List, ListItem, Modal, styled, Typography } from "@mui/material";
import React, {useEffect} from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {  dataAllPostDetail } from "../reducer/GeneralAccess/detailPost";
import axios from "axios";
import { dataModalLogin } from "../reducer/GeneralAccess/generalReducer";
import SmsOutlinedIcon from "@mui/icons-material/SmsOutlined";

const DetailPost = () => {
  const { postId } = useParams();
  const dataModalCheck = useSelector(dataModalLogin);

       const dataPostGeneral = useSelector(dataAllPostDetail);


        const dataPostUser = useSelector(state => state.detailStatePostUser.postData);
  

       console.log(dataPostGeneral, "ini dari post general");
       console.log(dataPostUser, "ini dari post user azxios general");


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


   const handleClose  = () => {
     dispatch({
       type: "SET_MODAL",
       payload: false,
     });
   };

   const StyledModal = styled(Modal)({
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
   })

  return (
    <StyledModal
      open={dataModalCheck}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box
        position="fixed"
        top="50%"
        left="50%"
        sx={{
          width: "50%",
          maxWidth: "100vw",
          maxHeight: "60%",
          backgroundColor: "#1a237e",
          overflowY: "auto",
          transform: "translate(-50%, -50%)",
          padding: 2,
        }}
      >
        <Typography
          sx={{
            color: "white",
            fontSize: 21,
            fontWeight: 600,
            textAlign: "center",
            marginBottom: 2,
          }}
          id="modal-modal-title"
          variant="h6"
          component="h2"
        >
          {dataPostUser.title}
        </Typography>
        <Typography
          sx={{
            color: "white",
            fontSize: 16,
            textAlign: "left",
            fontWeight: 400,
            
          }}
          id="modal-modal-title"
          variant="h6"
          component="h4"
        >
          Post : {dataPostUser.body}
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 3 }}>
          <List
            sx={{
              paddingRight: 6,
              paddingLeft: 6,
            }}
          >
            <Typography
              sx={{
                color: "white",
                textAlign: "left",
                fontSize: 16,
              }}
              variant="h6"
              component="h4"
            >
              {dataPostGeneral.length} Comments:
            </Typography>
            {dataPostGeneral.map((dr) => {
              return (
                <ListItem
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    backgroundColor: "white",
                    padding: 2,
                    textAlign: "center",
                    marginBottom: 2,
                    marginTop:1,
                    boxShadow: 10,
                    borderRadius: 5,
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      gap: 2,
                      justifyContent: "flex-start",
                      // backgroundColor: "green",
                      width: "100%",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        gap: 2,
                        justifyContent: "flex-start",
                        alignItems: "center",
                        // backgroundColor: "yellow",
                        width: "70%",
                      }}
                    >
                      <Avatar
                        sx={{
                          backgroundColor: "#1a237e",
                          color: "white",
                          textAlign: "center",
                        }}
                      >
                        {dr.name.slice(0, 1)}
                      </Avatar>
                      <Typography
                        sx={{
                          // backgroundColor: "blue",
                          color: "black",
                          textAlign: "left",
                          fontSize: 14,
                          fontWeight: 500,
                        }}
                        variant="h6"
                        component="h4"
                      >
                        {dr.name}
                      </Typography>
                    </Box>

                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        gap: 2,
                        justifyContent: "flex-end",
                        // backgroundColor: "blue",
                        width: "30%",
                      }}
                    >
                      <SmsOutlinedIcon />
                    </Box>
                  </Box>

                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "flex-start",
                      // backgroundColor: "blue",
                      width: "100%",
                      marginTop: 1,
                    }}
                  >
                    <Typography
                      sx={{
                        // backgroundColor: "pink",
                        color: "black",
                        textAlign: "left",
                        fontSize: 12,
                      }}
                      variant="h6"
                      component="h4"
                    >
                      {dr.body}
                    </Typography>
                  </Box>
                </ListItem>
              );
            })}
          </List>
        </Typography>
      </Box>
    </StyledModal>
  );
};

export default DetailPost;
