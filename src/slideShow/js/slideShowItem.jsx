import React from "react"
import { Link} from "react-router-dom";

import '../css/slideShow.css'

class SlideShowItem extends React.Component{
    constructor(props){
        super(props)

    }

    render (){
        return(
            <div className={'slideshow-item active'}>
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
                    
                    <Link to={this.props.nextButtonLink} className="slideshow-item-button">далее</Link>
                    
                    <Link to={this.props.startButtonLink} className={this.props.startButtonActive ? 'slideshow-item-buttonF active': 'slideshow-item-buttonF'}>старт</Link>


                </div>
            </div>
        )
    }


}

export default SlideShowItem