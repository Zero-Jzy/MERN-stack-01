import React, { Component } from "react";
import ListProduct from './ListProduct'
import Filter from './Filter'

import { connect } from 'react-redux';
import { fetchProducts } from '../../redux/actions/productsAction'

import {
  Row,
  Col
} from 'reactstrap'


class Products extends Component {

  componentDidMount() {
    this.props.fetchProducts()
  }

  render() {
    console.log('product page render')
    return (
      <Row>
        <Col xs="3" >
          <Filter/>
        </Col>
        <Col xs="9">
          <ListProduct/>
        </Col>
      </Row>
    )
  }
}


export default connect(null, { fetchProducts })(Products)