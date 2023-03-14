import {
  Box,

  List,

  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
} from "@mui/material";
import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import {
  loadingData,
  dataAllPost,
  errorData,
} from "../reducer/GeneralAccess/ReducerPost";
import {
  dataFavoriteState,
  messageFavoriteState,
} from "../reducer/GeneralAccess/generalReducer";
import {
 
  dataAllPostAllUser,
 
} from "../reducer/GeneralAccess/UserReducer";
import { dataModalLogin } from "../reducer/GeneralAccess/generalReducer";
import FavoriteIcon from "@mui/icons-material/Favorite";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import { Link as RouterLink } from "react-router-dom";
import { Link as MuiLink } from "@mui/material";

const AllPost = () => {
  // const navigate = useNavigate();

  const dataPostGeneral = useSelector(dataAllPost);
  const loadingPostGeneral = useSelector(loadingData);
  const errorPostGeneral = useSelector(errorData);

  const dataUserList = useSelector(dataAllPostAllUser);
  const dataModalCheck = useSelector(dataModalLogin);

  const dataFavorite = useSelector(dataFavoriteState);
  const messageFavorite = useSelector(messageFavoriteState);

  console.log(dataPostGeneral, "ini dari post general");
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
//   const changeHandler = (ds) => {
//     navigate(`/posts/${ds}`);
//   };

  const handleOpen = () => {
    dispatch({
      type: "SET_MODAL",
      payload: true,
    });
  };


  return (
    <Box sx={{ padding: 2 }}>
      <Stack
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={2}
        sx={{  padding: 2 }}
      >
        {loadingPostGeneral ? (
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
              width:"100%",
              textDecoration: "none",
              display: "flex",
             flexDirection: "column",
             gap:1,
              justifyContent: "center",
              alignItems: "center",
              backgroundColor:'white'
            }}
          >
            {dataPostGeneral.map((ds) => {
              return (
                <MuiLink component={RouterLink} to={`../../posts/${ds.id}`}>
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

        {errorPostGeneral ? (
          <Box
            sx={{
              color: "black",
              fontSize: 14,
            }}
          >
            {errorPostGeneral}
          </Box>
        ) : null}
      </Stack>

      {dataModalCheck && <Outlet />}
    </Box>
  );
};

export default AllPost;
