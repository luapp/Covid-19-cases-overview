import React from "react"
import "./Widgets.css"


function New_cases ({Worldwide_todayCases__today}) {
    return(
        <div className = "box box-new-cases">
            <div className = "title-h3-box">
                <h3 className = "title-h3">New cases</h3>
            </div>
            <div className = "data-text-box">
                <h2 className = "data-text">+{Worldwide_todayCases__today}</h2>
            </div>
        </div>
    )
}


export default New_cases