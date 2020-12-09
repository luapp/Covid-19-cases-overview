import React from "react"
import "./Widgets_small.css"


function Deaths ({deaths}) {
    return(
        <div className = "box-small-individual-country box-deaths">
            <div className = "title-h3-box">
                <h3 className = "title-h3">Total deaths</h3>
            </div>
            <div className = "data-text-box-individual-country">
                <h2 className = "data-text-individual-country">{deaths}</h2>
            </div>
        </div>
    )
}


export default Deaths