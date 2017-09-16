import React from 'react'
import DATAEVENTS from '../../data/data_events'

import EventDetail from './event_detail'

const EventDetails = (props) => {
    //filter data for eventId
    const event = DATAEVENTS.filter(d => {
        return parseInt(props.match.params.eventId, 10) ===  d.id;
    })

    let event_view = <p>error- no such id found</p>;

    if(event.length > 0){
        event_view =  <EventDetail event={event[0]} />
    }

    return(
        <div>
            <h2>{props.match.params.eventId}</h2>
            {event_view}
        </div>
    )
}

export default EventDetails 