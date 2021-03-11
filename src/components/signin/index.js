import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import 'components/signin/signin.css' 
import { Link } from 'react-router-dom'
import React from 'react';


const Signin = ({onToggleLogin}) => {
    
  return (
    <div className="header">
      <div className="calltoaction">
        <h2>Connecte toi sur ton espace</h2>
        <div className="form-container">
        <Form>
            <Form.Group>
                <Form.Label>Pseudo</Form.Label>
                <Form.Control type="text" placeholder="Enter pseudo" id="pseudo" />
            </Form.Group>
        
            <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Link to="/tipster-home">
            <Button variant="primary" onClick={onToggleLogin}> 
                     Se connecter 
            </Button>
            </Link>
        </Form>
        </div>
      </div>  
    </div>
  )
}
export default Signin