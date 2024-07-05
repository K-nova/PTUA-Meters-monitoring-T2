import React from "react"

import '../css/header.css'

import headerLogo from '../data/Primetals logo.png'

export class Header extends React.Component{
    render (){
      return(
        <div className="header">
          <a className="header-logo" href="index.html">
            <img className="header-logo-image" src={headerLogo} alt="HeaderLogoImage"/>
          </a>
          
        </div>
      )
    }
  }