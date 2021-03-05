import React from "react";
import Form from 'react-bootstrap/form'
import Button from 'react-bootstrap/button'

const Signup = () => {
 return (
<div className="large">
        <h4>Inscription</h4>
        <Form>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Pseudo</Form.Label>
                <Form.Control type="text" placeholder="Enter pseudol" />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
        
            <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Label>Confirm password</Form.Label>
                <Form.Control type="password" placeholder="Confirm password" />
            </Form.Group>
            <Button variant="primary" type="submit">
            Submit
            </Button>
        </Form>
    </div>
)
};

export default Signup;