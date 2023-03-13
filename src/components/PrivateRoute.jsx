import React, {useEffect} from "react";
import  { Navigate, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { dataAllPostDetailUserLogin } from "../reducer/PrivateAccess/detailUser";

const PrivateRoute = ({redirectTo, children}) => {
    
 const dataUserLogin = useSelector(dataAllPostDetailUserLogin);
 console.log(dataUserLogin.email, 'ini data login di privtate route');

            if (dataUserLogin.email === undefined) {
              return <Navigate to={redirectTo} />;
            }

            if (dataUserLogin.email !== undefined) {
              return children;
            }

};

export default PrivateRoute;
