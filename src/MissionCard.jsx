export default function MissionCard(props) {
    const { name, status, crew, handleMissionClick } = props;
    return (
        <div className="MissionCard" onClick={() => { handleMissionClick(name) }}>
            <h2>{name}</h2>
            <p>Status: {status}</p>
            <p>Crew: {crew.join(", ")}</p>
        </div>
    )
}