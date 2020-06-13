import React from "react";
import { Table } from "antd";

export const TableWrapper = ({ dataSource, columns }) => {
  return (
    <>
      <Table
        dataSource={dataSource}
        columns={columns()}
        pagination={false}
        rowKey="id"
      />
    </>
  );
};
