import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import 'components/signin/signin.css' 
import { Link } from 'react-router-dom'
import React from 'react';



const Signin = ({onToggleLogin}) => {
    
  return (
    <div className="large">
        <Form>
            <Form.Group>
                <Form.Label>Pseudo</Form.Label>
                <Form.Control type="text" placeholder="Enter pseudo" id="pseudo" />
            </Form.Group>
        
            <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Link to="/">
            <Button variant="primary" onClick={onToggleLogin}> 
                     Se connecter 
            </Button>
            </Link>
            <p> Pas encore de compte ? <Link to="/sign-up">Inscris-toi !</Link> </p>
        </Form>
    </div>
  )
}
export default Signin