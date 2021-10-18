import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './components/pages/homepage.jsx';
import NotFound from './components/pages/NotFound.jsx';
import Shop from './components/pages/shop/shop';
import './App.scss';


function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={Shop} />
        <Route path="*" component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;