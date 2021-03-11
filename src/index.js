import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './pages/home' 
import Signin from './components/signin'
import IsLogin from "islogin.js";
import MyProfil from './pages/myprofil'
import BeforeSignup from 'components/beforesignup';
import SignupForTipster from './components/signupTipster';
import SignupForParieur from 'components/signupParieur';

const App = () => {
  const [isLogin, setIsLogin] = useState(false)
    const handleLogin = () => {
      setIsLogin(e => !e)
    }

  return (
    <IsLogin.Provider value={isLogin}>
      <Router>
        <main>
            <Switch>
                <Route path="/" exact>
                    <Home />
                </Route>
                <Route path="/sign-in">
                    <Signin onToggleLogin ={handleLogin} />
                </Route>
                <Route path="/sign-up/tipster">
                    <SignupForTipster />
                </Route>
                <Route path="/sign-up/parieur">
                    <SignupForParieur />
                </Route>
                <Route path="/my-profil">
                    <MyProfil />
                </Route>
                <Route path="/inscription">
                    <BeforeSignup />
                </Route>
            </Switch> 
        </main>
      </Router>
    </IsLogin.Provider>
  )
}
ReactDOM.render(<App />, document.getElementById('root'))