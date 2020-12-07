import React from "react"
import "./General_country_page.css"
import Cases from "../widgets_components/small/Cases"
import New_cases from "../widgets_components/small/New_cases"
import Deaths from "../widgets_components/small/Deaths"
import New_deaths from "../widgets_components/small/New_deaths"
import Active from "../widgets_components/small/Active"
import Recovered from "../widgets_components/small/Recovered"
import New_recovered from "../widgets_components/small/New_recovered"
import Tested from "../widgets_components/small/Tested"



function General_country_page ({country, active, new_cases, cases, new_deaths, deaths, recovered}) {
    return(
        <div className = "general-country-page">
            <div className = "general-country-name-box">
                <h1 className = "general-country-name">{country}</h1>
            </div>
            <div className = "general-country-widgets">
                <New_cases new_cases = {new_cases}/>
                <Cases cases = {cases}/>
                <New_deaths new_deaths = {new_deaths}/>
                <Deaths deaths = {deaths}/>
                <Active active = {active}/>
                <New_recovered/>
                <Recovered recovered = {recovered}/>
                <Tested/>
            </div>
        </div>
    )
}


export default General_country_page