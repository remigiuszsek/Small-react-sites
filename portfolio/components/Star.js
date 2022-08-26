export default function Star(props) {
    const starIcon = (props.isFilled ? "star-filled.webp" : "star.png")
    return (
        <img 
            src={`../images/${starIcon}`} 
            className="card--favorite"
            onClick={props.func}
        />
    )
}