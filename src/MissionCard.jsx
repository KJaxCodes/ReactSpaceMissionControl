export default function MissionCard(props) {
    const {name, status, crew} = props;
    return(
            <div>{name} {status} {crew}</div>
    )
}