import React from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import 'components/signupTipster/index.css'
import { Link } from 'react-router-dom'


const SignupForTipster = () => {
   
 return (
<div className="background">
    <div className="main-container">
        <h2>Salut à toi futur Tipster</h2>
        <div className="form-container" id="inscritpion">
            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Pseudo</Form.Label>
                    <Form.Control type="text" placeholder="Enter pseudo" />
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
                <Link to="/tipster-after-inscription"><Button variant="warning">
                        M'inscrire
                    </Button>
                </Link>
            </Form>
        </div>
    </div>
</div>
)
};

export default SignupForTipster;