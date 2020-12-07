import React from "react"
import "./Home.css"
import Worldwide from "./components/Worldwide"
import General_country_page from "./components/country_components/General_country_page"


function Home ({
    Worldwide_active__today,
    Worldwide_cases__today,
    Worldwide_deaths__today,
    Worldwide_recovered__today,
    Worldwide_todayCases__today,
    Worldwide_todayDeaths__today,
    All_Countries__today
}) {
    console.log(All_Countries__today)
    return(
        <div className = "background">
            <div className = "title-box">
                <h1 className = "title">Covid-19 cases overview</h1>
            </div>
            <div className = "worldwide">
                <Worldwide
                Worldwide_active__today = {Worldwide_active__today}
                Worldwide_cases__today = {Worldwide_cases__today}
                Worldwide_deaths__today = {Worldwide_deaths__today}
                Worldwide_recovered__today = {Worldwide_recovered__today}
                Worldwide_todayCases__today = {Worldwide_todayCases__today}
                Worldwide_todayDeaths__today = {Worldwide_todayDeaths__today}
                />
            </div>
            <div className = "country">
                <div className = "country-row">
                    {All_Countries__today.map(country_data_map => (
                        <General_country_page country = {country_data_map.country} active = {country_data_map.active} recovered = {country_data_map.recovered} new_cases = {country_data_map.todayCases} cases = {country_data_map.cases} new_deaths = {country_data_map.todayDeaths} deaths = {country_data_map.deaths}/>
                    ))}
                </div>
            </div>
        </div>
    )
}


export default Home