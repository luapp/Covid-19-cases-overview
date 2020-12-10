import React from "react"
import "./Widgets_small.css"


function New_cases ({new_cases}) {
    return(
        <div className = "box-small box-new-cases">
            <div className = "title-h3-box">
                <h3 className = "title-h3">New cases</h3>
            </div>
            <div className = "data-text-box-general-country">
                <h2 className = "data-text-general-country">+{new_cases}</h2>
            </div>
        </div>
    )
}


export default New_cases