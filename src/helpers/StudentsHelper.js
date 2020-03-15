import React from 'react';
import { Tag } from "antd";

export const fetchStudents = async () => {
  try {
    const response = await fetch('/api/students');
    const students = await response.json();
    return students
  } catch (error) {
    console.log(error);
  }
}

export const getColumns = () => {
  const columns = [
    {
      title: 'Student Id',
      dataIndex: 'id',
      key: 'id'
    },
    {
      title: 'First Name',
      dataIndex: 'firstName',
      key: 'firstName',
    },
    {
      title: 'Last Name',
      dataIndex: 'lastName',
      key: 'lastName'
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email'
    },
    {
      title: 'Gender',
      dataIndex: 'gender',
      key: 'gender',
      render: gender => (
        <span>
          <Tag color={gender === 'MALE' ? 'geekblue' : 'green'} key={gender}>
            {gender.toUpperCase()}
          </Tag>
        </span>
      )
    }
  ]
  return columns;
}