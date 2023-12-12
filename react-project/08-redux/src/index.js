//ver1. props drilling 예시 
// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//     <App />
// );

//ver2. redux 적용
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import AppRedux2 from './AppRedux2';

import {Provider} from 'react-redux';
import {configureStore} from "@reduxjs/toolkit";
import {composeWithDevTools} from 'redux-devtools-extension';


import rootReducer from "./store"

const store = configureStore({reducer: rootReducer}, composeWithDevTools());
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <AppRedux2 />
  </Provider>  
);

//ver3. redux 구조화

