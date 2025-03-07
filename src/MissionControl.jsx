import MissionCard from "./MissionCard"
import MissionAction from "./MissionAction";
import MissionFilter from "./MissionFilter";
import React, { useState } from "react";

const INITIAL_MISSIONS = [
    { id: 1, name: "Mars Rover", status: "Planned", crew: ["Alice", "Bob"] },
    { id: 2, name: "Moon Base", status: "Active", crew: ["Charlie", "Dave"] },
    { id: 3, name: "Venus Observatory", status: "Planned", crew: ["Eve", "Frank"] },
    { id: 4, name: "Jupiter Moons Survey", status: "Completed", crew: ["Grace", "Hank"] },
    { id: 5, name: "Asteroid Belt Mining", status: "Active", crew: ["Ivy", "John"] },
    { id: 6, name: "Saturn Ring Research", status: "Planned", crew: ["Karen", "Leo"] },
    { id: 7, name: "Deep Space Probe", status: "Completed", crew: ["Mia", "Nolan"] },
    { id: 8, name: "Interstellar Observatory", status: "Planned", crew: ["Olivia", "Pete"] },
    { id: 9, name: "Neptune Atmospheric Study", status: "Active", crew: ["Quinn", "Rachel"] },
    { id: 10, name: "Pluto Reclamation", status: "Planned", crew: ["Sam", "Tina"] }
];



export default function MissionControl() {
    const [missions, setMissions] = useState(INITIAL_MISSIONS);

    const handleMissionClick = (name) => {
        console.log(name, "click");
        const newMissions = missions.map((mission) => {
            if (mission.name === name) {
                return {
                    ...mission,
                    status: mission.status === "Planned" ? "Active" : "Completed",
                };
            }
            return mission;
        });
        setMissions(newMissions);
    }
    return (
        <div>
            <h1>Space Mission Control</h1>
            <MissionFilter />
            <MissionAction />

            {missions.map(m => {
                return (
                    < MissionCard key={m.id} name={m.name} status={m.status} crew={m.crew} handleMissionClick={handleMissionClick} />
                )
            })

            }


        </div>
    )
}