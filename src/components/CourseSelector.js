import React from "react";

const CourseSelector = (props) => {
  // console.log(props.courses);
  return (
    <div className="sixteen wide column">
      <select className="ui dropdown" onChange={props.classHandler} >
        {/* Pass through a list of courses and map through it below to generate the individual options in your dropdown. */}
        { props.courses.map((course, i) => {
          return (
            <option key={i} className="item" value={course.id}>
              {course.name}
            </option>
          );
        })} }
      </select>
    </div>
  );
};

export default CourseSelector;
