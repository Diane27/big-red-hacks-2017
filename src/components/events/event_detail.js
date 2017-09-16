import React from 'react'

const EventDetail = (props) => {
    return(
        <div key={props.event.id}>
        <h3>{props.event.name}</h3>
        <p>{props.event.details}</p>
        <ui>
            <li>{props.event.subjects}</li>
        </ui>
        <img src={props.event.image} width={"500px"}/>
        </div>
    )
}

export default EventDetail
