import React, {Component} from 'react'
import SeachEvent from './search_event'
import EventCard from './event_card'

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
        //filter data based on other keys/values if it includes ::
        if(term.includes('::')){
            filter = term.split('::')[0]
            temp_term = term.split('::')[1] // the part after the ::
        }
        let data = DATAEVENTS.filter(d =>{
            //if there is a filter
            if(filter !== ''){
                if(filter in d){
                //string query
                if(typeof(d[filter]) === 'string' || typeof(d[filter]) === 'number'){
                    //check if term is in the value of the query key
                    return d[filter].toString().toLowerCase().includes(temp_term.toLowerCase())
                }
                //array query
                else if(typeof(d[filter] === 'array')){
                    //search each item in query array for term
                    return d[filter].filter(e => {
                        return e.toString().toLowerCase().includes(temp_term.toLowerCase())
                    }).length > 0
                }

                }
            }
            //default case , when there is no filter , query by name
            return d.name.toLowerCase().includes(term.toLowerCase());
        })
        this.setState({term, data, filter})
    }

    render(){
        const all_events_cards = this.state.data.map(d => {

            //generate badges
            const badge_list = d.subjects.map(e => {
                return(<h4><span style={{marginRight: '5px'}} className="badge badge-default">{e}</span></h4>)
            })

            return(
                <EventCard d={d} badge_list={badge_list}/>
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
