import React from "react"
import "./Widgets.css"


function Deaths ({Worldwide_deaths__today}) {
    return(
        <div className = "box box-deaths">
            <div className = "title-h3-box">
                <h3 className = "title-h3">Total deaths</h3>
            </div>
            <div className = "data-text-box">
                <h2 className = "data-text">{Worldwide_deaths__today}</h2>
            </div>
        </div>
    )
}


export default Deaths