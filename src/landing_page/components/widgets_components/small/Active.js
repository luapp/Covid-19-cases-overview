import React from "react"
import "./Widgets_small.css"



function Active ({active}) {
    return(
        <div className = "box-small box-active">
            <div className = "title-h3-box">
                <h3 className = "title-h3">Active cases</h3>
            </div>
            <div className = "data-text-box-general-country">
                <h2 className = "data-text-general-country">{active}</h2>
            </div>
        </div>
    )
}


export default Active