import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Chronometer from './components/Chronometer/';
import Nutrition from './components/Nutrition'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route exact path='/' component={App}/>
        <Route path='/Chronometer' component={Chronometer}/>
        <Route path='/Nutrition' component={Nutrition} />
      </Switch>
    </Router>
    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
