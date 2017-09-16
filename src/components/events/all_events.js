import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import SeachEvent from './search_event'

import DATAEVENTS from '../../data/data_events'

class AllEvents extends Component{
    constructor(props){
        super(props)

        this.state = {
            'data': DATAEVENTS,
            'term': '',
            'filter': ''
        }

        this.handleSearchEvent = this.handleSearchEvent.bind(this)
    }
    handleSearchEvent(e){
        e.preventDefault();
        let term =  e.target.value;
        let filter = '';
        let temp_term;
        //filter databased on input
        if(term.includes('::')){
            filter = term.split('::')[0]
            temp_term = term.split('::')[1]
        }
        let data = DATAEVENTS.filter(d =>{
            if(filter !== ''){
                if(filter in d){
                //string query
                if(typeof(d[filter]) === 'string' || typeof(d[filter]) === 'number'){
                    return d[filter].toString().toLowerCase().includes(temp_term.toLowerCase())
                }
                //array query
                else if(typeof(d[filter] === 'array')){
                    //search each item in array for temp_term
                    return d[filter].filter(e => {
                        return e.toString().toLowerCase().includes(temp_term.toLowerCase())
                    }).length > 0
                }

                }
            }
            return d.name.toLowerCase().includes(term.toLowerCase());
        })
        this.setState({term, data, filter})
    }

    render(){
        const all_events_cards = this.state.data.map((d) => {
            return(
                <div className="card" key={d.id}>
                    <h3 className="card-header">{d.name}</h3>
                      <div className= "card-block">

                      <div className="card-group">
                      <div className="card">
                        <div className="card-block">
                        <h4 className="card-title">Details</h4>
                        <p className="card-text">{d.details}</p>
                        </div>
                      </div>
                      <div className="card">
                        <div className="card-block">
                        <h4 className="card-title">Teachable Subjects</h4>
                        <p className="card-text">{d.subjects}</p>
                        <Link to={`/events/${d.id}`}>
                            <button className="btn btn-primary">Learn More</button>
                        </Link>
                        </div>
                      </div>
                      <div className="card">
                        <img className="card-img-top img-fluid" src={d.image} alt={d.name}/>
                      </div>
                      </div>


                    </div>
                </div>
            )
        })

        return(
        <div>
            <div className="jumbotron jumbotron-fluid">
              <div className="container">
                <h1 className="display-3">All Events</h1>
                <p className="lead">Experience your city! Here are all the educational opportunities available for you to peruse.</p>
              </div>
            </div>
            <SeachEvent handleSearchEvent={this.handleSearchEvent} term={this.state.term}/>
            <p>searching using: {this.state.filter}</p>
            <div>
                {all_events_cards}
            </div>
        </div>
        )
    }
}

export default AllEvents
