import React, {useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { dataAllPostAllUser } from "../reducer/GeneralAccess/UserReducer";
import {dataAllPostDetailUserLogin} from "../reducer/PrivateAccess/detailUser";

const Login = () => {

    const navigate = useNavigate();
     const dispatch = useDispatch();


    const dataUserList = useSelector(dataAllPostAllUser);
     const dataUserLogin = useSelector(dataAllPostDetailUserLogin);

//     useEffect(() =>{
//         if(loginOnly){

//          console.log(loginOnly, 'ini nilai login');
//          navigate("/admin");

//         }
//  }, [loginOnly, navigate]);

   useEffect(() =>{
        if(dataUserLogin.email !== undefined){

         console.log(dataUserLogin.email, 'ini nilai login');
         navigate("/admin");

        }

 }, [dataUserLogin, navigate]);

    const [data, setData] = useState({
      email: "",
      error: null,
      loading: false,
    });

    const { email,  error, loading } = data;
    console.log(data, "ini data register");

    const handleChange = (e) => {
      setData({ ...data, [e.target.name]: e.target.value });
    };

      const putData = (data) => {
        dispatch({
          type: "USER_FETCH_DATA_SUCCESS_DETAIL",
          payload: data,
        });
      };

    const handleSubmit = async (e) => {
      e.preventDefault();
      setData({ ...data, error: null, loading: true });
      if (!email) {
        setData({ ...data, error: "All fields are required" });
      }
      try {
        const result = dataUserList.find((dt) => dt.email === email);
        if (result) {
          await putData(result);
          //set semua jadi null
        }
            setData({
              email: "",
              password: "",
              error: null,
              loading: false,
            });

            //PINDAH KE HALAMAN UTAMA
            navigate("/admin");

            
        // //set semua jadi null
        // setData({
        //   email: "",
        //   password: "",
        //   error: null,
        //   loading: false,
        // });

        // //PINDAH KE HALAMAN UTAMA
        // navigate("/admin");
      } catch (err) {
        setData({ ...data, error: err.message, loading: false });
      }
    };

    return (
      <section>
        <h3>login account</h3>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <div>
            <label>Email: </label>
            <input
              type="text"
              name="email"
              value={email}
              onChange={handleChange}
            />
          </div>
          {error ? <p>{error}</p> : null}
          <div>
            <button>{loading ? "loading" : "Login"}</button>
          </div>
        </form>
      </section>
    );
}

export default Login;