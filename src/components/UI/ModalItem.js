import React from "react";
import { Modal,Button,Table } from "react-bootstrap";
import { useState } from "react";

const ModalItem = ()=>{
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <Button variant="primary" onClick={handleShow}>
          Cart
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>ITEM</th>
          <th>PRICE</th>
          <th>QUANTITY</th>
        </tr>
      </thead>
      <tbody>
  <tr>
    <td>1</td>
    <td>Mark</td>
    <td>Otto</td>
    <td>@mdo</td>
  </tr>
  <tr>
    <td>2</td>
    <td>Jacob</td>
    <td>$14.99</td>
    <td>@fat</td>
  </tr>
  <tr>
    <td>3</td>
    <td>Larry the Bird</td>
    <td>$14.99</td>
    <td>@larry</td>
  </tr>
</tbody>

    </Table>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Order
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }


export default ModalItem;