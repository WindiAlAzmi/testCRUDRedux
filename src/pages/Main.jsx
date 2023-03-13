import { Box } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";

const Main = () => {
    return (
        <Box sx={{ backgroundColor:'brown', padding: 2 }}>ini halaman utama
        
        <Outlet />
        </Box>
    )
}

export default Main;