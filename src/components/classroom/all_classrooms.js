import React, {Component} from 'react'
import { Link } from 'react-router-dom'

import DATACLASSROOMS from '../../data/data_classrooms'

class AllClassrooms extends Component{
    render(){
        const all_events_cards = DATACLASSROOMS.map((d) => {
            return(
                <div key={d.id}>
                    <p><Link to={`/classroom/${d.id}`}>{d.name}</Link></p>
                    <p>{d.details}</p>
                </div>
            ) 
        })
        return(
        <div>
            <h2>this is all classrooms</h2>
            {all_events_cards}
        </div>
        )
    }
}


export default AllClassrooms 