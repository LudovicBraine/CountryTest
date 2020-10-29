import React from 'react';
import './App.css';
import ListPays from "./components/ListPays.components"
import {Link, BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import InfoPays from "./components/InfoPays.components"
function App() {
  return (
    <div className="App">
      <h1>List des pays dans le monde </h1>
        <Router>
          <Switch>
            <Route path="/"  exact component={ListPays} />
            <Route path="/:id"  component={InfoPays }/>
          </Switch>
        </Router>
    </div>
  );
}

export default App;
