import React from 'react'

const EditStudent = (props) => {
console.log(props.currentStudent);

//submit Handler below ran out of time

// submitHandler = (e) => {
//   e.preventDefault()
//     fetch(`https://bayside-high.herokuapp.com/api/v1/users/161/students/${this.state.currentStudent.id}`,
//     {
//       method: 'PATCH',
//       headers:  {
//         "Content-Type": "application/json",
//         "Accept": "application/json"
//       },
//       body: JSON.stringify({
//         class_year:  ,
//         name: ,
//         percentage:
//     })
//   })
// }
  return (
    <form
      className="ui form center aligned sixteen wide column"
      onSubmit={this.submitHandler}
    >
      <div className="inline fields">
        <div className="four wide field">
          <input
            id="name"
            type="text"
            value={props.currentStudent.name}
          />
        </div>
        <div className="four wide field">
          <input
            id="class_year"
            type="number"
            value={props.currentStudent.class_year}
          />
        </div>
        <div className="four wide field">
          <input
            id="percentage"
            type="number"
            value={props.currentStudent.percentage}
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
