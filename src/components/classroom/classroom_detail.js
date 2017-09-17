import React from 'react'

const ClassroomDetail = (props) => {
    return(
        <div key={props.classroom.id}>
            <h2>{props.classroom.name} - {props.classroom.id}</h2>
        </div>
    )
}

export default ClassroomDetail