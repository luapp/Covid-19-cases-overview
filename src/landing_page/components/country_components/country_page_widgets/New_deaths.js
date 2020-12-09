import React from "react"
import "./Widgets_small.css"


function New_deaths ({new_deaths}) {
    return(
        <div className = "box-small-individual-country box-new-deaths">
            <div className = "title-h3-box">
                <h3 className = "title-h3">New deaths</h3>
            </div>
            <div className = "data-text-box-individual-country">
                <h2 className = "data-text-individual-country">+{new_deaths}</h2>
            </div>
        </div>
    )
}


export default New_deaths