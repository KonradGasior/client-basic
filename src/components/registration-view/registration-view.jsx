import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import PropTypes from 'prop-types';

import "./registration-view.scss";

export function RegistrationView(props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [birthDate, setBirthDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('registered succesfully');
    props.onLoggedIn(null);
    props.onShowRegister(null);
  };

  return(
    <Form className="regform">
      <Form.Group controlId="formBasicUsername">
      <Form.Label> Username: </Form.Label>
        <Form.Control type="text" placeholder="Enter username" value={username} onChange={e => setUsername(e.target.value)} />
      </Form.Group>
      <Form.Group controlId="formBasicPassword">
      <Form.Label> Password: </Form.Label>
        <Form.Control type="password" placeholder="Enter password" value={password} onChange={e => setPassword(e.target.password)} />
      </Form.Group>
      <Form.Group controlId="formBasicEmail">
      <Form.Label> Email: </Form.Label>
        <Form.Control type="email" placeholder="Enter Email" value={email} onChange={e => setEmail(e.target.email)} />
      </Form.Group>
      <Form.Group controlId="formBasicDate">
      <Form.Label> Birthday: </Form.Label>
        <Form.Control type="date" placeholder="Enter your date of birth" value={birthDate} onChange={e => setBirthDate(e.target.birthDate)}/>
      </Form.Group>
      <Form.Group controlId="formBasicButtons">
        <Col>
          <Button className="reg_button" type="submit" onClick={handleSubmit}>Register</Button>
        </Col>
      </Form.Group>
    </Form>
  );
}

RegistrationView.propTypes = {
  onClick: PropTypes.func,
  onShowRegister: PropTypes.func,
  onLoggedIn: PropTypes.func
}
