import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';

// Components
import LogIn from './components/login';
import ChangePassword from './components/changepassword';
import Modules from './components/modules';
import Readings from './components/readings';
import Tests from './components/tests';
import Test from './components/test';
import Result from './components/result'

// CSS
import './styles/bootstrap.css';
import './styles/style.css';

// JS
// import $ from 'jquery';
// import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';

class App extends Component {
  render() {
    return (
      <LogIn/>
    )
  }
}

ReactDOM.render(
  <BrowserRouter>
    <div>
      <Route exact path="/" component={App}></Route>
      <Route exact path="/login" component={LogIn}></Route>
      <Route exact path="/changepassword" component={ChangePassword}></Route>
      <Route exact path="/modules" component={Modules}></Route>
      <Route exact path="/modules/:id" component={Readings}></Route>
      <Route exact path="/tests" component={Tests}></Route>
      <Route exact path="/tests/:id" component={Test}></Route>
      <Route exact path="/tests/:id/result" component={Result}></Route>
    </div>
    
  </BrowserRouter>,
  document.getElementById('root')
);