import React, {Component} from 'react'
import { Link } from 'react-router-dom'

import DATACLASSROOMS from '../../data/data_classrooms'

class AllClassrooms extends Component{
    render(){
        const all_events_cards = DATACLASSROOMS.map((d) => {
            return(
                <div key={d.id}>
                  <div className="card w-75">
                  <div className="card text-center">
                  <div className="card-block">
                  <h4 className="card-title">{d.name}</h4>
                  <h4 className="card-title">{d.details}</h4>
                  <a href={`/classroom/${d.id}`} className="btn btn-primary">Go</a>
                  </div>
                  {/*<div className="card-footer text-muted">
                  2 events available
                  </div> */}
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
            <span className="badge badge-warning"><h3>Your Teachers</h3></span>


            <div style={{'display' : 'flex', 'flex-direction': 'col',
                         'align-items': 'flex-start',
                         'justify-content': 'center'}}>
                {all_events_cards}


                <blockquote className="blockquote">
                  <p className="mb-0">Exploration by real people inspires us.</p>
                  <footer className="blockquote-footer">Stephen Hawking</footer>
                </blockquote>

            </div>
<br />
<span className="badge badge-warning"><h3>Additional Resources</h3></span>
<br />
            <div className="card-deck">
<div className="card">
<div className="card-block">
  <h4 className="card-title">New York State Education Department</h4>
  <p className="card-text">See how the New York Science Learning Standards and Core Curriculum relate to your field trip.</p>
  <a href="http://www.p12.nysed.gov/ciai/mst/sci/ls" className="btn btn-primary">More</a>
</div>
</div>
<div className="card">
<div className="card-block">
  <h4 className="card-title">New York City Department of Education</h4>
  <p className="card-text">Learn more about the city's objectives on STEM and trans-disciplinary education.</p>
  <a href="http://schools.nyc.gov/Academics/Science/default.htm" className="btn btn-primary">More</a>
</div>
</div>

</div>


        </div>
        )
    }
}


export default AllClassrooms
