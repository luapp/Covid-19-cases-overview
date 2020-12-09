import React from "react"
import "./Home.css"
import Worldwide from "./components/Worldwide"
import General_country_page from "./components/country_components/General_country_page"
import Country from "./components/country_components/Country"


function Home ({
    Worldwide_active__today,
    Worldwide_cases__today,
    Worldwide_deaths__today,
    Worldwide_recovered__today,
    Worldwide_todayCases__today,
    Worldwide_todayDeaths__today,
    All_Countries__today,
    All_Countries__yesterday,
    set_Page_value,
    Page_value,
    set_Specific_country_data,
    Specific_country_data,
    date,
    set_date,
    Worldwide_active__yesterday,
    Worldwide_cases__yesterday,
    Worldwide_deaths__yesterday,
    Worldwide_recovered__yesterday,
    Worldwide_todayCases__yesterday,
    Worldwide_todayDeaths__yesterday,
    set_Specific_country_data__yesterday,
    Specific_country_data__yesterday
}) {

    const country_map = () => {
        if (date === "today") {
            return(
                <div className = "country">
                    <div className = "country-row">
                        {All_Countries__today.map(country_data_map => (
                            <General_country_page country = {country_data_map.country} active = {country_data_map.active} recovered = {country_data_map.recovered} new_cases = {country_data_map.todayCases} cases = {country_data_map.cases} new_deaths = {country_data_map.todayDeaths} deaths = {country_data_map.deaths}/>
                        ))}
                    </div>
                </div>
            )
        }
        if (date === "yesterday") {
            return(
                <div className = "country">
                    <div className = "country-row">
                        {All_Countries__yesterday.map(country_data_map => (
                            <General_country_page country = {country_data_map.country} active = {country_data_map.active} recovered = {country_data_map.recovered} new_cases = {country_data_map.todayCases} cases = {country_data_map.cases} new_deaths = {country_data_map.todayDeaths} deaths = {country_data_map.deaths}/>
                        ))}
                    </div>
                </div>
            )
        }
    }
    
    console.log(Page_value)
    const Page_selection = () => {
        if (Page_value === "home") {
            return(
                <div>
                    <div className = "worldwide">
                        <Worldwide
                            Worldwide_active__today = {Worldwide_active__today}
                            Worldwide_cases__today = {Worldwide_cases__today}
                            Worldwide_deaths__today = {Worldwide_deaths__today}
                            Worldwide_recovered__today = {Worldwide_recovered__today}
                            Worldwide_todayCases__today = {Worldwide_todayCases__today}
                            Worldwide_todayDeaths__today = {Worldwide_todayDeaths__today}

                            Worldwide_active__yesterday = {Worldwide_active__yesterday}
                            Worldwide_cases__yesterday = {Worldwide_cases__yesterday}
                            Worldwide_deaths__yesterday = {Worldwide_deaths__yesterday}
                            Worldwide_recovered__yesterday = {Worldwide_recovered__yesterday}
                            Worldwide_todayCases__yesterday = {Worldwide_todayCases__yesterday}
                            Worldwide_todayDeaths__yesterday = {Worldwide_todayDeaths__yesterday}

                            set_Page_value = {set_Page_value}
                            set_Specific_country_data = {set_Specific_country_data}

                            date = {date}
                            set_date = {set_date}
                        />
                    </div>
                    {country_map()}
                </div>
            )
        }
        if (Page_value === "country") {
            return (
                <div className = "worldwide">
                    <Country 
                    set_Page_value = {set_Page_value} 
                    Specific_country_data = {Specific_country_data} 
                    set_Specific_country_data = {set_Specific_country_data} 
                    date = {date} 
                    set_date = {set_date}
                    set_Specific_country_data__yesterday = {set_Specific_country_data__yesterday}
                    Specific_country_data__yesterday = {Specific_country_data__yesterday}
                    />
                </div>
            )
        }
    }


    return(
        <div className = "background">
            <div className = "title-box">
                <h1 className = "title">Covid-19 cases overview</h1>
            </div>
            {Page_selection()}
        </div>
    )
}


export default Home