import React, {useEffect, useState} from "react"
import {useParams} from "react-router-dom"

import StorageCtrl from '../../../main/js/sys/StorageCtrl'

let Chart =()=>{
    let {meterId}=useParams()

    let [meterData, setMeterData]=useState(null)

    //определение данных для графика
    let treeData
    useEffect(() => {
        treeData=StorageCtrl.getItem('treeData',{isJSON:true, storageTypeForcing:true, session:true});

        let getMeterDataById=(meterId,treeData)=>{
            let result;

            //---находим соответствующие данные графика по id 
            let forbreak=false

            //сканируем папки
            for(let treeDataItem of treeData){

                //сканируем список счетчиков в папке
                if('meters' in treeDataItem && treeDataItem.meters.length>0){
                    for(let meter of treeDataItem.meters){
                        if(meter.id==meterId){
                            result=meter;
                            forbreak=true
                            break;
                        }
                    }
                }
                if(forbreak){break;}

                //сканируем подпапки
                if('folders' in treeDataItem && treeDataItem.folders.length>0){
                    if('folders' in treeDataItem && treeDataItem.folders.length>0){
                        result=getMeterDataById(meterId, treeDataItem.folders);
                    }
                    
                }
                
            }

            return result; 
        }

        setMeterData(getMeterDataById(meterId, treeData))

    },[meterId])

    let text=''
    if(meterData!=null){text=meterData.name}
    
    return(
        <p>{text}</p>
    )
}

export default Chart