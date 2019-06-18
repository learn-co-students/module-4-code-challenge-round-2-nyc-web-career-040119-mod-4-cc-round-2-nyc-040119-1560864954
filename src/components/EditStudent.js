import React from 'react'

const EditStudent = (props) => {
  let updateStudent = (e) => {
    e.preventDefault()
    // props.updateStudent({}) 
  
  }

  return (
    <form
      className="ui form center aligned sixteen wide column"
      onSubmit={""}
    >
      <div className="inline fields">
        <div className="four wide field">
          <input
            id="name"
            type="text"
            value={props.student.name}
          />
        </div>
        <div className="four wide field">
          <input
            id="class_year"
            type="number"
            value={props.student.year}
          />
        </div>
        <div className="four wide field">
          <input
            id="percentage"
            type="number"
            value={props.student.percentage}
          />
        </div>
        <button className="ui button" type="submit" onClick={updateStudent}>
          Submit
        </button>
      </div>
    </form>
  )
}

export default EditStudent
