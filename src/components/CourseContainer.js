import React, { Component } from "react"
import CourseSelector from "./CourseSelector"
import EditStudent from "./EditStudent"
import StudentsList from "./StudentsList"
const classURL = 'https://bayside-high.herokuapp.com/api/v1/users/163/courses'
const studentURL = 'https://bayside-high.herokuapp.com/api/v1/users/163/courses/'


class CourseContainer extends Component {
  state = {
    students: [],
    currentCourse: {},
    currentStudent: {},
    courses: []
  }

  componentDidMount = () => {
    fetch(classURL)
    .then(resp => resp.json())
    .then(json => {
      this.setState({
        courses: json
      })
    })
  }

  setCurrentCourse = (e) => {
    let courseNumber = e.currentTarget.value

    // console.log(e.currentTarget.value)
    let value = this.state.courses.find((e)=> {
      return e.id === parseInt(courseNumber,10)
      
    })
    this.setState({
      currentCourse: value
    })
    // console.log(value)

    fetch(studentURL + `${value.id}`)
    .then(resp => resp.json())
    .then(json => {
      // console.log(json.students)
          this.setState({
         students: [...json.students]
       })
    })
  }

  editStudent = (props) => {
    // console.log(props)
    this.setState({
      currentStudent: props
    })
  }

  updateStudent = (props) => {
    // e.preventDefault()

    console.log(props)

  }
  render() {
    return (
      <div className="ui grid container">
        <div className="ui center aligned header sixteen wide column">
          {this.state.currentCourse.name}
          Course Title
        </div>

        <CourseSelector setCurrentCourse={this.setCurrentCourse} courses={this.state.courses}/>

        <EditStudent student={this.state.currentStudent} updateStudent={this.updateStudent}/>

        <StudentsList students={this.state.students} editStudent={this.editStudent} />
      </div>
    )
  }
}

export default CourseContainer
