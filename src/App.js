import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import './App.css';
import IssueList from './components/IssueList';
import IssueDetail from './components/IssueDetail';
import User from './components/User';
// <

function App() {
  // const [ state, setState ] = useState({
  //   boop: 0,
  //   count: 0,
  // });
  
  return (
    // <>
    // <div>
    //   You clicked { state.count } times.
    //   <button onClick={() => setState({...state, count: state.count + 1})}>Click</button>
    // </div>
    // <div>
    //   You booped { state.boop } times.
    //   <button onClick={() => setState({...state, boop: state.boop + 1})}>Boop</button>
    // </div>
    <Router>
      <div className="App">
        <h1>Github Issues</h1>
        <Switch>
          <Route exact path="/" component={IssueList} />
          <Route path="/issue/:issueNumber" component={IssueDetail} />
          <Route exact path="/users" component={User} />
          <Route>
            <h1>404</h1>
          </Route>
        </Switch>
      </div>
    </Router>
    // </>
  );
}

export default App;
