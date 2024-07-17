import React, {useEffect, useState} from "react"
import {useParams} from "react-router-dom"

import StorageCtrl from '../../main/js/sys/StorageCtrl'

import ChartOverviewButton from './ChartOverviewButton'
import NoDataPage from '../../main/js/sys/pageElements/NoDataPage'

import img_folder from '../data/Folder.png'
import img_lineChart from '../data/line-chart-icon.png'
import img_barChart from '../data/bar-chart-icon.png'
import img_pieChart from '../data/pie-chart-icon.png'
import img_doughnutChart from '../data/doughnut-chart-icon.png'

let ChartFolderOverview =()=>{

    let {folderId}=useParams()

    let [folderData, setFolderData]=useState(null)

    //определение данных для обзора папки
    let treeData
    useEffect(() => {
        treeData=StorageCtrl.getItem('treeData',{isJSON:true, storageTypeForcing:true, session:true});

        let getFolderDataById=(folderId,treeData)=>{
            let result;

            //находим соответствующие данные папки по id 
            for(let treeDataItem of treeData){
                if(treeDataItem.id==folderId){
                    result=treeDataItem;
                    break;
                }
                else{
                    if('folders' in treeDataItem && treeDataItem.folders.length>0){
                        result=getFolderDataById(folderId, treeDataItem.folders);
                    }
                    
                }
            }

            return result; 
        }

        setFolderData(getFolderDataById(folderId, treeData))

    },[folderId])

    //кнопки обзора папок
    let overviewsFolders=[]
    if(folderData!= undefined && 'folders' in folderData && folderData.folders.length>0){
        for(let innerFolder of folderData.folders){
            overviewsFolders.push(
                <ChartOverviewButton key={'folder_'+innerFolder.id} text={innerFolder.name} img={img_folder} link={`/Charts/Overview/${innerFolder.id}`}/>
            )
        }
    }

    //кнопки обзора счетчиков
    let overviewsMeters=[]
    if(folderData!= undefined && 'meters' in folderData && folderData.meters.length>0){
        for(let meter of folderData.meters){

            let img
        
        switch (meter.chartType) {
            case 'line':
                img=img_lineChart;
                break;
            case 'bar':
                img=img_barChart;
                break;    
            case "pie":
                img=img_pieChart;
                break;
            case "doughnut":
                img=img_doughnutChart;
                break;    
            default:
                img=img_lineChart;
                break;
        }
            overviewsMeters.push(
                <ChartOverviewButton key={'meter_'+meter.id} text={meter.name} img={img} link={`/Charts/Meter/${meter.id}`}/>
            )
        }
    }

    return (
        <div className="OverviewContainer">
            {(overviewsFolders.length===0 && overviewsMeters.length===0)?(
                    <div className="Overview-noContentContainer">
                        <NoDataPage  text="Нет данных"/>
                    </div>
                ):(<></>)}
            {overviewsFolders}
            {overviewsMeters}
        </div>
    )
    
}

export {ChartFolderOverview}