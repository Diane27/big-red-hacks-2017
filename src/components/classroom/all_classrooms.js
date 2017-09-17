import React, {Component} from 'react'
import { Link } from 'react-router-dom'

import DATACLASSROOMS from '../../data/data_classrooms'

class AllClassrooms extends Component{
    render(){
        const all_events_cards = DATACLASSROOMS.map((d) => {
            return(
                <div key={d.id}>

                  <div className="card text-center">
                  <div className="card-block">
                  <h4 className="card-title">{d.name}</h4>
                  <h4 className="card-title">{d.details}</h4>
                  <a href={`/classroom/${d.id}`} className="btn btn-primary">Go</a>
                  </div>
                  <div className="card-footer text-muted">
                  2 days ago
                  </div>
                  </div>



                </div>



            )
        })
        return(
        <div>
            <div className="jumbotron jumbotron-fluid">
            <div className="container">
                <h1 className="display-3">Classrooms</h1>
                <p className="lead">Your educators have curated trips in your community that relate to what's being taught in your child's class.</p>
            </div>
            </div>

            <div style={{'display' : 'flex', 'flex-direction': 'col',
                         'flex-wrap': 'wrap', 'align-items': 'flex-start',
                         'justify-content': 'center'}}>
                {all_events_cards}
            </div>
        </div>
        )
    }
}


export default AllClassrooms
