import React from 'react';
import { Tag, Avatar } from "antd";

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
      title: '',
      key: 'avatar',
      render: (text, student) => (
        <Avatar size='large'>
          {`${student.firstName.charAt(0).toUpperCase()}${student.lastName.charAt(0).toUpperCase()}`}
        </Avatar>
      )
    },
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