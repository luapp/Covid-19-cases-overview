import React from "react"
import "./Widgets.css"



function Active ({Worldwide_active__today}) {
    return(
        <div className = "box box-active">
            <div className = "title-h3-box">
                <h3 className = "title-h3">Active cases</h3>
            </div>
            <div className = "data-text-box">
                <h2 className = "data-text">{Worldwide_active__today}</h2>
            </div>
        </div>
    )
}


export default Active