import React, { Component } from "react"

import '../css/mainFrame.css'


let MainFrameDefaultContent=()=>{
    return(
        <div></div>
    )
}

export class MainFrame extends React.Component{
     
    static defaultProps={
        MainFrameContent: MainFrameDefaultContent
    }

    constructor(props){
        super(props)
        //состояния
        this.state={
            MainFrameContent: this.props.MainFrameContent
        }
    }

   
    render (){
       let {MainFrameContent}=this.state
        return(
            <div id="MainFrame" className="mainFrame">
                <MainFrameContent setMainFrameContent={this.setMainFrameContent}/>
            </div>
        )
    }


    setMainFrameContent=(newContent)=>{
        if(newContent==undefined){newContent=MainFrameDefaultContent}
        this.setState({MainFrameContent:newContent})
    }
}


