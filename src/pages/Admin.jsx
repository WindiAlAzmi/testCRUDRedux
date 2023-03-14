import { Box, List, ListItemButton, ListItemIcon, ListItemText, Stack } from "@mui/material";
import React, {useEffect} from "react";
import { Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { dataPostAdmin, loadingDataPostAdmin, errorDataPostAdmin } from "../reducer/PrivateAccess/ReducerPost";
import { dataFavoriteState, messageFavoriteState } from "../reducer/GeneralAccess/generalReducer";
import axios from "axios";
import { dataAllPostDetailUserLogin } from "../reducer/PrivateAccess/detailUser";
import { dataModalLogin } from "../reducer/GeneralAccess/generalReducer";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Link as RouterLink } from "react-router-dom";
import { Link as MuiLink } from "@mui/material";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";

const Admin = () => {
    const dataLoginUser = useSelector(dataAllPostDetailUserLogin);
  const dataModalCheck = useSelector(dataModalLogin);


    const dataPost = useSelector(dataPostAdmin);
     const loadingPost = useSelector(loadingDataPostAdmin);
     const errorPost = useSelector(errorDataPostAdmin);


     const dataFavorite = useSelector(dataFavoriteState);
     const messageFavorite = useSelector(messageFavoriteState);
     





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

 const handleOpen = () => {
   dispatch({
     type: "SET_MODAL",
     payload: true,
   });
 };


    return (
      <Box>
        <Stack
          direction="column"
          justifyContent="center"
          alignItems="center"
          spacing={2}
          // sx={{ padding: 2 , paddingBottom:0}}
        >
          {loadingPost ? (
            <Box
              sx={{
                color: "black",
                fontSize: 14,
              }}
            >
              Loading
            </Box>
          ) : (
            <List
              aria-labelledby="basic-list-demo"
              sx={{
                width: "100%",
                textDecoration: "none",
                display: "flex",
                flexDirection: "column",
                gap: 1,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "white",
              }}
            >
              {dataPost.map((ds) => {
                return (
                  <MuiLink component={RouterLink} to={`/admin/posts/${ds.id}`}>
                    <ListItemButton
                      key={ds.id}
                      sx={{
                        textDecoration: "none",
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                        width: "100%",
                        //   backgroundColor: "#1a237e",
                        border: 1,
                        borderColor: "#1a237e",
                        "&:hover": {
                          backgroundColor: "#1a237e",
                        },
                      }}
                    >
                      <ListItemText
                        primary={ds.title}
                        sx={{
                          color: "black",
                          display: "flex",
                          flexDirection: "row",
                          fontSize: 18,
                          textDecoration: "none",
                          width: 500,
                          "&:hover": {
                            color: "white",
                          },
                        }}
                        onClick={() => handleOpen(ds)}
                      />
                      <ListItemButton>
                        <ListItemIcon>
                          <FavoriteIcon
                            sx={{
                              color: "red",
                              "&:hover": {
                                color: "white",
                              },
                            }}
                            onClick={() => favoriteHandler(ds)}
                          />
                        </ListItemIcon>
                        <ListItemIcon>
                          <EditOutlinedIcon
                            sx={{
                              color: "red",
                              "&:hover": {
                                color: "white",
                              },
                            }}
                            onClick={() => favoriteHandler(ds)}
                          />
                        </ListItemIcon>
                        <ListItemIcon>
                          <DeleteOutlineOutlinedIcon
                            sx={{
                              color: "red",
                              "&:hover": {
                                color: "white",
                              },
                            }}
                            onClick={() => favoriteHandler(ds)}
                          />
                        </ListItemIcon>
                      </ListItemButton>
                    </ListItemButton>
                  </MuiLink>
                );
              })}
            </List>
          )}

          {errorPost ? (
            <Box
              sx={{
                color: "black",
                fontSize: 14,
              }}
            >
              {errorPost}
            </Box>
          ) : null}
        </Stack>
      
        {dataModalCheck && <Outlet />}
      </Box>
    );
}

export default Admin;