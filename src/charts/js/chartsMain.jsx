import React from "react"
import { Routes, Route} from "react-router-dom";

import '../css/charts-main.css'

import ChartsTree from '../js/ChartTree'
import {ChartFolderOverview} from './ChartFolderOverview'
import Chart from './Chart/Chart'
import NotFoundPage from "../../main/js/NotFoundPage";


let ChartsMain = ()=>{

    return(
        <div className="container">
            {/*область дерева */}
            <div className="split left">
                <ChartsTree />
                
            </div>

            {/*ресайзер */}
            <div className="resizer">

            </div>

            {/*область содержания */}
            <div className="split right">
                <div id="Workspace">

                    <div className="SubHeader">
                        <button className="Subheader-button" >Вверх</button>
                        <h1 className="subheader_h1">subheader_h1</h1>
                    </div>

                    <Routes>
                        <Route path="Overview/:folderId" element={<ChartFolderOverview />}/>
                        <Route path="Meter/:meterId" element={<Chart />}/>
                        <Route path="*" element={<NotFoundPage />}/>
                    </Routes>
                </div>
            </div>

        </div>
    )
}

export default  ChartsMain

  
