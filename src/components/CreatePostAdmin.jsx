import {  Fab,  Tooltip } from "@mui/material";
import React from "react";
import AddIcon from "@mui/icons-material/Add";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { dataModalLocation } from "../reducer/GeneralAccess/generalReducer";

const CreatePostAdmin = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const dataModalCheckLocation = useSelector(dataModalLocation);
    console.log(dataModalCheckLocation, 'ini cek data locatiion');

      const adminHandler = () => {
        dispatch({
          type: "SET_LOCATION_MODAL",
          payload: {cr: 'create', bl: true},
        });
      
     
        navigate('/admin/create');
      };


    return (
      <Tooltip
      onClick={adminHandler}
        title="Add"
        sx={{
            padding:2

   
            
      
        }}
      >
        <Fab
          size="large"
          aria-label="add"
          sx={{
            backgroundColor: "#1a237e",
            color: "white",
            padding:1,
          

            "&:hover": {
              backgroundColor: "#1a237e",
            },
          }}
        >
          <AddIcon />
        </Fab>
      </Tooltip>
    );
}

export default CreatePostAdmin;