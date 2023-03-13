import { Box } from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";

const DetailPost = () => {
  const { postId } = useParams();

  return <Box sx={{ backgroundColor: "yellow" }}>ini modal detail post {postId}</Box>;
};

export default DetailPost;
