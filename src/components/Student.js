import React from 'react'

const Student = (props) => {
// console.log(props.student)
  return (
    <tr>
      <td>{props.student.name}</td>
      <td>{props.student.class_year}</td>
      <td>{props.student.percentage}</td>
      <td>
        <button className="ui button left" onClick={()=>props.handleEdit(props.student)}>
          Edit
        </button>
      </td>
    </tr>

  )
}

export default Student
