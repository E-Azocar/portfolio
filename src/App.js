import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './pages/Home';
import HomeEn from './pages/Home_en';
import Page404 from './pages/Page404';

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/en" component={HomeEn} />
        <Route component={Page404} />
      </Switch>
    </Router>
  );
}

export default App;