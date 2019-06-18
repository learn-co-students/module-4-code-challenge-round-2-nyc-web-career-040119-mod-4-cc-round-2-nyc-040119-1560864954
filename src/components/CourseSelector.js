import React from "react";

const CourseSelector = (props) => {
  // console.log(props);
  return (
    <div className="sixteen wide column">
      <select
        className="ui dropdown"
        onChange={(e)=>props.changeCourse(e.target.value)}>
        <option>-- Select Course --</option>
        {props.courses.map((course, i) => {
          return (
            <option
              key={i}
              className="item"
              value={course.id}>
              {course.name}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default CourseSelector;
