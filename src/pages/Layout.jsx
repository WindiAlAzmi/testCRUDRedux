import { Box, Button, Stack  } from "@mui/material";
import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import CreatePostAdmin from "../components/CreatePostAdmin";

const Layout = () => {
    const savedItem = localStorage.getItem("emailUser");
    const parsedItem = JSON.parse(savedItem);
    console.log(parsedItem, "ini nilai parse localstorage");

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const likeHandler = () => {
        navigate('/liked-post');
         
    }

    const loginHandler = () => {
        navigate("/login");
           dispatch({
             type: "SET_LOGOUT_MODAL",
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
          // backgroundColor: "red",
          display: "flex",
          flexDirection: "column",
          height: "100vh",
          justifyContent: "space-between",
          padding: 1,
          //   border: 3,
        }}
      >
        <Stack
          direction="row"
          spacing={2}
          justifyContent="space-between"
          alignItems="center"
          sx={{
            backgroundColor: "white",
            padding: 2,
            borderColor: "black",
          }}
        >
          <Box
            sx={{
              color: "#1a237e",
              fontWeight: 600,
              fontSize: 32,
              fontStyle: "italic",
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
              variant="text"
              onClick={homeHandler}
              size="small"
              sx={{
                backgroundColor: "white",
                color: "black",
                width: 110,
                borderRadius: 5,
                fontWeight: 600,
                fontSize: 14,
                "&:hover": {
                  backgroundColor: "white",
                },
              }}
            >
              Home
            </Button>
            <Button
              variant="text"
              onClick={likeHandler}
              size="small"
              sx={{
                backgroundColor: "white",
                color: "black",
                width: 140,
                borderRadius: 5,
                fontWeight: 600,
                fontSize: 14,
                "&:hover": {
                  backgroundColor: "white",
                },
              }}
            >
              Favorite Post
            </Button>
            <Button
              variant="text"
              onClick={adminHandler}
              size="small"
              sx={{
                backgroundColor: "white",
                color: "black",
                width: 140,
                borderStyle: "none",
                // borderRadius: 5,
                fontWeight: 600,
                fontSize: 14,
                "&:hover": {
                  backgroundColor: "white",
                },
              }}
            >
              Halaman Admin
            </Button>
          </Stack>
          <Button
            variant="contained"
            onClick={loginHandler}
            size="small"
            sx={{
              backgroundColor: "#1a237e",
              color: "white",
              width: 140,
              borderRadius: 5,
              padding: 1,
              fontWeight: 500,
              fontSize: 14,
              "&:hover": {
                backgroundColor: "#1a237e",
              },
            }}
          >
            {parsedItem ? 'Logout' : 'Login' }
          </Button>
        </Stack>
      

        <Outlet />
        <CreatePostAdmin />
      </Box>
    );
}

export default Layout;