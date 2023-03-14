import React from "react";
import  { Navigate } from "react-router-dom";
// import {  useSelector } from "react-redux";
// import { dataAllPostDetailUserLogin } from "../reducer/PrivateAccess/detailUser";

const PrivateRoute = ({redirectTo, children}) => {
    const savedItem = localStorage.getItem("emailUser");
    const parsedItem = JSON.parse(savedItem);
    console.log(parsedItem, "ini nilai parse localstorage");

//  const dataUserLogin = useSelector(dataAllPostDetailUserLogin);
//  console.log(dataUserLogin.email, 'ini data login di privtate route');

            if (parsedItem === undefined) {
              return <Navigate to={redirectTo} />;
            }

            if (parsedItem !== undefined) {
              return children;
            }

};

export default PrivateRoute;
