import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/pages/home.jsx';
import NotFound from './components/pages/NotFound.jsx';
import Shop from './components/pages/shop/shop';
import SingleItem from './components/single_item/single_item.jsx';
import './App.scss';


function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/Cool-Store' component={Home} />
        <Route path='/shop' component={Shop} />
        <Route path='/product/:id' component={SingleItem} />
        <Route path="*" component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;