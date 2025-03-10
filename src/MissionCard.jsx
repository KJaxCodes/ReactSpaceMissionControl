import MissionAction from "./MissionAction";

export default function MissionCard(props) {
    const { name, status, crew, handleMissionClick } = props;

    const handleLaunch = () => {
        console.log(name);
    }

    const handleComplete = () => {
        console.log(name);
    }

    return (
        <div className="MissionCard" onClick={() => { handleMissionClick(name) }}>
            <h2>{name}</h2>
            <p>Status: {status}</p>
            <p>Crew: {crew.join(", ")}</p>
            <MissionAction handleLaunch={handleLaunch} handleComplete={handleComplete}/>
        </div>
    )
}