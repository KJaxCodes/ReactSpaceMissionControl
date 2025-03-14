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
    const [missions, setMissions] = useState([...INITIAL_MISSIONS]);
    //useState so that we can update the status and filter

    // mission filter event handlers//
    const handleMissionFilter = (event) => {
        console.log("Mission Filter");
        if (event.target.innerText === "All") {
            setMissions([...INITIAL_MISSIONS]);
        } else {
            const filteredMissions = INITIAL_MISSIONS.filter((mission) => mission.status === event.target.innerText);
            setMissions(filteredMissions);
            //render with updated filter
        }
    };

    const handleLaunch = (name) => {
        //handleLaunch takes one parameter, name, representing the mission to be launched
        console.log("Launch the mission");
        //confirms function is triggerd

        for (const mission of INITIAL_MISSIONS) {
            if (mission.name === name) {
                if (mission.status === "Planned") {
                    mission.status = "Active";
                } else {
                    console.log("Mission already launched or completed.");
                }
            }
        }

        setMissions([...INITIAL_MISSIONS]);
        //update the initial data set, then render with the updated status

    };


    const handleComplete = (name) => {
        console.log("Complete the mission");

        for (const mission of INITIAL_MISSIONS) {
            if (mission.name === name) {
                if (mission.status === "Active" || mission.status === "Planned") {
                    mission.status = "Completed";
                } else {
                    console.log("Mission already completed.")
                }
            }
        }

        setMissions([...INITIAL_MISSIONS]);
        //update the initial data set, then render with the updated status
    }


    return (
        <div>
            <h1>Space Mission Control</h1>
            <MissionFilter
                handleMissionFilter={handleMissionFilter}
            // handleShowPlanned={handleShowPlanned}
            // handleShowActive={handleShowActive}
            // handleShowCompleted={handleShowCompleted}
            />

            {/* {console.log("These are the missions", missions)} */}
            {missions.map(m => {
                return (
                    < MissionCard
                        key={m.id}
                        name={m.name}
                        status={m.status}
                        crew={m.crew}
                        handleLaunch={handleLaunch}
                        handleComplete={handleComplete}
                    />
                )
            })

            }


        </div>
    )
}