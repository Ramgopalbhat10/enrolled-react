import React, { useState, useEffect } from "react";
import { Table, Spin } from "antd";
import { LoadingOutlined } from '@ant-design/icons';
import { fetchStudents, getColumns } from "../helpers/StudentsHelper";
import Container from './Container';

const loadingIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

export default function Students() {
  const [students, setStudents] = useState([]);
  const [isFetching, setIsFetching] = useState(true)

  useEffect(() => {
    fetchStudents().then(students => {
      setStudents(students);
      setIsFetching(false);
    });
  }, []);

  return (
    <>
      {isFetching ? (
        <Spin indicator={loadingIcon}/>
      ) : (
        <>
          {!students && students.length ? (
            <h2>No Students found</h2>
          ) : (
            <h2>Students</h2>
          )}
          {students && students.length && (
            <Container>
              <Table
                dataSource={students}
                columns={getColumns()}
                pagination={false}
                rowKey="id"
              />
            </Container>
          )}
        </>
      )}

    </>
  );
}
