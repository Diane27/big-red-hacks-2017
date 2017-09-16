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
        const all_events_cards = this.state.data.map(d => {
            const badge_list = d.subjects.map(e => {
                return(<h4><span style={{marginRight: '5px'}} className="badge badge-default">{e}</span></h4>)
            })

            return(
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
                    <div className="card-block">
                        <Link to={`/events/${d.id}`}>
                            <button className="btn btn-primary">Learn More</button>
                        </Link>
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
            <SeachEvent handleSearchEvent={this.handleSearchEvent} filter={this.state.filter}/>
            <div style={{'display' : 'flex', 'flex-direction': 'col',
                         'flex-wrap': 'wrap', 'align-items': 'flex-start',
                         'justify-content': 'center'}}>
                {all_events_cards}
            </div>
        </div>
        )
    }
}

export default AllEvents
