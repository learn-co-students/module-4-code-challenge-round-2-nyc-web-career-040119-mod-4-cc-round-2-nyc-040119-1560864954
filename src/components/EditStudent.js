import React from 'react'

const EditStudent = (props) => {
  // console.log("edit student", props);
  return (
    <form
      className="ui form center aligned sixteen wide column"
      id={props.currentStudent.id}
      onSubmit={props.saveStudent}
    >
      <div className="inline fields">
        <div className="four wide field">
          <input
            id="name"
            type="text"
            onChange={props.editStudent}
            value={props.name}
          />
        </div>
        <div className="four wide field">
          <input
            id="class_year"
            type="number"
            onChange={props.editStudent}
            value={props.classYear}
          />
        </div>
        <div className="four wide field">
          <input
            id="percentage"
            type="number"
            onChange={props.editStudent}
            value={props.percentage}
          />
        </div>
        <button className="ui button" type="submit">
          Submit
        </button>
      </div>
    </form>
  )
}

export default EditStudent
