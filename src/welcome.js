import React from "react"
import "./welcome.css"
import "bulma/css/bulma.css"
import General_page from "./general_page"
import virus_svg from "./img/virus.svg"


function Welcome() {


    return(
        <div className = "welcome-background">

            <div className = "columns is-tablet">

                <div className = "column auto"></div>

                <div className = "column is-three-quarters">
                    <h1 className = "covid-title">Covid-19 cases overview</h1>
                    <General_page/>
                </div>

                <div className = "column auto"></div>

            </div>
            <img src = {virus_svg} className = "virus-svg-bottom"></img>
            <img src = {virus_svg} className = "virus-svg-top"></img>

        </div>
    )
}

export default Welcome;