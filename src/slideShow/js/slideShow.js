import React from "react"

import '../css/slideShow.css'

import SlideShowItem from './slideShowItem.js'
import {StorageCtrl} from "../../main/js/sys/StorageCtrl.js";
import ChartsMain from '../../charts/js/chartsMain.js'

import img1 from '../data/Siemens_VAI_03_fertig_Retouch_270514.jpg'
import img2 from '../data/Imagecampaign_Digitalization_PT_normal_RGB_casual_man.jpg'
import img3 from '../data/317-GRZ-IT 2014_0284-H_ret1.jpg'
import img4 from '../data/SiemensVAI_Innovation_02.jpg'
import img5 from '../data/Imagecampaign_Digitalization_PT_normal_RGB_worker_woman.jpg'


export class SlideShow extends React.Component{

    #text1=`Данный проект разработан как прототип веб-интерфейса под возможный проект АСК(Т)ОЕ:
    автоматизированной системы коммерческого (технического) учета электроэнергии.
    Общая тема прототипа: возможность анализа потребления электроэнергии с помощью трендов`
    
    #text2=`В прототипе симулируется взаимодействие с бэкэндом. Т.е. все данные которые видны в трендах явлются сгенерированы псевдослучайным образом самим веб-интерфейсом`

    #text3=`Изменения интерфейса под пользователя возможны (фон тренда, вид трендов и пр.). Изменения интерфейса хранятся в локальном хранилище браузера до очистки локальных переменных браузера`

    #text4=`Как показал опыт, разработка своего веб-интерфейсва ГОРАЗДО БОЛЕЕ ТРУДОЕМКАЯ процедура чем разработка интерфейса СКАДА-систем. Обратной стороной является почти неограниченые возможности в реализации задумок
    Языка програмирования: React.js
    Задействовано более 6 библиотек/плагинов. Самя большая из которых chart.js - библиотека отрисовки графиков на веб-странице. Для расширения ее функционала также был создан свой собтвенный плагин
    С целью сокращения времени на разработка данного прототипа пришлось отказатся от некоторого функционала, который задумывался (драг-энд-дроп в окне навигации, таблица отсчетов и пр.)`

    #passedSteps=0
    #stepsFinished=false

    constructor(props){
        super(props)
        //состояния
        this.state={
            itemActive: [true, false, false, false, false],
            startButtonActive:StorageCtrl.getItem('slideShow_passedSteps',{isJSON:false})
        }

    }

    render (){
        return(
            <div className="slideshow">
               <SlideShowItem active={this.state.itemActive[0]}
               topic="Общее описание" 
               mainText={this.#text1}
               img={img1}
               nextButtonOnClickFunc={this.passedStepsIteration}
               startButtonActive={this.state.startButtonActive}
               startButtonOnClickFunc={this.startChartsMain}
               />

                <SlideShowItem active={this.state.itemActive[1]}
                topic="Взаимодействие с бэкэндом" 
                mainText={this.#text2}
                img={img2}
                nextButtonOnClickFunc={this.passedStepsIteration}
                startButtonActive={this.state.startButtonActive}
                startButtonOnClickFunc={this.startChartsMain}
                />

                <SlideShowItem active={this.state.itemActive[2]}
                topic="Сохранение изменений" 
                mainText={this.#text3}
                img={img3}
                nextButtonOnClickFunc={this.passedStepsIteration}
                startButtonActive={this.state.startButtonActive}
                startButtonOnClickFunc={this.startChartsMain}
                />

                <SlideShowItem active={this.state.itemActive[3]}
                topic="Разработка" 
                mainText={this.#text4}
                img={img4}
                nextButtonOnClickFunc={this.passedStepsIteration}
                startButtonActive={this.state.startButtonActive}
                startButtonOnClickFunc={this.startChartsMain}
                />

                <SlideShowItem active={this.state.itemActive[4]}
                topic="Нажмите далее, чтобы перейти непосредственно к интерфейсу" 
                mainText=""
                img={img5}
                nextButtonOnClickFunc={this.startChartsMain}
                />
            </div>
        )
    }


    passedStepsIteration=()=>{
        this.#passedSteps++
        let newItemActive=new Array(5).fill(false)
        newItemActive[this.#passedSteps]=true
        this.setState({itemActive: newItemActive})
        this.stepsFinishedCtrl()
    }

    stepsFinishedCtrl=()=>{
        if(this.#passedSteps>=4){
            this.#stepsFinished=true
            StorageCtrl.setItem('slideShow_passedSteps', this.#stepsFinished, {isJSON:false});    
        }

        if(this.#stepsFinished){ 
            this.setState({startButtonActive: this.#stepsFinished})
        }
    }

    startChartsMain=()=>{
       this.props.setMainFrameContent(ChartsMain)
    }
}