import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import PropTypes from 'prop-types';

import "./login-view.scss"

export function LoginView(props) {
  const [ username, setUsername ] = useState('');
  const [ password, setPassword ] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(username, password);
    props.onLoggedIn(username);
  };

  const handleRegister = () => {
    props.onShowRegister(true);
  };

  return (
    <Form>
    <Form.Group controlId="formBasicUsername">
      <Form.Label>Username:</Form.Label>
      <Form.Control type='text' placeholder="Enter username" value={username} onChange={e => setUsername(e.target.value)} />
      </Form.Group>
      <Form.Group controlId="formBasicPassword">
      <Form.Label>Password:</Form.Label>
        <Form.Control type="password" placeholder="Enter password" value={password} onChange={e => setPassword(e.target.value)} />
      </Form.Group>
      <Form.Group controlId="formBasicButtons">
      <Row className="submit">
        <Button variant="primary" type="submit" onClick={ handleSubmit }>Submit</Button>
      </Row>
      <Row className="register">
        <Button variant="link" type="primary" onClick={ handleRegister }>Create an account</Button>
      </Row>
      </Form.Group>
    </Form>
  );
}

LoginView.propTypes = {
  onClick: PropTypes.func,
  onShowRegister: PropTypes.func,
  onLoggedIn: PropTypes.func
}
