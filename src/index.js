import React from 'react';
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


const App = () => {
  return (
    <Router>
      <MyNavbar />
      <main>
          <Switch>
              <Route path="/" exact>
                  <Home />
              </Route>
              <Route path="/sign-in" exact>
                  <Signin />
              </Route>
              <Route path="/sign-up" exact>
                  <Signup />
              </Route>
        </Switch> 
      </main>
  </Router>
  )
}
ReactDOM.render(<App />, document.getElementById('root'))