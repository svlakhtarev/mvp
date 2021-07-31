import React, {Component} from 'react'
import Calculation from "./Calculation";


class Calc extends Component {

  state = {
    values: []
  }

  handleChange = (event) => {
    console.dir(event.target.value)
    const parse = JSON.parse(event.target.value)
    const nextValues = this.state.values.filter(value => parse.categoryID !== value.categoryID)

    if (parse.typeID !== null) {
      nextValues.push(parse)
    }

    this.setState({values: nextValues})
  }

  render() {
    console.dir(this.state.values)
    return (
      <div>
        <Calculation onChange={this.handleChange}/>
      </div>
    )
  }
}

export default Calc
