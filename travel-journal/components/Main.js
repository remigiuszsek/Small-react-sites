export default function Main(point) {
    return (
        <div className="container">
            <div className="box">
                <img className="travel--img" src={point.img} />
                <div className="second--container">
                    <div className="loc--desc">
                        <img src="./images/pin.svg" />
                        <h4 className="location" >{point.location}</h4>
                        <p className="google--maps">View on Google Maps</p>
                    </div>
                    
                    <h2>{point.title}</h2>
                    <h4 className="date--time">{point.startDate} - {point.endDate}</h4>
                    <p className="desc">{point.description}</p>
                </div>
               
            </div>
        </div>
    )
}