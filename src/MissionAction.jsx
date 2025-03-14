import { useState } from "react"

export default function MissionAction({ name, handleLaunch, handleComplete }) {
    //pass down name, handleLaunch, handleComplete so we can use them in the event listener


    return (
        <div className="MissionAction">
            <button onClick={() => handleLaunch(name)}>Launch</button>
            <button onClick={() => handleComplete(name)} >Complete</button>
        </div>
    )
}

//use anonomys function so handleLaunch and handleComplete do not run until the click