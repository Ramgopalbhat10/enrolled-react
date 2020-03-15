import React, { useState, useEffect } from "react";
import { fetchStudents } from "../helpers/StudentsHelper";

export default function Students() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    console.log("fetching students from backend API");
    fetchStudents().then(students => setStudents(students));
  }, []);

  return (
    <>
      {!students && students.length ? (
        <h2>No Students found</h2>
      ) : (
        <h2>Students</h2>
      )}
      <div className="students-list">
        {students &&
          students.length &&
          students.map(student => (
            <div className="student" key={student.id}>
              <p>First Name: {student.firstName}</p>
              <p>Last Name: {student.lastName}</p>
              <p>Email: {student.email}</p>
            </div>
          ))}
      </div>
    </>
  );
}
