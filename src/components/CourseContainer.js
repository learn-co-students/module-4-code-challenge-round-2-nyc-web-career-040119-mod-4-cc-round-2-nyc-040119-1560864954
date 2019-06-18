import React, { Component } from "react"
import CourseSelector from "./CourseSelector"
import EditStudent from "./EditStudent"
import StudentsList from "./StudentsList"

class CourseContainer extends Component {
  state = {
    students: [],
    currentCourse: {},
    currentStudent: {},
    courses: []
  }

  componentDidMount() {
    //debugger
  fetch('https://bayside-high.herokuapp.com/api/v1/users/162/students')
    .then(response => response.json())
    .then(students => this.setState({ students }));
  }
  //I was going to put in // https://bayside-high.herokuapp.com/api/v1/users/162/courses/${this.state.currentCourse}
  //but it errors, I guess because on the first render the currentCourse is going to be empty, might have tried an if statement or optional param if I had more time

  currentCourse = (course) => {
    this.setState({currentCourse: course })
  }


  render() {
    const title = this.props.courses.find((course) => {
        return course.id === this.state.currentCourse
      })

    console.log(this.state.currentCourse)
    // console.log(this.props.courses.find(x => (x.id === this.state.currentCourse)))




    return (
      <div className="ui grid container">
        <div className="ui center aligned header sixteen wide column">
          Course Title
        </div>

        <CourseSelector currentCourse={this.currentCourse} courseList={this.props.courses}/>

        <EditStudent />

        <StudentsList currentCourse={this.state.currentCourse} students={this.state.students}/>

      </div>
    )
  }
}

// https://bayside-high.herokuapp.com/api/v1/users/162/courses/641

// const studentList = this.state.students.map(student => {
//   return <StudentsList student={student} students={this.state.students} />
// })
// const courseSelector = this.props.courses.map(course => {
//   return <CourseSelector
//     currentCourse={this.currentCourse}
//     courseList={this.props.courses}
//     courseA={course}
//     />
// })

export default CourseContainer
