import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { create } from "@mui/material/styles/createTransitions";
// import { Provider } from "react-redux";
// import store from "./redux/store";
import QuizHolder from './redux/QuizContext';
const root=ReactDOM.createRoot(document.getElementById('root'))

root.render(


  <React.StrictMode>
    <QuizHolder>
      <App />
    </QuizHolder>
  </React.StrictMode>
 
)
