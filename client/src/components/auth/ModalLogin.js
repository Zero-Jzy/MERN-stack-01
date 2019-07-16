import React, { useState } from 'react';
import {
  Button, Modal, ModalHeader, ModalBody, ModalFooter,
  Form, FormGroup, Label, Input
} from 'reactstrap';

function ModalLogin() {
  const [openModal, toggleModal] = useState(false);

  const toggle = () => toggleModal(!openModal);

  return (
    <div>
      <Button color="link" onClick={toggle}>Login</Button>
      <Modal modalTransition={{ timeout: 50 }} isOpen={openModal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Login</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label for="exampleEmail">Email</Label>
              <Input type="email" name="email" id="exampleEmail" placeholder="emailr" />
            </FormGroup>
            <FormGroup>
              <Label for="examplePassword">Password</Label>
              <Input type="password" name="password" id="examplePassword" placeholder="password" />
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>Login</Button>{' '}
          <Button color="secondary" onClick={toggle}>cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );

}

export default ModalLogin;