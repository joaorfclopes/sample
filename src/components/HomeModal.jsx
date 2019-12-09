import React from "react";
import { Modal } from "react-bootstrap";

export default function HomeModal(props) {
  return (
    <Modal
      className="modal"
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header className="modalHeader" closeButton>
        <Modal.Title className="modalText modalTextTitle">
          Lorem ipsum
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="modalBody">
        <p className="modalText modalTextParagraph">
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
        </p>
      </Modal.Body>
    </Modal>
  );
}
