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


 changeTitle = (e) => {

   let courseId = e.target.value
   console.log("courseId:", courseId)
   let courseTitle = this.state.courses.find(course=> {
     return course.id === parseInt(e.target.value)
   })
   // console.log("checking", courseTitle)
   this.setState({currentCourse: courseTitle})


  //working on the 3rd deliverable



   // fetch("https://bayside-high.herokuapp.com/api/v1/users/160/courses/courseId")
   // .then(res => res.json())
   // .then(student => {
   //   this.setState({currentStudent: student})
   // })

 }

  componentDidMount() {
    fetch("https://bayside-high.herokuapp.com/api/v1/users/160/courses/")
    .then(res => res.json())
    .then(courses => {
      this.setState({courses: courses})
    })


  }



  render() {
    console.log("in CourseCont", this.state.courses)
    // successfully fetched data
    console.log("students", this.state.currentStudent)

    return (
      <div className="ui grid container">
        <div className="ui center aligned header sixteen wide column">
          {this.state.currentCourse.name}
          Course Title
        </div>

        <CourseSelector courses={this.state.courses} changeTitle={this.changeTitle}/>

        <EditStudent />

        <StudentsList currentStudents={this.state.currentStudent} />
      </div>
    )
  }
}

export default CourseContainer
