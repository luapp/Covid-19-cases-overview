import React from "react"
import "./Widgets.css"


function New_recovered ({Worldwide_todayRecovered__today}) {
    return(
        <div className = "box box-new-recovered">
            <div className = "title-h3-box">
                <h3 className = "title-h3">New recovered</h3>
            </div>
            <div className = "data-text-box">
                <h2 className = "data-text">+{Worldwide_todayRecovered__today}</h2>
            </div>
        </div>
    )
}


export default New_recovered