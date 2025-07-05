import Home from "../components/Home/home";
import About from "../components/About/about";
import Services from "../components/Services/services";
import Faq from "../components/Faq/faq";

import Footer from "../components/Footer/Footer";
import React from "react";

const MainPage=()=>{
    return(
        <div className="main_page">
            <Home/>
            <About/>
            <Services/>
            <Faq/>
            <Footer/>
        </div>
    );
};
export default MainPage;