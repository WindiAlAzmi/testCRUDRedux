import { Box, List, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { dataFavoriteState } from "../reducer/GeneralAccess/generalReducer";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Link as RouterLink } from "react-router-dom";
import { Link as MuiLink } from "@mui/material";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";

const LikedPost = () => {
      const dispatch = useDispatch();

     const dataFavorite = useSelector(dataFavoriteState);
     console.log(dataFavorite, 'ini data favorite');


        const removeFavoriteHandler = (dr) => {
          dispatch({
            type: "REMOVE_POST",
            payload: dr,
          });
        };

  const handleOpen = () => {
    dispatch({
      type: "SET_MODAL",
      payload: true,
    });
  };


    return (
      <Box sx={{}}>
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
          {dataFavorite.map((ds) => {
            return (
           
                <ListItemButton
                  key={ds.id}
                  sx={{
                    textDecoration: "none",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    width: "50%",
                    padding:1,
                    //   backgroundColor: "#1a237e",
                    border: 1,
                    borderColor: "#1a237e",
                    "&:hover": {
                      backgroundColor: "#1a237e",
                    },
                  }}
                >
                  <MuiLink component={RouterLink} to={`../../posts/${ds.id}`}>
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
                  </MuiLink>

                  <ListItemButton>
                    <ListItemIcon>
                      <FavoriteIcon
                        sx={{
                          color: "red",
                          "&:hover": {
                            color: "white",
                          },
                        }}
                        onClick={() => removeFavoriteHandler(ds)}
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
                        onClick={() => removeFavoriteHandler(ds)}
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
                        onClick={() => removeFavoriteHandler(ds)}
                      />
                    </ListItemIcon>
                  </ListItemButton>
                </ListItemButton>
             
            );
          })}
        </List> 

      </Box>
    );
}

export default LikedPost;