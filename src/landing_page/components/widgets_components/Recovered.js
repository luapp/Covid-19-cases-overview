import React from "react"
import "./Widgets.css"


function Recovered ({Worldwide_recovered__today}) {
    return(
        <div className = "box box-recovered">
            <div className = "title-h3-box">
                <h4 className = "title-h3">Total recovered cases</h4>
            </div>
            <div className = "data-text-box">
                <h2 className = "data-text">{Worldwide_recovered__today}</h2>
            </div>
        </div>
    )
}


export default Recovered