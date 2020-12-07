import React from "react"
import "./Widgets_small.css"


function Deaths ({deaths}) {
    return(
        <div className = "box-small box-deaths">
            <div className = "title-h3-box">
                <h3 className = "title-h3">Total deaths</h3>
            </div>
            <div className = "data-text-box-general-country">
                <h2 className = "data-text-general-country">{deaths}</h2>
            </div>
        </div>
    )
}


export default Deaths