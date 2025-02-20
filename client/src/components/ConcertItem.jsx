import "../components/ComponentStyling/ConcertItem.css"
import { useState } from "react";

const ConcertItem = ({ concert, clickItemFunc, isSelected }) => {

    const [borderWeight, setBorderWeight] = useState(0);

    let concertTitle = concert.name
    let concertCity = concert.city
    let concertDate = concert.date
    let concertDes = concert.desc
    let concertRate = concert.rating
    let concertPrice = "$" + concert.price
    let concertTour = concert.tour

    const clicked = () => {
        clickItemFunc(concert)
    }

    return (
        <div
            className='ConcertDisplayBox'
            style={{ position: "relative", left: "10px", padding: "20px", border: isSelected ? "5px solid black" : "none", cursor: "pointer" }}
            onClick={clicked}
        >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
                <p className='TourLabel' style={{ margin: 0 }}>{concertTitle + ', ' + concertCity}</p>
                <p className='DateLabel' style={{ margin: 0 }}>{concertDate}</p>
            </div>
            <div className='ConcertTour'>{concertTour.name}</div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
                <p className='TourDes' style={{ marginTop: '10px' }}>{concertDes}</p>
                <div className='ConcertRatingBox'>{concertRate}</div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '20px', marginTop: '20px' }}>
                <p className='ConcertPriceBox'>{concertPrice}</p>
                <button className='FullDetailsButton' onClick={(e) => {
                    e.stopPropagation();
                    console.log(console.log(concert));
                }}>Full Details</button>
            </div>
        </div>


    )
}

export default ConcertItem