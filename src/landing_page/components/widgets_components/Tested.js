import React from "react"
import "./Widgets.css"


function Tested ({Worldwide_tests__today}) {
    return(
        <div className = "box box-tested">
            <div className = "title-h3-box">
                <h3 className = "title-h3">Total tests</h3>
            </div>
            <div className = "data-text-box">
                <h2 className = "data-text">{Worldwide_tests__today}</h2>
            </div>
        </div>
    )
}


export default Tested