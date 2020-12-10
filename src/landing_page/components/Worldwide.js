import React, {useState} from "react"
import "./Worldwide.css"
import Cases from "./widgets_components/Cases"
import New_cases from "./widgets_components/New_cases"
import Deaths from "./widgets_components/Deaths"
import New_deaths from "./widgets_components/New_deaths"
import Active from "./widgets_components/Active"
import Recovered from "./widgets_components/Recovered"
import New_recovered from "./widgets_components/New_recovered"
import Tested from "./widgets_components/Tested"
import search_icon from "../../img/search.svg"



function Worldwide ({
    Worldwide_active__today,
    Worldwide_cases__today,
    Worldwide_deaths__today,
    Worldwide_recovered__today,
    Worldwide_todayCases__today,
    Worldwide_todayDeaths__today,
    Worldwide_todayRecovered__today,
    Worldwide_tests__today,
    set_Page_value,
    set_Specific_country_data,
    set_Specific_country_data__yesterday,
    date,
    set_date,
    Worldwide_active__yesterday,
    Worldwide_cases__yesterday,
    Worldwide_deaths__yesterday,
    Worldwide_recovered__yesterday,
    Worldwide_todayCases__yesterday,
    Worldwide_todayDeaths__yesterday,
    Worldwide_todayRecovered__yesterday,
    Worldwide_tests__yesterday,
    today_date_selection,
    set_today_date_selection,
    yesterday_date_selection,
    set_yesterday_date_selection
}) {

    const [search, set_search] = useState("")
    
    const SpecificAPI = "https://corona.lmao.ninja/v2/countries/" + search + "?yesterday=false&strict=false&query"
    const SpecificAPI_yesterday = "https://corona.lmao.ninja/v2/countries/" + search + "?yesterday=true&strict=false&query"

    const search_event = e => {
        set_search(e.target.value)
    }

    const set_today = () => {
        set_date("today")
        set_today_date_selection("orangered")
        set_yesterday_date_selection("white")
    }
    const set_yesterday = () => {
        set_date("yesterday")
        set_today_date_selection("white")
        set_yesterday_date_selection("orangered")
    }

    const Fetch_specific = async () => {
        if (search !== "") {
            const api_response = await fetch(SpecificAPI)
            const api_response_yesterday = await fetch(SpecificAPI_yesterday)
            const json_yesterday = await api_response_yesterday.json()
            const json = await api_response.json()
            set_Specific_country_data(json)
            set_Specific_country_data__yesterday(json_yesterday)
            set_Page_value("country")
        }
        else {
            window.alert("Your search bar is empty !")
        }
    }

    const key_event = e => {
        if (e.key === "Enter") {
            Fetch_specific()
        }
    }

    const widgets = () => {
        if (date === "today") {
            return(
                <div className = "widgets">
                    <New_cases Worldwide_todayCases__today = {Worldwide_todayCases__today}/>
                    <Cases Worldwide_cases__today = {Worldwide_cases__today}/>
                    <New_deaths Worldwide_todayDeaths__today = {Worldwide_todayDeaths__today}/>
                    <Deaths Worldwide_deaths__today = {Worldwide_deaths__today}/>
                    <Active Worldwide_active__today = {Worldwide_active__today}/>
                    <New_recovered Worldwide_todayRecovered__today = {Worldwide_todayRecovered__today}/>
                    <Recovered Worldwide_recovered__today = {Worldwide_recovered__today}/>
                    <Tested Worldwide_tests__today = {Worldwide_tests__today}/>
                </div>
            )
        }
        if (date === "yesterday") {
            return(
                <div className = "widgets">
                    <New_cases Worldwide_todayCases__today = {Worldwide_todayCases__yesterday}/>
                    <Cases Worldwide_cases__today = {Worldwide_cases__yesterday}/>
                    <New_deaths Worldwide_todayDeaths__today = {Worldwide_todayDeaths__yesterday}/>
                    <Deaths Worldwide_deaths__today = {Worldwide_deaths__yesterday}/>
                    <Active Worldwide_active__today = {Worldwide_active__yesterday}/>
                    <New_recovered Worldwide_todayRecovered__today = {Worldwide_todayRecovered__yesterday}/>
                    <Recovered Worldwide_recovered__today = {Worldwide_recovered__yesterday}/>
                    <Tested Worldwide_tests__today = {Worldwide_tests__yesterday}/>
                </div>
            )
        }
    }


    return(
        <div className = "worldwide-background">
            <div className = "header">
                <div className = "header-flex">
                    <h1 className = "worldwide-title">Worldwide</h1>
                    <div className = "search-flex">
                        <input className = "search-input" placeholder = "  Search a country..." onChange = {search_event} value = {search} onKeyPress = {key_event}></input>
                        <img className = "search-icon" src = {search_icon} onClick = {Fetch_specific}></img>
                    </div>
                    <div className = "data-date-flex">
                        <div className = "date-box">
                            <div className = "today-box">
                                <h2 className = "today-text" onClick = {set_today} style = {{color: today_date_selection}}>Today</h2>
                            </div>
                            <div className = "yesterday-box">
                                <h2 className = "yesterday-text" onClick = {set_yesterday} style = {{color: yesterday_date_selection}}>Yesterday</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {widgets()}
        </div>
    )
}


export default Worldwide