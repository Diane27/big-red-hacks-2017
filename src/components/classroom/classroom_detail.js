import React from 'react'
import DATACOMMENTS from '../../data/data_comments'
import DATACLASSROOMS from '../../data/data_classrooms'

const ClassroomDetail = (props) => {
	const comments = DATACOMMENTS.filter(data => {
		return data.classroom_id == props.classroom.id
	}).map(d => {
		const student_name = DATACLASSROOMS.filter(e => {
			return e.id == props.classroom.id
		})[0].parent_student[d.child_id].student
		return(

			<div className="alert alert-info" role="alert">
  		<strong><p>{d.comments}</p></strong>
  		<p className="mb-0">Parents of {student_name}</p>
			</div>

			)
	})
    return(
        <div key={props.classroom.id}>
            <h2>{props.classroom.name} - Class {props.classroom.id}</h2>
            <hr />
			<h3>Comments</h3>
            {comments}
        </div>
    )
}

export default ClassroomDetail
