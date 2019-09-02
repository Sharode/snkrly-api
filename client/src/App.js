import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Developer from './components/Developer';
import Navbar from './components/Navbar';
import Landing from './components/Landing';
import Product from './components/Product';


function App() {
  return (
    <Router>
      <div className="text-base bg-transparent font-mono" >
        <Navbar />

        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path='/product' component={Product} />
          <Route exact path="/developer" component={Developer} />

        </Switch>

      </div>

    </Router>




  );
}

export default App;



// Build two parts
//1 How to use the API Interface
//2 Retreiving the data from the apis
