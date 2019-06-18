import React from 'react'

const Student = (props) => {
  // console.log(props.studentHandler);
  return (
    <tr>
      <td>{props.student.name}</td>
      <td>{props.student.class_year}</td>
      <td>{props.student.percentage}</td>
      <td>
        <button id={props.student.id} onClick={props.studentHandler} className="ui button left">
          Edit
        </button>
      </td>
    </tr>

  )
}

export default Student
