import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'


import CustomersList from './components/customers/CustomersList'
import HomePage from './components/HomePage'
import Navbar from './components/Navbar'
import NotFound from "./components/NotFound"
import AddCustomer from './components/customers/AddCustomer'




function App() {
  return (
    <Router>
    <div className="App">
      <Navbar />
      <div className="content">
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/customers">
            <CustomersList />
          </Route>
          <Route path="/addCustomer">
            <AddCustomer/>
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </div>
    </div>
  </Router>
  );
}

export default App;