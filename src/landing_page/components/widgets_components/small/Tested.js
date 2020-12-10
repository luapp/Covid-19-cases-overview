import React from "react"
import "./Widgets_small.css"


function Tested ({tests}) {
    return(
        <div className = "box-small box-tested">
            <div className = "title-h3-box">
                <h3 className = "title-h3">Total tests</h3>
            </div>
            <div className = "data-text-box-general-country">
                <h2 className = "data-text-general-country">{tests}</h2>
            </div>
        </div>
    )
}


export default Tested