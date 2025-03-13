import MissionAction from "./MissionAction";

export default function MissionCard(props) {
    const { name, status, crew, handleLaunch, handleComplete } = props;

    // const handleLaunch = () => {
    //     console.log(name);
    //     for (const mission of INITIAL_MISSIONS) {
    //         if (mission.name === name) {
    //             if (mission.status === "Planned") {
    //                 mission.status = "Active";
    //             } else {
    //                 return
    //             }
    //         }
    //     }

    // }

    // const handleComplete = () => {
    //     console.log(name);
    //     for (const mission of INITIAL_MISSIONS) {
    //         if (mission.name === name) {
    //             if (mission.status === "Active" || mission.status === "Planned") {
    //                 mission.status = "Completed";
    //             } else {
    //                 return
    //             }
    //         }
    //     }

    // }

    return (
        <div className="MissionCard">
            <h2>{name}</h2>
            <p>Status: {status}</p>
            <p>Crew: {crew.join(", ")}</p>
            <MissionAction handleLaunch={handleLaunch} handleComplete={handleComplete} />
        </div>
    )

}
