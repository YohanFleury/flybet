import Button from 'react-bootstrap/Button'
import {useState} from 'react'
import 'pages/tipsterHome/index.css'
import BetForm from 'components/betForm'

const TipsterHome = () => {
    const [component, setComponent] = useState("")
    const handlePublication = () => {
      setComponent(<BetForm />)
    }
    const handleDash = () => {
        setComponent("dash")
    }
    const handleParis = () => {
        setComponent("Paris")
    }
  return (
      <div className="tipster-home">  
        <div>    
            <h1>Hello #Name, Bienvenue sur ta page Tipster !</h1>
            <Button variant="primary" onClick={handlePublication}>Publier un prono</Button>
            <Button variant="warning" onClick={handleDash}>Mon dashboard</Button>
            <Button variant="dark" onClick={handleParis}> Mes paris</Button>
        </div>
        <div className="flex-component">
            {component}
        </div>
      </div>
  )
}
export default TipsterHome