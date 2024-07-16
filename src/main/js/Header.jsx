import React from "react"
import { Link} from "react-router-dom";

import '../css/header.css'

import headerLogo from '../data/Primetals logo.png'

export class Header extends React.Component{
    render (){
      return(
        <div className="header">
          <Link className="header-logo" to="/intro1">
            <img className="header-logo-image" src={headerLogo} alt="HeaderLogoImage"/>
          </Link>
          
        </div>
      )
    }
  }