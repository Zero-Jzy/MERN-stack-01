
import React from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../../redux/actions/cartAction'
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';

const CardProduct = ({ product, dispatch }) => {
  return (
    <div>
      <Card>
        <CardImg top width="100%" src={product.img} alt="Card image cap" />
        <CardBody>
          <CardTitle>{product.name}</CardTitle>
          <CardSubtitle>{product.price}</CardSubtitle>
          <CardText>{product.size.map(p => (<span key={p}>{p}</span>))}</CardText>
          <Button onClick={() => dispatch(addToCart(product))}>Add to cart</Button>
        </CardBody>
      </Card>
    </div>
  );
};


export default connect()(CardProduct)