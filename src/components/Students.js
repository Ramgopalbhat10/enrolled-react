import React, { useState, useEffect } from "react";
import { Table } from "antd";
import { fetchStudents, getColumns } from "../helpers/StudentsHelper";

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
      {students && students.length && (
        <Table
          className="container"
          dataSource={students}
          columns={getColumns()}
          pagination={false}
          rowKey="studentId"
        />
      )}
    </>
  );
}
