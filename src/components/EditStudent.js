import React from 'react'

const EditStudent = (props) => {
  console.log(props.currentStudent);
  const student = props.currentStudent;
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(e);
  }
  return (
    <form
      className="ui form center aligned sixteen wide column"
      onSubmit={handleSubmit}
    >
      <div className="inline fields">
        <div className="four wide field">
          <input
            id="name"
            type="text"
            value=""

          />
        </div>
        <div className="four wide field">
          <input
            id="class_year"
            type="number"
          />
        </div>
        <div className="four wide field">
          <input
            id="percentage"
            type="number"
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
