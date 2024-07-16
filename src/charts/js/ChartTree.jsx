import React from "react"
import {useNavigate, Link } from "react-router-dom"

import Accordion from '../../main/js/sys/pageElements/Accordion'
import TreeComponent from './TreeComponent'

import ServerDataExchange from '../../main/js/sys/ServerDataExchange/ServerDataExchange.js'

import '../css/style_tree.css'


export default  class ChartsTree extends React.Component{



    constructor(props){
        super(props)


        this.state={
            loading: false,
            treeData: null,
        }


    }

    componentDidMount(){
        //получаем данные для дерева
        this.#getData();
    
    }

    render (){
        let {treeData, loading} = this.state;
        let CreateTree=this.#CreateTree
        
        if(loading || treeData==undefined){
            return (<div>No data</div> )
        }
          
        return (<>
            <CreateTree treeData={treeData} />
            <div className="tree-placeholder" ></div>
        </>)
                
    }

    //получаем данные для дерева
    #getData= async(trainingMsg=false)=>{
        //запрос данных с сервера
        this.setState({loading: true})
         let treeData=await ServerDataExchange.getTreeStructureData();
        this.setState({treeData: treeData})
        this.setState({loading: false})

        
    }

    
    //алгоритм отрисовки дерева
    #CreateTree=({treeData, treeInputIdSuf='', paddingLeft=20})=>{
        let tree=[]
        
        for(let dataItem of treeData){
            let key=`tree-input${treeInputIdSuf+'-'+dataItem.id}`
            let nextTreeInputIdSuf =treeInputIdSuf+'-'+dataItem.id;
            let nextLevPaddingLeft=paddingLeft+10;
            
            let nextTreeData
            if(dataItem.folders && dataItem.folders.length>0){nextTreeData=dataItem.folders}
            else{
                if(dataItem.meters && dataItem.meters.length>0){nextTreeData=dataItem.meters}
            }


            let CreateTree=this.#CreateTree

            tree.push(
                
                <div key={key} className= "tree-item" >
                    
                    {'folders' in dataItem || 'meters' in dataItem ?(
                        /*отрисоквка вкладки папки */
                        <TreeComponent  
                            text={dataItem.name} 
                            labelStyle={{paddingLeft: `${paddingLeft-5}px`}}
                            expandIconStyle={{left:`${paddingLeft-15}px`}}
                            link={'Overview-'+dataItem.name}
                            Content={()=>{return(
                            <>
                                <CreateTree treeData={nextTreeData} treeInputIdSuf={nextTreeInputIdSuf} paddingLeft={nextLevPaddingLeft}/>
                            </>
                            )} }
                        />
                    ):(
                        /*отрисоквка вкладки счетчика */
                        <input 
                            value={dataItem.name}
                            className='tree-title'
                            readOnly
                            style={{
                                paddingLeft: `${paddingLeft-15}px`
                            }}
                        />
                    )}
                </div>
            )  
            
        }

        return tree
          
    }


    
}


