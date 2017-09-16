import React from 'react'

const ClassroomDetail = (props) => {
    return(
        <div key={props.classroom.id}>
            <p>{props.classroom.name}</p>
        </div>
    )
}

export default ClassroomDetail