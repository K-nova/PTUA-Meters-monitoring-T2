import React from "react"
import { Routes, Route} from "react-router-dom";

import '../css/slideShow.css'

import SlideShowItem from './slideShowItem'
import StorageCtrl from "../../main/js/sys/StorageCtrl.js";

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
    Языка програмирования: React.js+React Router 6
    Задействовано более 6 библиотек/плагинов. Самя большая из которых chart.js - библиотека отрисовки графиков на веб-странице. Для расширения ее функционала также был создан свой собтвенный плагин
    С целью сокращения времени на разработка данного прототипа пришлось отказатся от некоторого функционала, который задумывался (драг-энд-дроп в окне навигации, таблица отсчетов и пр.)`

    constructor(props){
        super(props)
        //состояния
        this.state={
            startButtonActive:StorageCtrl.getItem('slideShow_passedSteps',{isJSON:false})
        }

    }

    render (){
        return(
            <div className="slideshow">
                <Routes>
                    <Route path="intro1" element={<SlideShowItem 
                        topic="Общее описание" 
                        mainText={this.#text1}
                        img={img1}
                        nextButtonLink="/intro2"
                        startButtonActive={this.state.startButtonActive}
                        startButtonLink="/Charts"
                        />}
                    />

                    <Route path="intro2" element={<SlideShowItem 
                        topic="Взаимодействие с бэкэндом" 
                        mainText={this.#text2}
                        img={img2}
                        nextButtonLink="/intro3"
                        startButtonActive={this.state.startButtonActive}
                        startButtonLink="/Charts"
                        />}
                    />

                    <Route path="intro3" element={<SlideShowItem 
                        topic="Сохранение изменений" 
                        mainText={this.#text3}
                        img={img3}
                        nextButtonLink="/intro4"
                        startButtonActive={this.state.startButtonActive}
                        startButtonLink="/Charts"
                        />}
                    />

                    <Route path="intro4" element={<SlideShowItem 
                        topic="Разработка" 
                        mainText={this.#text4}
                        img={img4}
                        nextButtonLink="/intro5"
                        startButtonActive={this.state.startButtonActive}
                        startButtonLink="/Charts"
                        />}
                    />

                    <Route path="intro5" element={<SlideShowItem 
                        topic="Нажмите далее, чтобы перейти непосредственно к интерфейсу" 
                        mainText=""
                        img={img5}
                        nextButtonLink="/Charts"
                        />}
                    />

                </Routes>
  
            </div>
        )
    }


}