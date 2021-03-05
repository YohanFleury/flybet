import Navbar from 'react-bootstrap/Navbar'
import { Link } from 'react-router-dom'
import Nav from 'react-bootstrap/Nav'
import 'index.css'


const MyNavbar = () => {
  return (
    <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/">Flybet</Navbar.Brand>
        <Nav className="mr-auto">
            <Link to="/" className="navlinks">Home</Link>
            <Link to="#features" className="navlinks">Features</Link>
            <Link to="#pricing" className="navlinks">Pricing</Link>
            <Link to="/sign-in">Se connecter</Link>
        </Nav>
    
    </Navbar>
  )
}
export default MyNavbar