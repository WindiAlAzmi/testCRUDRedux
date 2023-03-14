import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { legacy_createStore as createStore } from "redux";
import { Provider } from "react-redux";
import {combineReducers} from  'redux';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { theme } from './theme';
import { ThemeProvider } from '@mui/material';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReducerPost from './reducer/GeneralAccess/ReducerPost';
import reducerPostAdmin from './reducer/PrivateAccess/ReducerPost';
import generalAllReducer from './reducer/GeneralAccess/generalReducer';
import detailPost from './reducer/GeneralAccess/detailPost';
import detailPostUser from './reducer/GeneralAccess/detailPostUser';
import userReducer from './reducer/GeneralAccess/UserReducer';
import detailUser from './reducer/PrivateAccess/detailUser';

const rootReducer = combineReducers({
  allPost: ReducerPost,
  postAdmin : reducerPostAdmin,
  generalStateData : generalAllReducer,
  detailStatePost : detailPost,
  detailStatePostUser : detailPostUser,
  allPostUser : userReducer,
 detailStatePostUserLogin : detailUser,


});
const store = createStore(rootReducer);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route path="/*" element={<App />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
