import React, { useState } from 'react'
import RangeSlider from './range-slider'
import { connect } from 'react-redux';
import { filterBySize } from '../../redux/actions/productsAction'

import classNames from 'classnames'

const Filter = ({ dispatch, dataPrice }) => {
  console.log('Filter Render')
  const [sizes, setSize] = useState(
    [
      { value: "S", active: false },
      { value: "M", active: false },
      { value: "L", active: false },
      { value: "X", active: false },
      { value: "XL", active: false }
    ]
  )

  const reSizeActive = (index) => {
    var newSize = sizes.map((size, i) => i === index ? { ...size, active: !size.active } : size);
    var listSize = newSize.filter(s => s.active).map(s => s.value);
    if (listSize.length <= 0) listSize = newSize.map(s => s.value);
    dispatch(filterBySize(listSize ))
    return newSize;
  }

  return (
    <div  className="">
      <div className="list-size ">
        {sizes.map((size, index) => (
          <div key={size.value} className={classNames('size-item', { "active": size.active })}
            onClick={() => setSize(reSizeActive(index))}
          >
            {size.value}</div>
        ))}
      </div>
      <RangeSlider/>
    </div>
  )
}

export default connect()(Filter)