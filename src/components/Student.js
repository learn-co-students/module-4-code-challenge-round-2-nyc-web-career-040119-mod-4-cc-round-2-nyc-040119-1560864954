import React from 'react'

const Student = (props) => {
  // componentDidMount() {
  // fetch(`https://bayside-high.herokuapp.com/api/v1/users/162/courses/${this.props.currentCourse}`)
  //   .then(response => response.json())
  //   .then(students => this.setState({ students }));
  // }

  return (
    <tr>
      <td>{props.student.name}</td>
      <td>{props.student.class_year}</td>
      <td>{props.student.percentage}</td>
      <td>
        <button className="ui button left">
          Edit
        </button>
      </td>
    </tr>

  )
}

export default Student
