import Navbar from 'react-bootstrap/Navbar'
import { Link } from 'react-router-dom'
import Nav from 'react-bootstrap/Nav'
import 'components/navbar/navbar.css'
import LoginButton from 'components/login'
import IsLogin from 'islogin.js'
import {useContext} from 'react'
import Button from 'react-bootstrap/Button'
import ProfilButton from 'components/myprofil_button'

const MyNavbar = ({onToggleLogin}) => {
    const isLogin = useContext(IsLogin)
    var goodButton;
    var goodLink;
    
    isLogin ? goodButton = <Button className="btn btn-success" onClick={onToggleLogin}> Se déconnecter </Button> 
    : goodButton = <LoginButton />
    
    isLogin ? goodLink = "/" : goodLink = "/sign-in" 

    console.log(goodLink, "connecté ?", isLogin)
  return (
    <div className="navfix">
      <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="/">Flybet</Navbar.Brand>
          <Nav className="mr-auto">
              <Link to="/" className="lexnav">Home</Link>
              <Link to="#features" className="lexnav">Features</Link>
              <Link to="#pricing" className="lexnav">Pricing</Link>
              <Link to="/my-profil" className="lexnav>"> <ProfilButton /> </Link>
              <Link to={goodLink} className="lexnav"> {goodButton} </Link>
              
          </Nav>
      
      </Navbar>
    </div>
  )
}
export default MyNavbar