import React from "react";

const CourseSelector = (props) => {
  const courseList = props.courses
  const generateCourses = () => {
    return courseList.map((course, i) => {
      return (
        <option key={i} className="item" value={course.id}>
          {course.name}
        </option>
      );
    })
  }
  return (
    <div className="sixteen wide column">
      <select className="ui dropdown" onChange={(e) => {props.handleChange(e.target)}}>
        {generateCourses()}
      </select>
    </div>
  );
};

export default CourseSelector;
