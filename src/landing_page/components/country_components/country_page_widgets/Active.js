import React from "react"
import "./Widgets_small.css"



function Active ({active}) {
    return(
        <div className = "box-small-individual-country box-active">
            <div className = "title-h3-box">
                <h3 className = "title-h3">Active cases</h3>
            </div>
            <div className = "data-text-box-individual-country">
                <h2 className = "data-text-individual-country">{active}</h2>
            </div>
        </div>
    )
}


export default Active