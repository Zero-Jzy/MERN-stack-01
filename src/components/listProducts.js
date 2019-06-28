import React, { Component } from 'react';
import _ from 'lodash'
import axios from 'axios';
import { CardContext } from '../context/CardContext';

import classNames from 'classnames'

import { makeStyles } from '@material-ui/core/styles';
import {
  Card, CardActionArea, CardActions, CardContent,
  CardMedia, Button, Typography, Grid
} from '@material-ui/core';
import { Row, Col } from 'reactstrap';

const classes = makeStyles({
  card: {
    maxWidth: 345,
  },
});

const pInPage = 8;

export default class ListProduct extends Component {

  constructor(props) {
    super(props)

    this.state = {
      page: 1,
      products: this.products
    }
  }

  sizes = [
    { value: "S", active: false },
    { value: "M", active: false },
    { value: "L", active: false },
    { value: "X", active: false },
    { value: "XL", active: false }]

  products = [];

  reSizeActive = (index) => {
    this.sizes[index].active = !this.sizes[index].active;
    var sizeList = this.sizes.filter(a => a.active).map(a => a.value);
    if (sizeList.length === 0) sizeList = ["S", "M", "L", "X", "XL"]
    this.setState({
      products: this.products.filter(p => {
        return _.intersection(sizeList, p.size).length > 0
      })
    })
  }

  componentDidMount() {
    axios.get('http://localhost:3001/products/').then((res) => {
      this.products = res.data
      this.setState({ products: this.products })
    })
  }

  pagination = (page = this.state.page) => {
    var start = pInPage * (page - 1);
    var end = pInPage * page;
    return this.state.products.slice(start, end)
  }

  render() {
    return (
      <div className={classes.root}>
        <Row>
          <Col className="list-size" xs="2">
            {this.sizes.map((size, index) => (
              <div className={classNames('size-item', { "active": size.active })}
                onClick={() => { this.reSizeActive(index) }}
              >
                {size.value}</div>
            ))}
          </Col>
          <Col xs="10">
            <Grid container spacing={3}>
              {this.pagination().map((product) => (
                <Grid key={product.id} item xs={3}>
                  <Card className={classes.card}>
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        alt="Contemplative Reptile"
                        image={product.img}
                        title="Contemplative Reptile"
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                          {product.name}
                        </Typography>
                        <Typography variant="body2" component="h3">
                          {product.price}
                        </Typography>
                        <Typography variant="body2" component="h2">
                          {product.size.map(a => (<span>{a}</span>))}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                    <CardActions>
                      <CardContext.Consumer>
                        {({ updateCard }) => (
                          <Button onClick={() => updateCard({ product })} size="small" color="primary">Add to card</Button>
                        )}
                      </CardContext.Consumer>

                    </CardActions>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Col>
        </Row>


      </div>
    )
  }
}


