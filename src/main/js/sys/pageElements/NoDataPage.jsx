import React from "react"

import img_noContent from '../../../data/NoContent.png'

let NoDataPage =({show=true, text='нет данных'})=>{
    return(
        <div style={show?{display:'block'}:{display:'none'}}>
            <img src={img_noContent} alt="no content image" style={{width:'100%'}}/>
            <h1 style={{textAlign:'center'}}>{text}</h1>
        </div>
    )
}

export default NoDataPage