import { Box } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";

const Layout = () => {
    return (
         <Box sx={{ backgroundColor:'pink', padding:2 }}>
         ini Layout   
            <Outlet />
         </Box>
    )
}

export default Layout;