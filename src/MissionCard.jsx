import MissionAction from "./MissionAction";

export default function MissionCard(props) {
    const { name, status, crew, handleLaunch, handleComplete } = props;



    return (
        <div className="MissionCard">
            <h2>{name}</h2>
            <p>Status: {status}</p>
            <p>Crew: {crew.join(", ")}</p>
            <MissionAction
                name={name}
                handleLaunch={handleLaunch}
                handleComplete={handleComplete}
            />
        </div>
    )

}

//pass down the name so that we can use it in the MissionAction component, name can be used twice without issue