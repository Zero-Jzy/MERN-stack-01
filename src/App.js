import React from 'react';
import './App.css';

import ListProducts from './components/listProducts'
import TopNav from './components/topNav'
import 'bootstrap/dist/css/bootstrap.min.css';

import { Container } from 'reactstrap';

import { CardProvider } from './context/CardContext'


function App() {
  return (
    <CardProvider>
      <div>
        <TopNav></TopNav>
        <Container >
          <ListProducts/>
        </Container>
      </div>
    </CardProvider>
  );
}

export default App;
