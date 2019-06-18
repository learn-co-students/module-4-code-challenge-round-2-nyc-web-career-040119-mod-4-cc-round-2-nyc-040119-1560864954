import React, { Component } from "react"
import CourseSelector from "./CourseSelector"
import EditStudent from "./EditStudent"
import StudentsList from "./StudentsList"
const API = 'https://bayside-high.herokuapp.com/api/v1/users/159/courses'
class CourseContainer extends Component {
  state = {
    students: [],
    currentCourse: {},
    currentStudent: {},
    courses: []
  }

componentDidMount(){
   fetch(API)
   .then(res=>res.json())
   .then(courses=>{
     this.setState({courses:courses})
   })
}

handleChange =(e)=>{
  // console.log(e.target.value)
  let currentId=parseInt(e.target.value)
  let currentCourse = this.state.courses.find(course=>course.id === currentId)
  // console.log(currentCourse)
  this.setState({
    currentCourse: currentCourse
  })
 fetch(`${API}/${currentId}`)
 .then(res=>res.json())
 .then(currentCourse=>{
  this.setState({students:currentCourse.students})
 })

}

handleEdit=(student)=>{
  this.setState({currentStudent: student})
}

updateStudent=(student)=>{
  let index = this.state.students.findIdex(s=>s.id === student.id)
  let copy = [...this.state.students]
  copy.splice(index, 1 , student)
  this.setState({students:copy})
}

  render() {
    // console.log(this.state.currentStudent)
    return (
      <div className="ui grid container">
        <div className="ui center aligned header sixteen wide column">
          {this.state.currentCourse.name}

        </div>

        <CourseSelector courseList={this.state.courses} handleChange={this.handleChange}/>

        <EditStudent currentStudent={this.state.currentStudent} updateStudent={this.updateStudent}/>

        <StudentsList students={this.state.students} handleEdit={this.handleEdit}/>
      </div>
    )
  }
}

export default CourseContainer
