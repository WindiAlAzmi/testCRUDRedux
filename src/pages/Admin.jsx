import { Box } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";

const Admin = () => {
    return (
        <Box sx={{ backgroundColor: 'green', padding:10 }}>
            ini halaman admin
            <Outlet />
        </Box>
    )
}

export default Admin;