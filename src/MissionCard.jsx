export default function MissionCard(props) {
    const { name, status, crew } = props;
    return (
        <div className="MissionCard">
            <h2>{name}</h2>
            <p>Status: {status}</p>
            <p>Crew: {crew}</p>
        </div>
    )
}