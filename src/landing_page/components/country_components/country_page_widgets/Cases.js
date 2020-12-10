import React from "react"
import "./Widgets_small.css"


function Cases ({cases}) {
    return(
        <div className = "box-small-individual-country box-cases">
            <div className = "title-h3-box">
                <h3 className = "title-h3">Total cases</h3>
            </div>
            <div className = "data-text-box-individual-country">
                <h2 className = "data-text-individual-country">{cases}</h2>
            </div>
        </div>
    )
}


export default Cases