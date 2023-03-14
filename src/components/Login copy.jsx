import React, {useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { dataAllPostAllUser } from "../reducer/GeneralAccess/UserReducer";
// import {dataAllPostDetailUserLogin} from "../reducer/PrivateAccess/detailUser";
import {  dataModalLocation, dataModalLogin } from "../reducer/GeneralAccess/generalReducer";
import { Box, Button, Input, Modal, Typography } from "@mui/material";
// import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";

const Login = () => {
    const dataModalCheck = useSelector(dataModalLogin);
         const dataModalCheckLocation = useSelector(dataModalLocation);
     
const savedItem = localStorage.getItem("emailUser");
const parsedItem = JSON.parse(savedItem);
console.log(parsedItem, 'ini nilai parse localstorage');

    const navigate = useNavigate();
     const dispatch = useDispatch();


    const dataUserList = useSelector(dataAllPostAllUser);
    //  const dataUserLogin = useSelector(dataAllPostDetailUserLogin);
//  const dataUserLogout = useSelector(dataLogoutModal);


   useEffect(() =>{
    if(parsedItem !== undefined){
       if (dataModalCheckLocation.includes("create")) {
         navigate(`/admin/create`);
       }else {

       }
      }
   
 }, [parsedItem, dataModalCheckLocation, navigate]);
                                                                   
    const [data, setData] = useState({
      email: "",
      error: null,
      loading: false,
    });

    const { email,  error, loading } = data;
    console.log(error, "ini data register");

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
            localStorage.setItem("emailUser", JSON.stringify(result.email));
          await putData(result);
          //set semua jadi null
        }else {
           setData({ ...data, error: "Email is Not Found!" });
        }
            setData({
              email: "",
              password: "",
              error: null,
              loading: false,
            });

            //PINDAH KE HALAMAN UTAMA
            navigate(`/admin/${dataModalCheckLocation}`);

            
      } catch (err) {
        setData({ ...data, error: err.message, loading: false });
      }
    };

       const handleClose  = () => {
     dispatch({
       type: "SET_MODAL",
       payload: false,
     });                             
     navigate("/");
   };

    return (
      <>
      {/* {dataUserLogout ?  

         <Modal
        open={dataLogoutModal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          position="fixed"
          top="50%"
          left="50%"
          sx={{
            width: "30%",
            maxWidth: "100vw",
            maxHeight: "60%",
            backgroundColor: "#1a237e",
            overflowY: "auto",
            transform: "translate(-50%, -50%)",
            padding: 4,
          }}
        >
          <Typography
            sx={{
              color: "white",
              fontSize: 21,
              fontWeight: 600,
              textAlign: "center",
              marginBottom: 2,
            }}
            id="modal-modal-title"
            variant="h6"
            component="h2"
          >
            ingin logout?
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>

                <Button
                  onClick={handleSubmit}
                  variant="contained"
                  size="small"
                  sx={{

                    backgroundColor: "white",
                    color: "black",
                    width: "80%",
                    borderRadius: 5,
                    padding: 1,
                    fontWeight: 600,
                    fontSize: 14,
                    "&:hover": {
                      backgroundColor: "white",
                    },
                  }}
                >
                  logout
                </Button>
          </Typography>
        </Box>
      </Modal>
  
        :  */}
       
      <Modal
        open={dataModalCheck}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          position="fixed"
          top="50%"
          left="50%"
          sx={{
            width: "30%",
            maxWidth: "100vw",
            maxHeight: "60%",
            backgroundColor: "#1a237e",
            overflowY: "auto",
            transform: "translate(-50%, -50%)",
            padding: 4,
          }}
        >
          <Typography
            sx={{
              color: "white",
              fontSize: 21,
              fontWeight: 600,
              textAlign: "center",
              marginBottom: 2,
            }}
            id="modal-modal-title"
            variant="h6"
            component="h2"
          >
            Login
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
              {/* <div>
                      <label>Email: </label>
                      <input
                        type="text"
                        name="email"
                        value={email}
                        onChange={handleChange}
                      />
                    </div> */}
             <Box
                sx={{
                  width: "100%",
                  gap: 6,
                  justifyContent: "center",
                  alignItems: "center",
                  display: "flex",
                  flexDirection: "column",
                }}
              > 
                <Input
                  type="text"
                  name="email"
                  value={email}
                  placeholder="your email..."
                  onChange={handleChange}
                  sx={{
                    backgroundColor: "white",
                    color: "black",
                    width: "80%",
                  }}
                />
                {error ? (
                  <Typography
                    sx={{
                      color: "white",
                      fontSize: 21,
                      fontWeight: 600,
                      textAlign: "center",
                      marginBottom: 2,
                    }}
                    id="modal-modal-title"
                    variant="h6"
                    component="h2"
                  >
                   {error}
                  </Typography>
                ) : null}

                <Button
                  onClick={handleSubmit}
                  variant="contained"
                  size="small"
                  sx={{

                    backgroundColor: "white",
                    color: "black",
                    width: "80%",
                    borderRadius: 5,
                    padding: 1,
                    fontWeight: 600,
                    fontSize: 14,
                    "&:hover": {
                      backgroundColor: "white",
                    },
                  }}
                >
                  {loading ? "loading" : "Login"}
                </Button>
               </Box> 
            </form>
          </Typography>
        </Box>
      </Modal>
      {/* } */}
      </>
    );
}

export default Login;