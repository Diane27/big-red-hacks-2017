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
            }else{
                return d.name.toLowerCase().includes(term.toLowerCase());
            }
        })
        this.setState({term, data, filter})
    }

    render(){
        const all_events_cards = this.state.data.map((d) => {
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
            <p>{this.state.filter}</p>
            <SeachEvent handleSearchEvent={this.handleSearchEvent} term={this.state.term}/>
            <div>
                {all_events_cards}
            </div>
        </div>
        )
    }
}

export default AllEvents 