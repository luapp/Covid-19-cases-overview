import React, {useState, useEffect} from "react"
import "./general-page.css"
import "bulma/css/bulma.css"
import search_button__ico from "./img/search.svg"
import Country_page from "./country_page"
import back_button_ico from "./img/back_arrow.svg"
import Loading from "./Loading_screen"



export function General_bar({country, cases, deaths, new_cases, new_deaths, active_cases, recovered}) {
    return(
        <div>
            <div className = "bar-box-main">
                <label className = "dynamic-label dynamic-label-country">{country}</label>
                <label className = "dynamic-label dynamic-label-newca">{new_cases}</label>
                <label className = "dynamic-label dynamic-label-newde">{new_deaths}</label>
                <label className = "dynamic-label dynamic-label-totalcases">{cases}</label>
                <label className = "dynamic-label dynamic-label-totaldeaths">{deaths}</label>
                <label className = "dynamic-label dynamic-label-activecases">{active_cases}</label>
                <label className = "dynamic-label dynamic-label-totalrecovered">{recovered}</label>

                <div className = "bar-box-label">
                    <label className = "label-cs">Country</label>
                    <div className = "separator"></div>
                    <label className = "label-cs">New cases</label>
                    <div className = "separator"></div>
                    <label className = "label-cs">New deaths</label>
                    <div className = "separator"></div>
                    <label className = "label-cs">Total cases</label>
                    <div className = "separator"></div>
                    <label className = "label-cs">Total deaths</label>
                    <div className = "separator"></div>
                    <label className = "label-cs">Active cases</label>
                    <div className = "separator"></div>
                    <label className = "label-cs">Total recovered</label>
                </div>
            </div>
            <div className = "general-bar-space"></div>
        </div>
    )
}

export function Worldwide_bar({new_cases, new_deaths, cases, deaths, active_cases, recovered}) {
    return(
        <div className = "masterdiv-100">
            <div className = "worldwide-box">
                <label className = "dynamic-label dynamic-label-country">Worldwide</label>
                <label className = "dynamic-label dynamic-label-newca">{new_cases}</label>
                <label className = "dynamic-label dynamic-label-newde">{new_deaths}</label>
                <label className = "dynamic-label dynamic-label-totalcases">{cases}</label>
                <label className = "dynamic-label dynamic-label-totaldeaths">{deaths}</label>
                <label className = "dynamic-label dynamic-label-activecases">{active_cases}</label>
                <label className = "dynamic-label dynamic-label-totalrecovered">{recovered}</label>
                <div className = "worldwide-box-label">
                    <label className = "label-cs">Country</label>
                    <div className = "separator"></div>
                    <label className = "label-cs">New cases</label>
                    <div className = "separator"></div>
                    <label className = "label-cs">New deaths</label>
                    <div className = "separator"></div>
                    <label className = "label-cs">Total cases</label>
                    <div className = "separator"></div>
                    <label className = "label-cs">Total deaths</label>
                    <div className = "separator"></div>
                    <label className = "label-cs">Active cases</label>
                    <div className = "separator"></div>
                    <label className = "label-cs">Total recovered</label>
                </div>
                
            </div>
        </div>
    )
}

export function Mobile__Worldwide_bar({new_cases, new_deaths, cases, deaths, active_cases, recovered}) {
    return(
        <div className = "masterdiv-100">
            <div className = "worldwide-box">
                {/*
                <label className = "dynamic-label dynamic-label-country">Worldwide</label>
                <label className = "dynamic-label dynamic-label-newca">{new_cases}</label>
                <label className = "dynamic-label dynamic-label-newde">props</label>
                <label className = "dynamic-label dynamic-label-totalcases">{cases}</label>
                <label className = "dynamic-label dynamic-label-totaldeaths">props</label>
                <label className = "dynamic-label dynamic-label-activecases">props</label>
                <label className = "dynamic-label dynamic-label-totalrecovered">props</label>
                */}
                <div className = "worldwide-box-label">
                    <label className = "worldwide-label-cs">Location : Worldwide</label>
                    <label className = "worldwide-label-cs">New cases : {new_cases}</label>
                    <label className = "worldwide-label-cs">New deaths : {new_deaths}</label>
                    <label className = "worldwide-label-cs">Total cases : {cases}</label>
                    <label className = "worldwide-label-cs">Total deaths : {deaths}</label>
                    <label className = "worldwide-label-cs">Active cases : {active_cases}</label>
                    <label className = "worldwide-label-cs">Total recovered : {recovered}</label>
                </div>
                
            </div>
        </div>
    )
}

export function Mobile__General_bar({country, new_cases, new_deaths, cases, deaths, active_cases, recovered}) {

    return(
        <div className = "general-master-div">
            <div className = "bar-box-main">
                {/*
                <label className = "dynamic-label dynamic-label-country">props</label>
                <label className = "dynamic-label dynamic-label-newca">props</label>
                <label className = "dynamic-label dynamic-label-newde">props</label>
                <label className = "dynamic-label dynamic-label-totalcases">props</label>
                <label className = "dynamic-label dynamic-label-totaldeaths">props</label>
                <label className = "dynamic-label dynamic-label-activecases">props</label>
                <label className = "dynamic-label dynamic-label-totalrecovered">props</label>
                */}
                <div className = "bar-box-label">
                    <label className = "label-cs">Country : {country}</label>
                    <label className = "label-cs">New cases : {new_cases}</label>
                    <label className = "label-cs">New deaths : {new_deaths}</label>
                    <label className = "label-cs">Total cases : {cases}</label>
                    <label className = "label-cs">Total deaths : {deaths}</label>
                    <label className = "label-cs">Active cases : {active_cases}</label>
                    <label className = "label-cs">Total recovered : {recovered}</label>
                </div>
            </div>
            <div className = "general-bar-space"></div>
        </div>
    )
}



function General_page() {       // page mean the display square (box)


    //api link
    const NovelCOVID_API__All_Countries = "https://corona.lmao.ninja/v2/countries?yesterday=false&sort"
    const NovelCOVID_API__All_Continents = "https://corona.lmao.ninja/v2/continents?yesterday=false&sort"
    const NovelCOVID_API__All_Countries__yesterday = "https://corona.lmao.ninja/v2/countries?yesterday=true&sort"
    const NovelCOVID_API__All_Continents__yesterday = "https://corona.lmao.ninja/v2/continents?yesterday=true&sort"

    const [All_Countries__Data, Set_All_Countries__Data] = useState([])
    const [All_Continents__Data, Set_All_Continents__Data] = useState([])
    const [All_Countries__Data__today, Set_All_Countries__Data__today] = useState([])
    const [All_Continents__Data__today, Set_All_Continents__Data__today] = useState([])
    const [Specific_Countries__Data, Set_Specific_Countries__Data] = useState([])
    const [Specific_Countries__Data__yesterday, Set_Specific_Countries__Data__yesterday] = useState([])
    const [Specific_Countries__Data__today, Set_Specific_Countries__Data__today] = useState([])
    const [loading, set_loading] = useState(true)                   //true >> loading is true
    const [loading_country_page, set_loading_country_page] = useState(true)
    const [loading_continents, set_loading_continents] = useState(true)
    const [loading_countries_today, set_loading_countries_today] = useState(true)
    const [loading_continents_today, set_loading_continents_today] = useState(true)
    const [loading_countries_yesterday, set_loading_countries_yesterday] = useState(true)
    const [loading_continents_yesterday, set_loading_continents_yesterday] = useState(true)
    const [search, set_search] = useState("")
    const [page_value, set_page_value] = useState("general_page")
    const [All_Countries__Data__yesterday, set_All_Countries__Data__yesterday] = useState([])
    const [All_Continents__Data__yesterday, set_All_Continents__Data__yesterday] = useState([])

    const NovelCOVID_API__Specific_Countries = "https://corona.lmao.ninja/v2/countries/" + search + "?yesterday=false&strict=false"
    const NovelCOVID_API__Specific_Countries__yesterday = "https://corona.lmao.ninja/v2/countries/" + search + "?yesterday=true&strict=false"

    const [data_date_value, set_data_date_value] = useState("today")
    const [today_color_value, set_today_color_value] = useState("orangered")
    const [yesterday_color_value, set_yesterday_color_value] = useState("black")


    const search_event = e => {
        set_search(e.target.value)
    }


    useEffect(() => {

        //general + today data
        fetch(NovelCOVID_API__All_Continents)
        .then(response_continents => response_continents.json())
        .then(Set_All_Continents__Data)
        .finally(() => set_loading_continents(false))

        fetch(NovelCOVID_API__All_Countries)
        .then(response_country => response_country.json())
        .then(Set_All_Countries__Data)
        .finally(() => set_loading(false))

        fetch(NovelCOVID_API__All_Continents)
        .then(response_continents => response_continents.json())
        .then(Set_All_Continents__Data__today)
        .finally(() => set_loading_continents_today(false))     //to modify loading validation !!!  URGENT 

        fetch(NovelCOVID_API__All_Countries)
        .then(response_country => response_country.json())
        .then(Set_All_Countries__Data__today)
        .finally(() => set_loading_countries_today(false))

        //yesterday data
        fetch(NovelCOVID_API__All_Continents__yesterday)
        .then(response_continents => response_continents.json())
        .then(set_All_Continents__Data__yesterday)
        .finally(() => set_loading_continents_yesterday(false))
        
        fetch(NovelCOVID_API__All_Countries__yesterday)
        .then(response_country => response_country.json())
        .then(set_All_Countries__Data__yesterday)
        .finally(() => set_loading_countries_yesterday(false))
    }, [])


    const fetch_specific_country = () => {
        fetch(NovelCOVID_API__Specific_Countries)
        .then(response_specific_countries => response_specific_countries.json())
        .then(Set_Specific_Countries__Data)
        .then(() => set_page_value("country_page"))
        .finally(() => set_loading_country_page(false))

        fetch(NovelCOVID_API__Specific_Countries)
        .then(response_specific_countries => response_specific_countries.json())
        .then(Set_Specific_Countries__Data__today)
        .then(() => set_page_value("country_page"))
        .finally(() => set_loading_country_page(false))

        fetch(NovelCOVID_API__Specific_Countries__yesterday)
        .then(response_specific_countries => response_specific_countries.json())
        .then(Set_Specific_Countries__Data__yesterday)
        .then(() => set_page_value("country_page"))
        .finally(() => set_loading_country_page(false))
    }

    // navigation
    const Searching = () => {
        if (search === "back") {
            set_page_value("general_page")
        }
        else {
            fetch_specific_country()
        }
    }
    const Back_to_home = () => {
        set_page_value("general_page")
    }

    const Submit_key = e => {
        if (e.key === "Enter") {
            Searching()
        }
    }

    // day selection
    const load_today = () => {
        Set_All_Countries__Data(All_Countries__Data__today)
        Set_All_Continents__Data(All_Continents__Data__today)
        Set_Specific_Countries__Data(Specific_Countries__Data__today)
        set_data_date_value("today")
        set_today_color_value("orangered")
        set_yesterday_color_value("black")
    }
    const load_yesterday = () => {
        Set_All_Countries__Data(All_Countries__Data__yesterday)
        Set_All_Continents__Data(All_Continents__Data__yesterday)
        Set_Specific_Countries__Data(Specific_Countries__Data__yesterday)
        set_data_date_value("yesterday")
        set_today_color_value("black")
        set_yesterday_color_value("orangered")
    }

    let screen_width = window.innerWidth


    // mobile version
    // still loading
    if (screen_width <= 768 && loading && loading_continents) {
        //mobile version    loading general page data
        return(
            <div className = "fullscreen-100">
                <Loading/>
            </div>
        )
    }

    // loading done [general page]
    if (screen_width <= 768 && !loading && !loading_continents && page_value === "general_page") {
        //mobile version    general page

        const North_America__cases = All_Continents__Data[0].cases
        const South_America__cases = All_Continents__Data[1].cases
        const Asia__cases = All_Continents__Data[2].cases
        const Europe__cases = All_Continents__Data[3].cases
        const Africa__cases = All_Continents__Data[4].cases
        const Oceania__cases = All_Continents__Data[5].cases
        const Worldwide__cases = North_America__cases + South_America__cases + Asia__cases + Europe__cases + Africa__cases + Oceania__cases

        const North_America__new_cases = All_Continents__Data[0].todayCases
        const South_America__new_cases = All_Continents__Data[1].todayCases
        const Asia__new_cases = All_Continents__Data[2].todayCases
        const Europe__new_cases = All_Continents__Data[3].todayCases
        const Africa__new_cases = All_Continents__Data[4].todayCases
        const Oceania__new_cases = All_Continents__Data[5].todayCases
        const Worldwide__new_cases = North_America__new_cases + South_America__new_cases + Asia__new_cases + Europe__new_cases + Africa__new_cases + Oceania__new_cases

        const North_America__new_deaths = All_Continents__Data[0].todayDeaths
        const South_America__new_deaths = All_Continents__Data[1].todayDeaths
        const Asia__new_deaths = All_Continents__Data[2].todayDeaths
        const Europe__new_deaths = All_Continents__Data[3].todayDeaths
        const Africa__new_deaths = All_Continents__Data[4].todayDeaths
        const Oceania__new_deaths = All_Continents__Data[5].todayDeaths
        const Worldwide__new_deaths = North_America__new_deaths + South_America__new_deaths + Asia__new_deaths + Europe__new_deaths + Africa__new_deaths + Oceania__new_deaths
        
        const North_America__deaths = All_Continents__Data[0].deaths
        const South_America__deaths = All_Continents__Data[1].deaths
        const Asia__deaths = All_Continents__Data[2].deaths
        const Europe__deaths = All_Continents__Data[3].deaths
        const Africa__deaths = All_Continents__Data[4].deaths
        const Oceania__deaths = All_Continents__Data[5].deaths
        const Worldwide__deaths = North_America__deaths + South_America__deaths + Asia__deaths + Europe__deaths + Africa__deaths + Oceania__deaths

        const North_America__active = All_Continents__Data[0].active
        const South_America__active = All_Continents__Data[1].active
        const Asia__active = All_Continents__Data[2].active
        const Europe__active = All_Continents__Data[3].active
        const Africa__active = All_Continents__Data[4].active
        const Oceania__active = All_Continents__Data[5].active
        const Worldwide__active = North_America__active + South_America__active + Asia__active + Europe__active + Africa__active + Oceania__active

        const North_America__recovered = All_Continents__Data[0].recovered
        const South_America__recovered = All_Continents__Data[1].recovered
        const Asia__recovered = All_Continents__Data[2].recovered
        const Europe__recovered = All_Continents__Data[3].recovered
        const Africa__recovered = All_Continents__Data[4].recovered
        const Oceania__recovered = All_Continents__Data[5].recovered
        const Worldwide__recovered = North_America__recovered + South_America__recovered + Asia__recovered + Europe__recovered + Africa__recovered + Oceania__recovered

        return(
            <div className = "masterdiv-100">
                <div className = "master-box">
                    <div className = "form">
                        <input onKeyPress = {Submit_key} placeholder = "   Search..." className = "search-input" value = {search} onChange = {search_event}></input>
                        <button type = "button" className = "search-button button" onClick = {Searching}><img className = "search-button-ico" src = {search_button__ico}></img></button>
                    </div>
                    <div className = "middle-div">
                        <Mobile__Worldwide_bar cases = {Worldwide__cases} new_cases = {Worldwide__new_cases} new_deaths = {Worldwide__new_deaths} deaths = {Worldwide__deaths} active_cases = {Worldwide__active} recovered = {Worldwide__recovered}/>
                    </div>
    
                    <div className = "general-bar-div">
                        {All_Countries__Data.map(Countries__Data_Map => (
                            <Mobile__General_bar country = {Countries__Data_Map.country} cases = {Countries__Data_Map.cases} new_cases = {Countries__Data_Map.todayCases} new_deaths = {Countries__Data_Map.todayDeaths} deaths = {Countries__Data_Map.deaths} active_cases = {Countries__Data_Map.active} recovered = {Countries__Data_Map.recovered}/>
                        ))}
                    </div>
                </div>
                <div className = "day-box">
                    <div className = "live-label-box">
                        <label style = {{color: today_color_value}} onClick = {load_today} className = "live-label">Today</label>
                    </div>
                    <div className = "yesterday-label-box">
                        <label style = {{color: yesterday_color_value}} onClick = {load_yesterday} className = "yesterday-label">Yesterday</label>
                    </div>
                </div>
            </div>
        )
    }

    if (screen_width <= 768 && !loading_country_page && page_value === "country_page") {
        // country page

        return(
            <div className = "masterdiv-100">
                <div className = "master-box-country">
                    <div className = "form">
                        <button type = "button" className = "back-button" onClick = {Back_to_home}><img className = "back-arrow" src = {back_button_ico}></img></button>
                        <input onKeyPress = {Submit_key} placeholder = "   Search..." className = "search-input-country" value = {search} onChange = {search_event}></input>
                        <button type = "button" className = "search-button-country button" onClick = {Searching}><img className = "search-button-ico" src = {search_button__ico}></img></button>   
                    </div>
                    <Country_page country = {Specific_Countries__Data.country} cases = {Specific_Countries__Data.cases} new_cases = {Specific_Countries__Data.todayCases} new_deaths = {Specific_Countries__Data.todayDeaths} deaths = {Specific_Countries__Data.deaths} active_cases = {Specific_Countries__Data.active} recovered = {Specific_Countries__Data.recovered} new_recovered = {Specific_Countries__Data.todayRecovered} critical_cases = {Specific_Countries__Data.critical} tests = {Specific_Countries__Data.tests} date = {data_date_value}/>
                </div>
                <div className = "day-box">
                    <div className = "live-label-box">
                        <label style = {{color: today_color_value}} onClick = {load_today} className = "live-label">Today</label>
                    </div>
                    <div className = "yesterday-label-box">
                        <label style = {{color: yesterday_color_value}} onClick = {load_yesterday} className = "yesterday-label">Yesterday</label>
                    </div>
                </div>
            </div>
        )
    }





    // desktop & tablet version
    // still loading
    if (screen_width > 768 && loading && loading_continents) {
        return(
            <div className = "fullscreen-100">
                <Loading/>
            </div>
        )
    }

    // loading done ! [general page]
    if (screen_width > 768 && !loading && !loading_continents && page_value === "general_page") {

        const North_America__cases = All_Continents__Data[0].cases
        const South_America__cases = All_Continents__Data[1].cases
        const Asia__cases = All_Continents__Data[2].cases
        const Europe__cases = All_Continents__Data[3].cases
        const Africa__cases = All_Continents__Data[4].cases
        const Oceania__cases = All_Continents__Data[5].cases
        const Worldwide__cases = North_America__cases + South_America__cases + Asia__cases + Europe__cases + Africa__cases + Oceania__cases
        
        const North_America__new_cases = All_Continents__Data[0].todayCases
        const South_America__new_cases = All_Continents__Data[1].todayCases
        const Asia__new_cases = All_Continents__Data[2].todayCases
        const Europe__new_cases = All_Continents__Data[3].todayCases
        const Africa__new_cases = All_Continents__Data[4].todayCases
        const Oceania__new_cases = All_Continents__Data[5].todayCases
        const Worldwide__new_cases = North_America__new_cases + South_America__new_cases + Asia__new_cases + Europe__new_cases + Africa__new_cases + Oceania__new_cases

        const North_America__new_deaths = All_Continents__Data[0].todayDeaths
        const South_America__new_deaths = All_Continents__Data[1].todayDeaths
        const Asia__new_deaths = All_Continents__Data[2].todayDeaths
        const Europe__new_deaths = All_Continents__Data[3].todayDeaths
        const Africa__new_deaths = All_Continents__Data[4].todayDeaths
        const Oceania__new_deaths = All_Continents__Data[5].todayDeaths
        const Worldwide__new_deaths = North_America__new_deaths + South_America__new_deaths + Asia__new_deaths + Europe__new_deaths + Africa__new_deaths + Oceania__new_deaths
        
        const North_America__deaths = All_Continents__Data[0].deaths
        const South_America__deaths = All_Continents__Data[1].deaths
        const Asia__deaths = All_Continents__Data[2].deaths
        const Europe__deaths = All_Continents__Data[3].deaths
        const Africa__deaths = All_Continents__Data[4].deaths
        const Oceania__deaths = All_Continents__Data[5].deaths
        const Worldwide__deaths = North_America__deaths + South_America__deaths + Asia__deaths + Europe__deaths + Africa__deaths + Oceania__deaths

        const North_America__active = All_Continents__Data[0].active
        const South_America__active = All_Continents__Data[1].active
        const Asia__active = All_Continents__Data[2].active
        const Europe__active = All_Continents__Data[3].active
        const Africa__active = All_Continents__Data[4].active
        const Oceania__active = All_Continents__Data[5].active
        const Worldwide__active = North_America__active + South_America__active + Asia__active + Europe__active + Africa__active + Oceania__active

        const North_America__recovered = All_Continents__Data[0].recovered
        const South_America__recovered = All_Continents__Data[1].recovered
        const Asia__recovered = All_Continents__Data[2].recovered
        const Europe__recovered = All_Continents__Data[3].recovered
        const Africa__recovered = All_Continents__Data[4].recovered
        const Oceania__recovered = All_Continents__Data[5].recovered
        const Worldwide__recovered = North_America__recovered + South_America__recovered + Asia__recovered + Europe__recovered + Africa__recovered + Oceania__recovered



        return(
            <div>
                <div className = "master-box">
                    <div className = "form">
                        <input onKeyPress = {Submit_key} placeholder = "   Search..." className = "search-input" value = {search} onChange = {search_event}></input>
                        <button type = "button" className = "search-button button" onClick = {Searching}><img className = "search-button-ico" src = {search_button__ico}></img></button>
                    </div>
                    <div className = "middle-div">
                        <Worldwide_bar cases = {Worldwide__cases} new_cases = {Worldwide__new_cases} new_deaths = {Worldwide__new_deaths} deaths = {Worldwide__deaths} active_cases = {Worldwide__active} recovered = {Worldwide__recovered}/>
                    </div>
    
                    <div className = "general-bar-div">
                        {All_Countries__Data.map(Countries__Data_Map => (
                            <General_bar country = {Countries__Data_Map.country} cases = {Countries__Data_Map.cases} new_cases = {Countries__Data_Map.todayCases} new_deaths = {Countries__Data_Map.todayDeaths} deaths = {Countries__Data_Map.deaths} active_cases = {Countries__Data_Map.active} recovered = {Countries__Data_Map.recovered}/>
                        ))}
                    </div>
                </div>

                <div className = "day-box">
                    <div className = "live-label-box">
                        <label style = {{color: today_color_value}} onClick = {load_today} className = "live-label">Today</label>
                    </div>
                    <div className = "yesterday-label-box">
                        <label style = {{color: yesterday_color_value}} onClick = {load_yesterday} className = "yesterday-label">Yesterday</label>
                    </div>
                </div>
            </div>
        )
    }

    if (screen_width > 768 && !loading_country_page && page_value === "country_page") {
        // country page

        return(
            <div className = "masterdiv-100">
                <div className = "master-box-country">
                    <div className = "form">
                        <button type = "button" className = "back-button" onClick = {Back_to_home}><img className = "back-arrow" src = {back_button_ico}></img></button>
                        <input onKeyPress = {Submit_key} placeholder = "   Search..." className = "search-input-country" value = {search} onChange = {search_event}></input>
                        <button type = "button" className = "search-button-country button" onClick = {Searching}><img className = "search-button-ico" src = {search_button__ico}></img></button>   
                    </div>
                    <Country_page country = {Specific_Countries__Data.country} cases = {Specific_Countries__Data.cases} new_cases = {Specific_Countries__Data.todayCases} new_deaths = {Specific_Countries__Data.todayDeaths} deaths = {Specific_Countries__Data.deaths} active_cases = {Specific_Countries__Data.active} recovered = {Specific_Countries__Data.recovered} new_recovered = {Specific_Countries__Data.todayRecovered} critical_cases = {Specific_Countries__Data.critical} tests = {Specific_Countries__Data.tests} date = {data_date_value}/>
                </div>
                <div className = "day-box">
                    <div className = "live-label-box">
                        <label style = {{color: today_color_value}} onClick = {load_today} className = "live-label">Today</label>
                    </div>
                    <div className = "yesterday-label-box">
                        <label style = {{color: yesterday_color_value}} onClick = {load_yesterday} className = "yesterday-label">Yesterday</label>
                    </div>
                </div>
            </div>
        )
    }
    
    else {
        return(     // move to loading component 
            <div className = "fullscreen-100">
                <Loading/>
            </div>
        )
    }




}



export default General_page