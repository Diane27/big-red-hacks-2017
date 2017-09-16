import React, {Component} from 'react'
import DATACLASSROOMS from '../../data/data_classrooms'

import ClassroomDetail from './classroom_detail'

class ClassroomView extends Component{
    constructor(props){
        super(props)

        this.state = {}
    }
    
    render(){
        //filter data for eventId
        const classroom = DATACLASSROOMS.filter(d => {
            return parseInt(this.props.match.params.classId, 10) ===  d.id;
        })

        let classroom_view = <p>error- no such id found</p>;

        if(classroom.length > 0){
            classroom_view =  <ClassroomDetail classroom={classroom[0]} />
        }

        return(
        <div>
            <h2>{this.props.match.params.classId}</h2>
            {classroom_view}
        </div>
        )
    }
}


export default ClassroomView 