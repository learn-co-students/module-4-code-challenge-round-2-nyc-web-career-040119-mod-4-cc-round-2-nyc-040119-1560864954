import React, { Component } from "react"
import CourseSelector from "./CourseSelector"
import EditStudent from "./EditStudent"
import StudentsList from "./StudentsList"

const user_id = 165
const COURSES_URL = `https://bayside-high.herokuapp.com/api/v1/users/${user_id}/courses/`;
// const STUDENTS_URL = `https://bayside-high.herokuapp.com/api/v1/users/${user_id}/courses/`;


class CourseContainer extends Component {

  state = {
    students: [],
    currentCourse: {},
    currentStudent: {},
    courses: []
  }

  componentDidMount() {
    fetch(COURSES_URL)
      .then(r => r.json())
      .then(courses => {this.setState({courses})})
  }
  handleChange = (target) => {
    const COURSE_URL = COURSES_URL+target.value
    fetch(COURSE_URL)
      .then(r => r.json())
      .then(course => {
        this.setState({
          currentCourse: course,
          students: course.students
        })
    })
  }
  handleClick = (student) => {
    this.setState({currentStudent:student})
  }
  handleSubmit = (e) => {
    e.preventDefault()
    console.log(e);
    debugger
    // this.setState({currentStudent:target.value})
  }
  render() {
    return (
      <div className="ui grid container">
        <div className="ui center aligned header sixteen wide column">
          {this.state.currentCourse.name}
        </div>
        <CourseSelector
          courses={this.state.courses}
          handleChange={this.handleChange}
        />
        <EditStudent
          currentStudent={this.state.currentStudent}
        />
        <StudentsList
          students={this.state.students}
          handleClick={this.handleClick}
        />
      </div>
    )
  }
}

export default CourseContainer
