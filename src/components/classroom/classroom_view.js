import React, {Component} from 'react'
import DATACLASSROOMS from '../../data/data_classrooms'
import DATAEVENTS from '../../data/data_events'

import ClassroomDetail from './classroom_detail'
import EventCard from '../events/event_card'

class ClassroomView extends Component{
    constructor(props){
        super(props)

        this.state = {}
    }
    
    render(){
        //filter data for eventId
        const classId = this.props.match.params.classId.toString();

        
        
        let classEventsIds = []
        //check if localStorage classEvents exist
        if ('classEvents' in localStorage) {
            //get the event array for the classId
            if(classId in JSON.parse(localStorage.classEvents)){
                classEventsIds = JSON.parse(localStorage.classEvents)[classId]
            }
        }

        //filter only the events that are in the array
        const classEvents = DATAEVENTS.filter(d => {
            return classEventsIds.indexOf(d.id) >= 0
        }).map(d => {
            const badge_list = d.subjects.map( (e,i) => {
                return(<h4 key={`${i}-badge`}><span style={{marginRight: '5px'}} className="badge badge-default">{e}</span></h4>)
            })

            return(
                <EventCard d={d} badge_list={badge_list}/>
            )
        })

        const classroom = DATACLASSROOMS.filter(d => {
            return parseInt(this.props.match.params.classId, 10) ===  d.id;
        })

        let classroom_view = <p>error- no such id found</p>;

        if(classroom.length > 0){
            classroom_view =  <ClassroomDetail classroom={classroom[0]} />
        }

        return(
        <div>
            {classroom_view}
            <div>
            {classEvents}
            </div>
        </div>
        )
    }
}


export default ClassroomView 