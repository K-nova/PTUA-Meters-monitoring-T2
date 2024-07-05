import React from "react";
import ReactDOM from "react-dom";
import * as ReactDOMClient from "react-dom/client";

import "./main/css/style.css"

import { Header } from "./main/js/Header";
import { MainFrame } from "./main/js/MainFrame.js";
import {SlideShow} from './slideShow/js/slideShow.js'

let root=ReactDOMClient.createRoot(document.querySelector('#root'));

let RootContent=()=>{
  return(
    <div>
      <Header />
      <MainFrame  MainFrameContent={SlideShow} />
    </div>
    

  )
}


root.render(<RootContent />)