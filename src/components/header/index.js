import 'components/header/index.css'
import { Link } from 'react-router-dom'


const Header = () => {
  return (
      <div className="header">
        <div className="calltoaction">
            <h1 className="title">Bienvenue sur Flybet</h1>
            <Link to="/sign-in">    
                <button className="btn-header left">Connexion</button>
            </Link>
            <Link to="inscription">   
                <button className="btn-header right">Inscription</button>
            </Link>        
        </div>
      </div>
  )
}
export default Header