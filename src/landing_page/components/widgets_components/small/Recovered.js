import React from "react"
import "./Widgets_small.css"


function Recovered ({recovered}) {
    return(
        <div className = "box-small box-recovered">
            <div className = "title-h3-box">
                <h4 className = "title-h3">Total recovered cases</h4>
            </div>
            <div className = "data-text-box-general-country">
                <h2 className = "data-text-general-country">{recovered}</h2>
            </div>
        </div>
    )
}


export default Recovered