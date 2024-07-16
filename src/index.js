import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import * as ReactDOMClient from "react-dom/client";

import "./main/css/style.css"

import App from './main/js/App'
import { Header } from "./main/js/Header";
import { MainFrame } from "./main/js/MainFrame";
import {SlideShow} from './slideShow/js/slideShow'

let root= document.querySelector('#root')
root.style.height='100%'

let DOMroot=ReactDOMClient.createRoot(root);

let RootContent=()=>{
  return(
    <BrowserRouter>
      <App/>
    </BrowserRouter>
    
  )
}


DOMroot.render(<RootContent />)