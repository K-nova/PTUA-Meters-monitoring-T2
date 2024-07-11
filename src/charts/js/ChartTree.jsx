import React from "react"

import Accordion from '../../main/js/sys/pageElements/Accordion'

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

        if(loading || treeData==undefined){
            return (<div>No data</div> )
        }
            
        return (<>
            {this.#createTree(this.state.treeData, '')}
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
    #createTree=(treeData, treeInputIdSuf='', paddingLeft=20)=>{
        let tree=[]


        for(let dataItem of treeData){
            let key=`tree-input${treeInputIdSuf+'-'+dataItem.id}`
            let nextTreeInputIdSuf =treeInputIdSuf+'-'+dataItem.id;
            let nextLevPaddingLeft=paddingLeft+10;

            tree.push(
                <div key={key} className= "tree-item" >
                    
                    {'folders' in dataItem || 'meters' in dataItem ?(
                        /*отрисоквка вкладки папки */
                        <Accordion   
                            id={key} 
                            text={dataItem.name} 
                            labelAsInput="true" 
                            labelClass='tree-title'
                            labelStyle={{paddingLeft: `${paddingLeft-5}px`}}
                            expandIconClass='tree-expandIcon'
                            expandIconStyle={{left:`${paddingLeft-15}px`}}
                            Content={dataItem.folders.length>0 ? (
                                ()=>{return this.#createTree(dataItem.folders, nextTreeInputIdSuf, nextLevPaddingLeft)}
                            ):(
                                dataItem.meters.length>0 ?(
                                    ()=>{return(this.#createTree(dataItem.meters, nextTreeInputIdSuf, nextLevPaddingLeft))}
                                ):(
                                    ()=>{return(<></>)}
                                )
                                
                            )}
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


