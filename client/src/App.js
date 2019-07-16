import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Products from './components/products'
import TopNav from './components/TopNav'
import 'bootstrap/dist/css/bootstrap.min.css';
 
import './App.css';

import { Container } from 'reactstrap';


function App() {
  return (
    <Provider store={store}>
      <Router>
        <TopNav></TopNav>
        <Container >
          <Route exact path="/" component={Products}/>
          {/* <Products /> */}
        </Container>
      </Router>

    </Provider>
  );
}

export default App;
