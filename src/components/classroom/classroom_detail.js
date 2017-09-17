import React from 'react'
import DATACOMMENTS from '../../data/data_comments'
import DATACLASSROOMS from '../../data/data_classrooms'

const ClassroomDetail = (props) => {
	const comments = DATACOMMENTS.filter(data => {
		return data.classroom_id == props.classroom.id
	}).map(d => {
		const student_name = DATACLASSROOMS.filter(e => {
			return props.classroom.id == e.id
		})[0].parent_student[d.child_id].student
		return(
			<div>
				<h2>{d.comments}</h2>
				<p> Parents of {student_name}</p>
			</div>
			)
	})
    return(
        <div key={props.classroom.id}>
            <h2>{props.classroom.name} - {props.classroom.id}</h2>
            <hr />
            {comments}
        </div>
    )
}

export default ClassroomDetail