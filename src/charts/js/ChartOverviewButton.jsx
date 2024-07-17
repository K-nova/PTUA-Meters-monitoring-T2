import React from "react";
import { Link} from "react-router-dom";

import img_question from '../data/icon question-marks.png'

import '../css/chartsOverview.css'

export default  class ChartOverviewButton extends React.Component{
    static defaultProps={
        img: img_question
    }

    constructor(props) {
        super(props)
    }

    render (){
        return(

            <Link to={this.props.link} className="Overview">
                <figure className="Overview-figure" >
                    <img src={this.props.img} className="Overview-picture"/>
                    <figcaption className="Overview-text">{this.props.text}</figcaption>
                </figure>
            </Link>
                

        )
    }
}