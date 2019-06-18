import React, { Component } from "react"
import CourseSelector from "./CourseSelector"
import EditStudent from "./EditStudent"
import StudentsList from "./StudentsList"

class CourseContainer extends Component {
  state = {
    courses: [],
    currentCourse: {},
    students: [],
    currentStudent: {},
    name: '',
    class_year: '',
    percentage: ''
  }

  componentDidMount() {
    fetch("https://bayside-high.herokuapp.com/api/v1/users/164/courses")
    .then(r=>r.json())
    .then(courses=>{
      this.setState({
        courses
      })
    })
  }

  changeCourse = (courseId) => {
    // console.log(courseId);
    let course = this.state.courses.find(c=>{
      return c.id===parseInt(courseId, 10)
    })
    fetch(`https://bayside-high.herokuapp.com/api/v1/users/164/courses/${courseId}`)
    .then(r=>r.json())
    .then(thisCourse=>{
      // console.log(course);
      this.setState({
        students: thisCourse.students,
        currentCourse: course,
        currentStudent: {},
        name: '',
        class_year: '',
        percentage: ''
      })
    })
  }

  selectStudent = (studentId) => {
    // console.log(studentId);
    let notSelectedStudent = this.state.students.filter(s=>{
      return s.id !== studentId
    })
    let currentStudent = this.state.students.find(s=>{
      return s.id === studentId
    })
    this.setState({
      students: notSelectedStudent,
      currentStudent,
      name: currentStudent.name,
      class_year: currentStudent.class_year,
      percentage: currentStudent.percentage
    })
  }

  editStudent = (e) =>{
    let name = e.target.id
    let value = e.target.value
    this.setState({
      [name]: value
    })
  }

  saveStudent = (e) =>{
    e.preventDefault()
    fetch(`https://bayside-high.herokuapp.com/api/v1/users/164/students/${e.target.id}`,{
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        'name': this.state.name,
        'class_year': this.state.class_year,
        'percentage': this.state.percentage,
      })
    })
    .then(r=>r.json())
    .then(student=>{
      // console.log(student);
      this.setState({
        students: [student, ...this.state.students],
        currentStudent: {},
        name: '',
        class_year: '',
        percentage: ''
      })
    })
  }

  render() {
    const { students, currentStudent, currentCourse, courses, name, class_year, percentage } = this.state
    // console.log(this.state.name);
    return (
      <div className="ui grid container">
        <div className="ui center aligned header sixteen wide column">
          {!!currentCourse ? currentCourse.name : null }
        </div>

        <CourseSelector
          courses={courses}
          changeCourse={this.changeCourse}/>

        <EditStudent
          name={name}
          classYear={class_year}
          percentage={percentage}
          currentStudent={currentStudent}
          editStudent={this.editStudent}
          saveStudent={this.saveStudent}/>

        <StudentsList
          students={students}
          selectStudent={this.selectStudent}/>
      </div>
    )
  }
}

export default CourseContainer
