import React from 'react'
import { Link } from 'react-router-dom'

const EventCard = ({d, badge_list}) => {

    return(
        <Link to={`/events/${d.id}`}>
        <div className="card" key={d.id} 
            style={{"width" : "30rem", 'margin' : '10px 20px'}}>
            <div className="card-header">{d.name}</div>
            <img className="card-img-top img-fluid" style={{"width" : "30rem"}} src={d.image} alt={d.name} />
            <div className="card-block">
                <p className="card-text">{d.details}</p>
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">
                    {badge_list}
                </li>
            </ul>
            </div>
        </Link>
    )
}

export default EventCard