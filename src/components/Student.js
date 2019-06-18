import React from 'react'

const Student = (props) => {

  return (
    <tr>
      <td>{props.name}</td>
      <td>{props.year}</td>
      <td>{props.percentage}</td>
      <td>
        <button className="ui button left" onClick={()=>{props.editStudent({id:props.id, name: props.name, year: props.year, percentage:props.percentage })}}>
          Edit
        </button>
      </td>
    </tr>

  )
}

export default Student
