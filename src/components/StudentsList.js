import React from "react";
import Student from "./Student";

const StudentsList = (props) => {
  let studentsLi = () => {
   let mapped = props.students.map((student)=> {
     console.log(student)
      return <Student id={student.id} 
                      key={student.name}
                      name={student.name} 
                      year={student.class_year} 
                      percentage={student.percentage}
                      editStudent={props.editStudent}/>
    })
    return mapped
  }
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

        {studentsLi()}
      </tbody>
    </table>
  );
};

export default StudentsList;
