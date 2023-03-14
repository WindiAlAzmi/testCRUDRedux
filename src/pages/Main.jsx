import { Box } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";


import { dataModalLogin } from "../reducer/GeneralAccess/generalReducer";


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