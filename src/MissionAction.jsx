import { useState } from "react"

export default function MissionAction() {

    const changeStatus = () => {
            
    }

    const changeToComplete = () => {

    }


    return (
        <div className="MissionAction">
            <button onClick={changeStatus}>Launch</button>
            <button conClick={changeToComplete} >Complete</button>
        </div>
    )
}