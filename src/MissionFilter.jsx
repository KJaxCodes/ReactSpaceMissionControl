export default function MissionFilter([handleMissionFilter]) {
    //we need an onClick event listener on each button //
    //All should show all mission cards//
    //Planned should show all mission cards with status planned//
    //Active should show all mission cards with status active//
    //Completed should show all mission cards with status completed//

    //separate listener for each button or one for all?//
    return (
        <div className="MissionFilter">
            <button onClick={handleMissionFilter}>All</button>
            <button onClick={handleMissionFilter}>Planned</button>
            <button onClick={handleMissionFilter}>Active</button>
            <button onClick={handleMissionFilter}>Completed</button>
        </div>
    )
}