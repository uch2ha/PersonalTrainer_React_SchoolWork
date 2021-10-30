import logo from './logo.svg';
import './App.css';

import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import CustomersList from './components/customersList';
import TrainingList from './components/trainingsList';
import { purple } from '@material-ui/core/colors';



function App() {
  
  return (
    <div className="App" style={{marginTop: 20}}> 
        <BrowserRouter >
          <div >
            <Link to="/" style={{textDecoration: 'none', fontSize: 25}}>CustomersList</Link>{" "}
            <Link to="/trainingsList" style={{paddingLeft: 15, textDecoration: 'none', fontSize: 25, }}>TrainingList</Link>{" "}
            <Switch>
              <Route exact path="/" component={CustomersList}/>
              <Route exact path="/trainingsList" component={TrainingList}/>
              <Route render={()=> <h1>Page not found</h1>}/>
            </Switch>
          </div>
        </BrowserRouter>
    </div>
  );
}

export default App;
