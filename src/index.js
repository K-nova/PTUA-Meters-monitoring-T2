import React from "react";
import ReactDOM from "react-dom";
import * as ReactDOMClient from "react-dom/client";

import "./main/css/style.css"

import { Header } from "./main/js/Header";
import { MainFrame } from "./main/js/MainFrame";
import {SlideShow} from './slideShow/js/slideShow'

let root= document.querySelector('#root')
root.style.height='100%'

let DOMroot=ReactDOMClient.createRoot(root);

let RootContent=()=>{
  return(
    <>
      <Header />
      <MainFrame  MainFrameContent={SlideShow} />
    </>
    

  )
}


DOMroot.render(<RootContent />)