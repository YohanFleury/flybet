import 'components/header/index.css'
import { Link } from 'react-router-dom'

const BeforeSignup = () => {
  return (
    <div className="header">
    <div className="calltoaction">
        <h3 className="title">Choisis le statut de ton choix </h3>
        <Link to="/sign-up/tipster">    
            <button className="btn-header left">TIPSTER</button>
        </Link>
        <Link to="sign-up/parieur">   
            <button className="btn-header right">PARIEUR</button>
        </Link>        
    </div>
  </div>
  )
}
export default BeforeSignup