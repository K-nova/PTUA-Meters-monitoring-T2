import React from "react";

import '../css/chartsOverview.css'

export default  class ChartOverviewButton extends React.Component{
    static defaultProps={}

    constructor(props) {
        super(props)
    }

    render (){
        return(
            <button className="Overview">
                <figure className="Overview-figure">
                    <img src={this.props.img}/>
                    <figcaption className="Overview-text">{this.props.text}</figcaption>
                </figure>
            </button>
        )
    }
}