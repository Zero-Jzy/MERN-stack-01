import React, { Component } from 'react';
import './range-slider.css'
import { connect } from 'react-redux';
import { filterByPrice } from '../../../redux/actions/productsAction'

function RangeSlider({data , filterByPrice}) {
  console.log('SLider Rerender')
  const min = Math.min(...data)
  const max = Math.max(...data)

  const input1 = React.createRef()
  const input2 = React.createRef()
  const startTxt = React.createRef()
  const endTxt = React.createRef()
  var input1Val, input2Val;
  const HandleInput = () => {
    input1Val = parseInt(input1.current.value);
    input2Val = parseInt(input2.current.value);


    if (input1Val > input2Val) {
      startTxt.current.textContent = input2Val;
      endTxt.current.textContent = input1Val;
    } else {
      startTxt.current.textContent = input1Val;
      endTxt.current.textContent = input2Val;
    }

  }

  const handleChange = () => {

    var start = parseInt(input1Val);
    var end = parseInt(input2Val);

    if (start > end) {
      start = input2Val;
      end = input1Val;
    } else {
      start = input1Val;
      end = input2Val;
    }

    filterByPrice({ start, end })
  }


  return (
    <div className="slider">
      <div className="startTxt" ref={startTxt}>{min}</div>
      <div>
        <ChartPrice data={data} />
        <div className="multi-range">
          <input
            type="range"
            min={min}
            max={max}
            defaultValue={Math.min(...data)}
            onInput={HandleInput}
            ref={input1}
            onMouseUp={handleChange}
          />
          <input
            type="range"
            min={min}
            max={max}
            defaultValue={Math.max(...data)}
            ref={input2}
            onInput={HandleInput}
            onMouseUp={handleChange}
          />
        </div>
      </div>

      <div className="endTxt" ref={endTxt}>{max}</div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    data: state.products.products.map(p => parseInt(p.price.slice(1)))
  }
}

export default connect(mapStateToProps, { filterByPrice })(RangeSlider)

class ChartPrice extends Component {
  constructor(props) {
    super(props)
    this.chartPrice = React.createRef()
  }

  componentDidUpdate() {

    var canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    ctx.fillStyle = "#ddd";
    var dataPrice = convertData(this.props.data);
    const width = canvas.width / dataPrice.length;
    const height = canvas.height;

    for (let i = 0; i < dataPrice.length; i++) {
      ctx.fillRect(i * width, height - dataPrice[i], width, dataPrice[i])
    }
    var myCanvas = document.getElementById('chartCanvas')
    myCanvas.innerHTML = '';
    myCanvas.appendChild(canvas)
  }

  render() {
    return (
      <div id="chartCanvas"></div>
    )
  }
}

function convertData(data) {
  data = data.sort((a, b) => a - b)
  var newData = data.reduce((obj, a) => {
    obj[a] = obj[a] ? obj[a] + 1 : 1;
    return obj;
  }, {})
  var result = Object.values(newData);
  var max = Math.max(...result);

  return result.map(a => {
    return ((a * 100) / max);
  })

}