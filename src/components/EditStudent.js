import React from 'react'

const EditStudent = (props) => {
  // constructor(props){
  //   super(props)
  //   console.log(this.props)
  //   state={
  //     name: props.currentStudent.name,
  //     class_year: props.currentStudent.class_year,
  //     percentage: props.currentStudent.percentage
  //   }
  // }
  this.state = {
       name: '',
       class_year: '',
       percentage: ''
}
  const handleChange=(e)=>{
    console.log(e.target)
     this.setState=({
       [e.target.name]:e.target.value
     })
  }

  // const handleSubmit=()=>{
  //   let id=props.currentStudent.id
  //   fetch(`https://bayside-high.herokuapp.com/api/v1/users/159/students/${id}`,
  //     {method: 'PATCH',
  //     headers:{
  //           'Content-Type': 'application/json'}
  //     body: JSON.stringify(this.state)
  //   })
  //   .then(res => res.json())
  //   .then(student=>props.updateStudent(student))
  //
  //   this.setState = {
  //        name: '',
  //        class_year: '',
  //        percentage: ''
  // }
  // }

  return (
    <form
      className="ui form center aligned sixteen wide column"
      // onSubmit={handleSubmit}
    >
      <div className="inline fields">
        <div className="four wide field">
          <input
            id="name"
            type="text"
            onChange={handleChange}
            value={props.currentStudent.name}
          />
        </div>
        <div className="four wide field">
          <input
            id="class_year"
            type="number"
            onChange={handleChange}
            value={props.currentStudent.class_year}
          />
        </div>
        <div className="four wide field">
          <input
            id="percentage"
            type="number"
            onChange={handleChange}
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
