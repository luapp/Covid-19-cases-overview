import React from "react"
import "./Widgets_small.css"


function Cases ({cases}) {
    return(
        <div className = "box-small box-cases">
            <div className = "title-h3-box">
                <h3 className = "title-h3">Total cases</h3>
            </div>
            <div className = "data-text-box-general-country">
                <h2 className = "data-text-general-country">{cases}</h2>
            </div>
        </div>
    )
}


export default Cases