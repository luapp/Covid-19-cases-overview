import React from "react"
import "./Widgets.css"


function Cases ({Worldwide_cases__today}) {
    return(
        <div className = "box box-cases">
            <div className = "title-h3-box">
                <h3 className = "title-h3">Total cases</h3>
            </div>
            <div className = "data-text-box">
                <h2 className = "data-text">{Worldwide_cases__today}</h2>
            </div>
        </div>
    )
}


export default Cases