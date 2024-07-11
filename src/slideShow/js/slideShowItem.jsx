import React from "react"

import '../css/slideShow.css'

class SlideShowItem extends React.Component{
    constructor(props){
        super(props)

    }

    render (){
        return(
            <div className={this.props.active ? 'slideshow-item active': 'slideshow-item'}>
                <img src={this.props.img} alt="" />
                <div className="slideshow-item-text">
                    <h5>{this.props.topic}</h5>
                    
                    <p>
                        {this.props.mainText.split('\n').map((item, index) => (
                            <React.Fragment key={index}>
                                {item}
                                <br />
                            </React.Fragment>
                        ))}
                    </p>
                    
                    <button className="slideshow-item-button" onClick={this.props.nextButtonOnClickFunc}>далее</button>

                    <button className={this.props.startButtonActive ? 'slideshow-item-buttonF active': 'slideshow-item-buttonF'}
                    onClick={this.props.startButtonOnClickFunc}>старт</button>

                </div>
            </div>
        )
    }


}

export default SlideShowItem