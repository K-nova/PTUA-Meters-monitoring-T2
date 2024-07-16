import React from "react";
import { Routes, Route, Link } from "react-router-dom";

import { Header } from "./Header";
import { SlideShow } from "../../slideShow/js/slideShow";
import ChartsMain from "../../charts/js/chartsMain";
import NotFoundPage from "./NotFoundPage";

export default  class App extends React.Component{
    render(){
        return(
            <>
            <Header />
            <Routes>
                <Route path="/*" element={<SlideShow />}/>
                <Route path="/Charts/*" element={<ChartsMain />}/>
                <Route path="*" element={<NotFoundPage />}/>
            </Routes>
            </>
        )
    }
}