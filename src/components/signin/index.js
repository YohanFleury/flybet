import Form from 'react-bootstrap/form'
import Button from 'react-bootstrap/button'
import 'components/signin/signin.css' 
import { Link } from 'react-router-dom'



const Signin = () => {
  return (
    <div className="large">
        <Form>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
        
            <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>
                <Form.Group controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
            <Button variant="primary" type="submit">
            Submit
            </Button>
            <p> Pas encore de compte ? <Link to="/sign-up">Inscris toi !</Link> </p>
        </Form>
    </div>
  )
}
export default Signin