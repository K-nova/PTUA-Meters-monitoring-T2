import React from "react"
import { Link} from "react-router-dom";

import '../css/style_tree.css'

let DefaultContent=()=>{
    return(
    <div></div>
    )
}


export default class Accordion extends React.Component{
    //элементы
    label
    contentContainer
    
    static defaultProps={
        labelStyle:{},
        expandIconStyle:{},
        Content: DefaultContent,
    }


    constructor(props) {
        super(props)

        this.ctrlElement=React.createRef()
        this.label=React.createRef()
        this.contentContainer=React.createRef()

        this.state={
            onEdit: false,
            contentIsVisible: false,
        }

    }


    render (){

        let {labelStyle, text,  expandIconStyle, Content}=this.props

        return(
            <div className= "accordion_item" id={this.props.id} >
                <div className="accordion_header"> 
                 
                {!this.state.onEdit ?(
                    <Link to={this.props.link} className="tree-title" onClick={()=>this.#OnClickFunc()}>{text}</Link>
                ):(
                    /*изменяемый текст */
                    <input ref={this.label} type="text" onClick={()=>this.#OnClickFunc()} className="tree-title" style={labelStyle} readOnly value={text} />
                )}
                    


                    <div className='tree-expandIcon' style={expandIconStyle} onClick={()=>this.#OnClickFunc()}></div>                 

                    
                    
                </div>

                <div ref={this.contentContainer}  className="accordion_content">
                    <Content />
                </div>
            </div>
        )
    }

    #OnClickFunc=()=>{
        //контроль раскрытия
        if(!this.state.onEdit){
            if(!this.state.contentIsVisible){
                this.contentContainer.current.style.display='block';
                this.setState({contentIsVisible:true})
            }else{
                this.contentContainer.current.style.display='none'
                this.setState({contentIsVisible:false})
            }
        }
    }
}
