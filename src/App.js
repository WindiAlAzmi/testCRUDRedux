import Box from "@mui/material/Box";
import { Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Main from "./pages/Main";
import LikedPost from "./pages/LikedPost";
import DetailPost from './components/DetailPost';
import Admin from "./pages/Admin";
import CreatePostAdmin from './components/CreatePostAdmin';
import EditPostAdmin from './components/EditPostAdmin';
import Login from './components/Login';
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <Box color="primary" sx={{ backgroundColor: "red", padding: 10 }}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Main />}>
            <Route path="posts/:postId" element={<DetailPost />} />
            <Route
              path="login"
              element={
                  <Login loginOnly={false} />
              }
            />
          </Route>

          <Route path="liked-post" element={<LikedPost />} />

          <Route
            path="admin"
            element={
              <PrivateRoute loginOnly={false} redirectTo="/login">
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
