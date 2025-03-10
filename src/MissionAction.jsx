import { useState } from "react"

export default function MissionAction(handleLaunch, handleComplete) {
    return (
        <div className="MissionAction">
            <button onClick={handleLaunch}>Launch</button>
            <button onClick={handleComplete} >Complete</button>
        </div>
    )
}