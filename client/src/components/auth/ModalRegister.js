import React, { useState } from 'react';
import { connect } from 'react-redux';
import { registerUser } from '../../redux/actions/auth'

import {
  Button, Modal, ModalHeader, ModalBody, ModalFooter,
  Form, FormGroup, Label, Input
} from 'reactstrap';

function ModalRegister(props) {
  const [openModal, toggleModal] = useState(false);
  const [user, change] = useState(
    {
      username: '',
      email: '',
      password: ''
    });

  const toggle = () => toggleModal(!openModal);

  const handleChange = e => {
    change({ ...user, [e.target.name]: e.target.value })
  }

  const submit = () => {
    console.log(user)

    props.registerUser(user).then(() => {
      toggle();
    })
    
    change({
      username: '',
      email: '',
      password: ''
    })

  }

  return (
    <div>
      <Button color="link" onClick={toggle}>Register</Button>
      <Modal modalTransition={{ timeout: 50 }} isOpen={openModal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Register</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label for="txtUsername">Username</Label>
              <Input type="text" name="username" id="txtUsername" placeholder="username"
                onChange={handleChange}
              />
            </FormGroup>
            <FormGroup>
              <Label for="exampleEmail">Email</Label>
              <Input type="email" name="email" id="exampleEmail" placeholder="emailr"
                onChange={handleChange}
              />
            </FormGroup>
            <FormGroup>
              <Label for="examplePassword">Password</Label>
              <Input type="password" name="password" id="examplePassword" placeholder="password"
                onChange={handleChange}
              />
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={submit}>Register</Button>{' '}
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );

}

export default connect(null, { registerUser })(ModalRegister); 