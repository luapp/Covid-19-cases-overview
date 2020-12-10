import React from "react"
import "./Widgets.css"


function New_deaths ({Worldwide_todayDeaths__today}) {
    return(
        <div className = "box box-new-deaths">
            <div className = "title-h3-box">
                <h3 className = "title-h3">New deaths</h3>
            </div>
            <div className = "data-text-box">
                <h2 className = "data-text">+{Worldwide_todayDeaths__today}</h2>
            </div>
        </div>
    )
}


export default New_deaths