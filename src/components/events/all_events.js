import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import SeachEvent from './search_event'

import DATAEVENTS from '../../data/data_events'

class AllEvents extends Component{
    constructor(props){
        super(props)

        this.state = {

        }
    }
    render(){
        const all_events_cards = DATAEVENTS.map((d) => {
            return(
                <div key={d.id}>
                    <p><Link to={`/events/${d.id}`}>{d.name}</Link></p>
                    <p>{d.details}</p>
                </div>
            ) 
        })

        return(
        <div>
            <h2>this is all events</h2>
            <div>
                {all_events_cards}
            </div>
        </div>
        )
    }
}

export default AllEvents 