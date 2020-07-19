import React, { useState, useEffect } from "react";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import { fetchStudents, getColumns } from "../helpers/StudentsHelper";
import Container from "./Container";
import AddStudentForm from "../forms/AddStudentForm";
import { Table, Button, Modal } from "../utils";
import useModal from "../hooks/useModal";

const loadingIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

export default function Students() {
  const [students, setStudents] = useState([]);
  const [isFetching, setIsFetching] = useState(true);
  const [isOpen, { openModal, closeModal }] = useModal(false);

  useEffect(() => {
    fetchStudents().then((students) => {
      setStudents(students);
      setIsFetching(false);
    });
  }, []);

  return (
    <>
      {isFetching ? (
        <Spin indicator={loadingIcon} />
      ) : (
        <>
          {!students && students.length ? (
            <h2>No Students found</h2>
          ) : (
            <h2>Students</h2>
          )}
          {students && students.length && (
            <Container>
              <Table dataSource={students} columns={getColumns} />
              <Button
                text="Add new student +"
                type="primary"
                style={{ marginTop: "10px", padding: "10px" }}
                onClickHandle={openModal}
              />
              <Modal isOpen={isOpen} closeModal={closeModal}>
                <p>Inside Modal</p>
                <AddStudentForm />
              </Modal>
            </Container>
          )}
        </>
      )}
    </>
  );
}
