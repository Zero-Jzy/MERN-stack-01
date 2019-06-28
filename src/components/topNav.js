import React, { useState, useContext } from 'react';
import { CardContext } from '../context/CardContext';
import ListProductCard from '../components/ListProductsInCard';

import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';

export default function () {

  const { card } = useContext(CardContext);
  const [open, toggle] = useState(false);
  var countArr = [...card.values()].map(a => a.count);
  var count = countArr ? countArr.reduce((a, b) => a + b, 0) : 0;
  return (  
    <div className="mb-4">
      <Button className="position-fixed" onClick={() => toggle(!open)}>Open ({count})</Button>
      <Drawer anchor="right" open={open} onClose={() => toggle(false)}>
        <Button onClick={() => toggle(false)}>close</Button>
        <ListProductCard />
      </Drawer>

    </div>
  );
}