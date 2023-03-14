import { Box, Button, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Stack } from "@mui/material";
import React, {useEffect} from "react";
import { Outlet, useNavigate, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { loadingData, dataAllPost, errorData } from "../reducer/GeneralAccess/ReducerPost";
import { dataFavoriteState, messageFavoriteState } from "../reducer/GeneralAccess/generalReducer";
import { loadingDataAllUser, dataAllPostAllUser, errorDataAllUser } from "../reducer/GeneralAccess/UserReducer";
import { Link } from "react-router-dom";
import { dataModalLogin } from "../reducer/GeneralAccess/generalReducer";
import FavoriteIcon from "@mui/icons-material/Favorite";
// import Link from "@mui/material";
import {  Link as RouterLink } from "react-router-dom";
import {Link as MuiLink } from "@mui/material";
const Main = () => {

    const dataModalCheck = useSelector(dataModalLogin);

    return (
      <Box sx={{ padding: 2 }}>
         ini main

        {dataModalCheck && <Outlet />}
        
      </Box>
    );
}

export default Main;