import { useState } from "react"

export default function MissionAction() {

    const changeStatus = () => {

    }

    const changeToComplete = () => {

    }


    return (
        <div className="MissionAction">
            <button onClick={changeStatus}>Launch</button>
            <button onClick={changeToComplete} >Complete</button>
        </div>
    )
}