import React, {useEffect} from "react";
import { useNavigate } from "react-router-dom";

const Login = ({loginOnly}) => {

    const navigate = useNavigate();

    useEffect(() =>{
        if(loginOnly){

         console.log(loginOnly, 'ini nilai login');
         navigate("/admin");

        }
 }, [loginOnly, navigate]);

    return (
        <div>ini modal login</div>
    )
}

export default Login;