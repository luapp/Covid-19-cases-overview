import React, {useState} from "react"
import Cases from "./country_page_widgets/Cases"
import New_cases from "./country_page_widgets/New_cases"
import Deaths from "./country_page_widgets/Deaths"
import New_deaths from "./country_page_widgets/New_deaths"
import Active from "./country_page_widgets/Active"
import Recovered from "./country_page_widgets/Recovered"
import New_recovered from "./country_page_widgets/New_recovered"
import Tested from "./country_page_widgets/Tested"
import "./Country.css"
import search_icon from "../../../img/search.svg"
import back_arrow from "../../../img/back_arrow.svg"



function Country ({
    set_Page_value,
    Specific_country_data, 
    set_Specific_country_data, 
    date, 
    set_date,
    set_Specific_country_data__yesterday,
    Specific_country_data__yesterday,
    today_date_selection,
    set_today_date_selection,
    yesterday_date_selection,
    set_yesterday_date_selection
}) {

    const [search, set_search] = useState("")
    
    const SpecificAPI = "https://corona.lmao.ninja/v2/countries/" + search + "?yesterday=false&strict=false&query"
    const SpecificAPI__yesterday = "https://corona.lmao.ninja/v2/countries/" + search + "?yesterday=true&strict=false&query"

    const search_event = e => {
        set_search(e.target.value)
    }

    const Fetch_specific = async () => {
        if (search !== ""){
            const api_response = await fetch(SpecificAPI)
            const api_response_yesterday = await fetch(SpecificAPI__yesterday)
            const json = await api_response.json()
            const json_yesterday = await api_response_yesterday.json()
            set_Specific_country_data(json)
            set_Specific_country_data__yesterday(json_yesterday)    
        }
        else {
            window.alert("Search box is empty !")
        }
    }


    const key_event = e => {
        if (e.key === "Enter") {
            Fetch_specific()
        }
    }

    const back_to_home = () => {
        set_Page_value("home")
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

    const country_date_selection = () => {
        if (date === "today") {
            return(
                <div className = "widgets">
                    <New_cases new_cases = {Specific_country_data.todayCases}/>
                    <Cases cases = {Specific_country_data.cases}/>
                    <New_deaths new_deaths = {Specific_country_data.todayDeaths}/>
                    <Deaths deaths = {Specific_country_data.deaths}/>
                    <Active active = {Specific_country_data.active}/>
                    <New_recovered new_recovered = {Specific_country_data.todayRecovered}/>
                    <Recovered recovered = {Specific_country_data.recovered}/>
                    <Tested tests = {Specific_country_data.tests}/>
                </div>
            )
        }
        if (date === "yesterday") {
            return(
                <div className = "widgets">
                    <New_cases new_cases = {Specific_country_data__yesterday.todayCases}/>
                    <Cases cases = {Specific_country_data__yesterday.cases}/>
                    <New_deaths new_deaths = {Specific_country_data__yesterday.todayDeaths}/>
                    <Deaths deaths = {Specific_country_data__yesterday.deaths}/>
                    <Active active = {Specific_country_data__yesterday.active}/>
                    <New_recovered new_recovered = {Specific_country_data__yesterday.todayRecovered}/>
                    <Recovered recovered = {Specific_country_data__yesterday.recovered}/>
                    <Tested tests = {Specific_country_data__yesterday.tests}/>
                </div>
            )
        }
    }

    return(
        <div className = "worldwide-background">
            <div className = "header">
                <div className = "header-flex">
                    <div className = "arrow-flex">
                        <img className = "back-arrow" src = {back_arrow} onClick = {back_to_home}></img>
                    </div>
                    <h1 className = "country-name">{Specific_country_data.country}</h1>
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
            {country_date_selection()}
        </div>

    )
}


export default Country