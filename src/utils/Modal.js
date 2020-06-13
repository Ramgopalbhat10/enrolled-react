import React from "react";
import { Modal } from "antd";

export const ModalWrapper = ({ isOpen, closeModal, children }) => {
  return (
    <>
      <Modal
        visible={isOpen}
        onOk={() => closeModal()}
        onCancel={() => closeModal()}
        width={700}
      >
        {children}
      </Modal>
    </>
  );
};
