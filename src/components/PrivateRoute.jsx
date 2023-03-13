import React from "react";
import  { Navigate } from "react-router-dom";

const PrivateRoute = ({children, loginOnly, redirectTo}) => {
    

    if(!loginOnly) {
        return <Navigate to={redirectTo} />
    }

     if (loginOnly) {
      return children;
     }

  
    
};

export default PrivateRoute;
