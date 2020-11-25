import React from "react"
import "./country-page.css"
import "bulma/css/bulma.css"



function Country_page({country, cases, new_cases, deaths, new_deaths, active_cases, recovered, new_recovered, critical_cases, tests, date}) {
    return(
        <div className = "master-country-box">
            <div className = "country-div">
                <label className = "country-label">In {country} {date}:</label>
            </div>
            <div className = "columns is-mobile master-columns">
                <div className = "column is-half cl-left">
                    <div className = "left-label-div">
                        <label>New cases: {new_cases}</label>
                        <label>Cases: {cases}</label>
                        <label>Active cases: {active_cases}</label>
                        <label>Recovered: {recovered}</label>
                        <label>Tests: {tests}</label>
                    </div>
                </div>
                <div className = "column is-half cl-right">
                    <div className = "right-label-div">
                        <label>New deaths: {new_deaths}</label>
                        <label>Deaths: {deaths}</label>
                        <label>Critical cases: {critical_cases}</label>
                        <label>New recovered: {new_recovered}</label>
                        <label>This is {date} data</label>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Country_page