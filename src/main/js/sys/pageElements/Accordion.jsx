import React from "react"

import '../../../css/style_accordion.css'

let DefaultContent=()=>{
    return(
    <div></div>
    )
}


export default class Accordion extends React.Component{
    //элементы
    ctrlElement
    label
    contentContainer
    
    //переменный
    checkBoxId
    onEdit=false

    static defaultProps={
        labelClass:"accordion_label",
        labelStyle:{},
        expandIconClass: "accordion_expandIcon",
        expandIconStyle:{},
        Content: DefaultContent,
        labelOnClick: ()=>{}
    }

    constructor(props) {
        super(props)

        this.ctrlElement=React.createRef()
        this.label=React.createRef()
        this.contentContainer=React.createRef()

    }


    render (){
        this.checkBoxId=this.props.id+'_ctrlElement'

        let {labelAsInput, labelClass, labelStyle, text, expandIconClass, expandIconStyle, Content}=this.props

        return(
            <div className= "accordion_item" id={this.props.id} >
                <div className="accordion_header">

                    <input ref={this.ctrlElement} type="checkbox" className="accordion_ctrlElement" id={this.checkBoxId}/>   
                 
                    {!labelAsInput ?(
                        /*обычный текст */
                        <label htmlFor={this.checkBoxId} className={labelClass} style={labelStyle} onClick={()=>this.#OnClickFunc()}>{text}</label>
                    ):(
                        /*изменяемый текст */
                        <input ref={this.label} type="text" onClick={()=>this.#OnClickFunc(false)} className={labelClass} style={labelStyle} readOnly value={text} />
                    ) }

                    <div className={expandIconClass} style={expandIconStyle} onClick={()=>this.#OnClickFunc(true)}></div>                 

                    <div></div>
                    
                </div>

                <div ref={this.contentContainer}  className="accordion_content">
                    <Content />
                </div>
            </div>
        )
    }

    editingOn=()=>{
        if(this.props.labelAsInput){
            this.onEdit=true;
            this.label.current.classList.add('onEdit');
            this.label.current.removeAttribute("readonly");
            this.label.current.focus();
            this.label.current.setSelectionRange(0, this.label.value.length);
        }
    }

    editingOff=()=>{
        if(this.props.labelAsInput){
            this.onEdit=false;
            this.label.current.classList.remove('onEdit');
            this.label.current.setAttribute('readonly', 'true');
        }
    }

    #OnClickFunc=(byExpandIcon=false)=>{
        //контроль раскрытия
        if(!this.props.labelAsInput ||(this.props.labelAsInput && !this.onEdit)){
            if(!this.ctrlElement.current.checked){
                this.contentContainer.current.style.display='block';
                if((this.props.labelAsInput || byExpandIcon)&& !this.ctrlElement.current.checked){
                    this.ctrlElement.current.click();
                }
            }else{
                this.contentContainer.current.style.display='none'
                if((this.props.labelAsInput|| byExpandIcon)&& this.ctrlElement.current.checked){
                    this.ctrlElement.current.click();
                }
            }
        }

        if(!byExpandIcon){this.props.labelOnClick()}
    }
}
