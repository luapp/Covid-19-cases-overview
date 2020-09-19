import React from "react"
import "./loading-screen.css"
import virus from "./img/virus.svg"


function Loading_screen() {
    return(
        <div className = "loading-background">
            <img className = "loading-virus" src = {virus}></img>
            <label className = "loading-label">Loading...</label>
            <label className = "wait-label">Please wait</label>
        </div>
    )
}


export default Loading_screen