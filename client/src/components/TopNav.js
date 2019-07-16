import React, { useState } from 'react';
import { connect } from 'react-redux'
import ListProductCard from './ListProductsInCard';

import Drawer from '@material-ui/core/Drawer';
// import Button from '@material-ui/core/Button';
import {
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Container,
  Button
} from 'reactstrap';
import ModalRegister from './auth/ModalRegister';
import ModalLogin from './auth/ModalLogin';

function TopNav({ count }) {
  console.log('top nav render')

  const [openCart, toggleCart] = useState(false);



  return (
    <div className="top-nav">
      <Navbar color="light" light expand="md">
        <Container>
          <NavbarBrand href="/">reactstrap</NavbarBrand>
          <NavbarToggler />
          <Nav className="ml-auto" navbar>
            <NavItem>
              <ModalRegister />
              {/* <Button color="link" >Components</Button> */}
            </NavItem>
            <NavItem>
              <ModalLogin />
              {/* <Button color="link">GitHub</Button> */}
            </NavItem>
            <NavItem>
              <Button color="link" onClick={() => toggleCart(!openCart)}>Cart ({count})</Button>
            </NavItem>
          </Nav>
        </Container>
      </Navbar>
      <Drawer anchor="right" open={openCart} onClose={() => toggleCart(false)}>
        <Button onClick={() => toggleCart(false)}>close</Button>
        <ListProductCard />
      </Drawer>
    </div>


  );
}

function mapStateToProps(state) {
  var listPrice = Array.from(state.cart.products.values()).map(p => p.count);
  return { count: listPrice.length > 0 ? listPrice.reduce((a, b) => a + b) : 0 }
}

export default connect(mapStateToProps)(TopNav)