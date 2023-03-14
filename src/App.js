import Box from "@mui/material/Box";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "./pages/Layout";
import Main from "./pages/Main";
import LikedPost from "./pages/LikedPost";
import DetailPost from './components/DetailPost';
import Admin from "./pages/Admin";
import CreatePostAdmin from './components/CreatePostAdmin';
import EditPostAdmin from './components/EditPostAdmin';
import Login from './components/Login';
import PrivateRoute from "./components/PrivateRoute";
import AllPost from "./pages/Allpost";

function App() {
  return (
    <Box color="primary">
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* <Route element={<Main />}> */}
          <Route path="/" element={<AllPost/>} >
            <Route path="posts/:postId" element={<DetailPost />} />

           <Route
              path="login"
              element={
                  <Login />
              }
            /> 
      </Route> 


          <Route path="liked-post" element={<LikedPost />} />

          <Route
            path="admin"
            element={
              <PrivateRoute  redirectTo="/login">
                <Admin />
              </PrivateRoute>
            }
          >
            <Route path="posts/:postId" element={<DetailPost />} />
            <Route path="create" element={<CreatePostAdmin />} />
            <Route path="posts/:postId/edit" element={<EditPostAdmin />} />
          </Route>
        </Route>
      </Routes>
    </Box>
  );
}

export default App;
