import React from "react"

export default class ChartsMain extends React.Component{
    render (){
        return(
            <div className="container">
                {/*область дерева */}
                <div className="split left">

                </div>

                {/*ресайзер */}
                <div class="resizer">

                </div>

                {/*область содержания */}
                <div className="split right">
                    <div id="Workspace">

                        <div className="SubHeader">
                            <button className="Subheader-button" >Вверх</button>
                            <h1 className="subheader_h1">subheader_h1</h1>
                        </div>
                        
                    </div>
                </div>

            </div>
        )
    }
}