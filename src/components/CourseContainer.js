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

  componentDidMount () {
     fetch("https://bayside-high.herokuapp.com/api/v1/users/161/courses")
       .then(response => response.json())
       .then(classesArr =>  {
         this.setState({
         courses: classesArr})
     })
     // console.log("Component did mount")
  }

 classHandler =(e)=> {
   // console.log(this.state.courses);
   let selectedCourse = this.state.courses.find((course)=>{
     return course.id === parseInt(e.target.value)
   })
   this.setState({
     currentCourse: selectedCourse
   })

   fetch(`https://bayside-high.herokuapp.com/api/v1/users/161/courses/${parseInt(e.target.value)}`)
   .then(response => response.json())
   .then(studentsArr =>  {
     this.setState({
       students: studentsArr.students})
     })
 }

 studentHandler = (e) => {
   console.log(e.target.id);
   let selectedStudent = this.state.students.find((student)=>{
     return student.id === parseInt(e.target.id)
   })
       this.setState({
         currentStudent: selectedStudent
  })
}

  render() {
    console.log(this.state.currentStudent);
    return (
      <div className="ui grid container">
        <div className="ui center aligned header sixteen wide column">
          {this.state.currentCourse.name}
        </div>

        <CourseSelector
          courses={this.state.courses}
          classHandler={this.classHandler}/>

        <EditStudent
          currentStudent={this.state.currentStudent}
        />

        <StudentsList
          students={this.state.students}/>
      </div>
    )
  }
}

export default CourseContainer
