import React from "react";
import Button from 'react-bootstrap/Button'
import 'components/signupTipster/index.css'
import { Link } from 'react-router-dom'

const AfterInscriptionTipster = () => {
    return (
<div className="background">
    <div className="main-container">
        <div className="form-container" id="inscritpion">
            <h4> Un email de confirmation t'a été envoyé</h4>
            <h5>Tu peux maintenant essayer de te connecter !</h5>
            <Link to="/sign-in"> <Button variant="warning">
                Connexion
            </Button>
            </Link>
            <Link to="/"><Button variant="warning">
                Accueil
            </Button>
            </Link>
        </div>
    </div>
</div>
)
};

export default AfterInscriptionTipster;