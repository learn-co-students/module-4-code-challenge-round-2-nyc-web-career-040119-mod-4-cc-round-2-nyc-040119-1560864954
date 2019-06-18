import React from "react";

const CourseSelector = (props) => {

  return (
    <div className="sixteen wide column">
      <select className="ui dropdown" onChange={(e)=> props.setCurrentCourse(e)} >
        {props.courses.map((course, i)=>{
          return <option key={i} className="item" name={course.name} value={course.id}> {course.name}</option>
        })}
        {/* {courseList.map((course, i) => {
          return (
            <option key={i} className="item" value={course.id}>
              {course.name}
            </option>
          );
        })} */}
      </select>
    </div>
  );
};

export default CourseSelector;