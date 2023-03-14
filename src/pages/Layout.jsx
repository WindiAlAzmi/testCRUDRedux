import { Box, Button, Stack  } from "@mui/material";
import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

const Layout = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const likeHandler = () => {
        navigate('/liked-post');
         
    }

    const loginHandler = () => {
        navigate("/login");
           dispatch({
             type: "SET_MODAL",
             payload: true,
           });
      };

      const adminHandler = () => {
         navigate("/admin");
             dispatch({
               type: "SET_MODAL",
               payload: true,
             });
      }

      const homeHandler = () => {
                 navigate("/");
             
      }


    return (
      <Box
        sx={{
          backgroundColor: "primary",
          display: "flex",
          flexDirection: "column",
          //   border: 3,
        }}
      >
        <Stack
          direction="row"
          spacing={2}
          justifyContent="space-between"
          alignItems="center"
          sx={{ backgroundColor: "#106cc8", padding: 2, marginBottom:3 }}
        >
          <Box
            sx={{
              color: "#ffff",
              fontWeight: 600,
              fontSize: 32,
            }}
          >
            Blog
          </Box>
          <Stack
            direction="row"
            spacing={2}
            justifyContent="center"
            alignItems="center"
            sx={{ fontWeight: 300, fontSize: 24 }}
          >
            <Button
              variant="contained"
              onClick={homeHandler}
              size="small"
              sx={{
                backgroundColor: "white",
                color: "black",
                width: 110,
                borderRadius: 5,
                fontWeight: 300,
                fontSize: 14,
                "&:hover": {
                  backgroundColor: "white",
                },
              }}
            >
              Home
            </Button>
            <Button
              variant="contained"
              onClick={likeHandler}
              size="small"
              sx={{
                backgroundColor: "white",
                color: "black",
                width: 140,
                borderRadius: 5,
                fontWeight: 300,
                fontSize: 14,
                "&:hover": {
                  backgroundColor: "white",
                },
              }}
            >
              Favorite Post
            </Button>
            <Button
              variant="contained"
              onClick={adminHandler}
              size="small"
              sx={{
                backgroundColor: "white",
                color: "black",
                width: 140,
                borderRadius: 5,
                fontWeight: 300,
                fontSize: 14,
                "&:hover": {
                  backgroundColor: "white",
                },
              }}
            >
              Halaman Admin
            </Button>
            <Button
              variant="contained"
              onClick={loginHandler}
              size="small"
              sx={{
                backgroundColor: "white",
                color: "black",
                width: 140,
                borderRadius: 5,
                fontWeight: 300,
                fontSize: 14,
                "&:hover": {
                  backgroundColor: "white",
                },
              }}
            >
              Login
            </Button>
            {/* <button onClick={likeHandler}>Favorite post</button> */}
            {/* <button onClick={adminHandler}>Halaman Admin</button> */}
            {/* <button onClick={loginHandler}>Login</button> */}
          </Stack>
        </Stack>

        <Outlet />
      </Box>
    );
}

export default Layout;