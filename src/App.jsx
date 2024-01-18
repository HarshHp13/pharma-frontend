import './App.css'
import Dashboard from './pages/Dashboard'
import LoginForm from '../components/LoginForm'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function Login () {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Dashboard} />
        <Route path="/login" component={LoginForm}/>
      </Switch>
    </Router>
  )
}
export default App
