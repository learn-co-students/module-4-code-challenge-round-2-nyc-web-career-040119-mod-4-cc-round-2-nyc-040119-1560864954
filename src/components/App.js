import React, { Component } from 'react'
import CourseContainer from './CourseContainer'

class App extends Component {
  state = {
    courses: []
  }

  componentDidMount() {
  fetch('https://bayside-high.herokuapp.com/api/v1/users/162/courses')
    .then(response => response.json())
    .then(courses => this.setState({ courses }));
  }

  render() {
    // const course = this.state.courses.map(course => {
    //   return <CourseContainer course={course} />
    // })
    return (
      <div className="ui raised segment">
        <div className="ui center aligned segment violet inverted">
          <h2>Bayside High Grade Tracker</h2>
        </div>

        {<CourseContainer courses={this.state.courses}/>}

      </div>
    )
  }
}

export default App
