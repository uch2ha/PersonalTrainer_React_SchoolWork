import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import { createMuiTheme, ThemeProvider } from '@material-ui/core'
import { purple } from '@material-ui/core/colors'
import Layout from './components/Layout'
import CustomersList from './components/customers/customersList'
import TrainingsList from './components/trainings/trainingsList'




function App() {
  return (
    <ThemeProvider >
      <Router>
        <Layout>
          <Switch>
            <Route exact path="/">
              <CustomersList />
            </Route>
            <Route path="/trainigsList">
              <TrainingsList />
            </Route>
          </Switch>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;