import React, {useEffect} from 'react'
import { connect } from 'react-redux';
import CardProduct from './CardProduct';
import { Row, Col } from 'reactstrap';
import _ from 'lodash';
import loadingImg from './/loading.gif'

const ListProduct = ({ products, loading }) => {


  useEffect(()=>{console.log('List Products Render')})
  return loading ? (<div className="loading"><img src={loadingImg} alt="alo"/></div>) : (
    <Row>
      {products.map(product => (
        <Col key={product._id} xs="3">
          <CardProduct product={product} />
        </Col>
      ))}
    </Row>
  )
}

const mapstateToProps = (state) => {
  var {price, size} = state.products.filter
  return { 
    products : state.products.products.filter(p => {
    var priceNe = parseInt(p.price.slice(1))
    return (priceNe >= price.start
      && priceNe <= price.end
      && _.difference(p.size, size).length < p.size.length
    )}),
    loading: state.products.loading
   }
}

export default connect(mapstateToProps)(ListProduct);