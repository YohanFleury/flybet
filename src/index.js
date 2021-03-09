import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './pages/home' 
import MyNavbar from './components/navbar'
import Signin from './components/signin'
import Signup from './components/signup'
import IsLogin from "islogin.js";
import MyProfil from './pages/myprofil'

const App = () => {
  const [isLogin, setIsLogin] = useState(false)
    const handleLogin = () => {
      setIsLogin(e => !e)
    }

  return (
    <IsLogin.Provider value={isLogin}>
      <Router>
        <MyNavbar onToggleLogin={handleLogin} />
        <main>
            <Switch>
                <Route path="/" exact>
                    <Home />
                </Route>
                <Route path="/sign-in">
                    <Signin onToggleLogin ={handleLogin} />
                </Route>
                <Route path="/sign-up">
                    <Signup />
                </Route>
                <Route path="/my-profil">
                    <MyProfil />
                </Route>
            </Switch> 
        </main>
      </Router>
    </IsLogin.Provider>
  )
}
ReactDOM.render(<App />, document.getElementById('root'))