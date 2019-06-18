import React from "react";
import Student from "./Student";

const StudentsList = (props) => {
  // console.log("student list", props);
  return (
    <table className="ui celled striped padded table">
      <tbody>
        <tr>
          <th>
            <h3 className="ui center aligned header">Student Name</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Class Year</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Course Percentage</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Edit</h3>
          </th>
        </tr>

        {props.students.map(s=>{
          return <Student student={s} key={s.id} selectStudent={props.selectStudent} />
        }).sort((a,b)=>{
          return a.props.student.name.localeCompare(b.props.student.name)
        })}
      </tbody>
    </table>
  );
};

export default StudentsList;
