import { Box, List, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { dataFavoriteState, messageFavoriteState } from "../reducer/GeneralAccess/generalReducer";
import FavoriteIcon from "@mui/icons-material/Favorite";

const LikedPost = () => {
      const dispatch = useDispatch();

     const dataFavorite = useSelector(dataFavoriteState);
     const messageFavorite = useSelector(messageFavoriteState);
     console.log(dataFavorite, 'ini data favorite');

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
      <Box sx={{ display: "flex" }}>

        <Box>
          <List
            aria-labelledby="basic-list-demo"
            sx={{
              width: "100%",
              textDecoration: "none",

              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "flex-start",
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
                      width: "60%",
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
                      }}
                    />
                    <ListItemButton>
                      <ListItemIcon>
                        <FavoriteIcon
                          sx={{ color: "red" }}
                          onClick={() => removeFavoriteHandler(ds)}
                         
                        />
                      </ListItemIcon>
                    </ListItemButton>
                  </ListItemButton>
  

              );
            })}
          </List>
        </Box>
      </Box>
    );
}

export default LikedPost;