import React from "react"
import "./Worldwide.css"
import Cases from "./widgets_components/Cases"
import New_cases from "./widgets_components/New_cases"
import Deaths from "./widgets_components/Deaths"
import New_deaths from "./widgets_components/New_deaths"
import Active from "./widgets_components/Active"
import Recovered from "./widgets_components/Recovered"
import New_recovered from "./widgets_components/New_recovered"
import Tested from "./widgets_components/Tested"



function Worldwide ({
    Worldwide_active__today,
    Worldwide_cases__today,
    Worldwide_deaths__today,
    Worldwide_recovered__today,
    Worldwide_todayCases__today,
    Worldwide_todayDeaths__today
}) {

    return(
        <div className = "worldwide-background">
            <div className = "worldwide-title-div">
                <h1 className = "worldwide-title">Worldwide</h1>
                <div className = "date-bar">
                    <div className = "date-bar-flex">
                        <h2 className = "today">Today</h2>
                        <h2 className = "yesterday">Yesterday</h2>
                    </div>
                </div>
            </div>
            <div className = "widgets">
                <New_cases Worldwide_todayCases__today = {Worldwide_todayCases__today}/>
                <Cases Worldwide_cases__today = {Worldwide_cases__today}/>
                <New_deaths Worldwide_todayDeaths__today = {Worldwide_todayDeaths__today}/>
                <Deaths Worldwide_deaths__today = {Worldwide_deaths__today}/>
                <Active Worldwide_active__today = {Worldwide_active__today}/>
                <New_recovered/>
                <Recovered Worldwide_recovered__today = {Worldwide_recovered__today}/>
                <Tested/>
            </div>
        </div>
    )
}


export default Worldwide