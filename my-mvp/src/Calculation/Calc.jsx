import React, {Component} from 'react'
import Calculation from "./Calculation";


class Calc extends Component {

  state = {
    values: []
  }

  handleChange = (value) => {
    const parse = JSON.parse(value)
    const nextValues = this.state.values.filter(value => parse.categoryID !== value.categoryID)

    if (parse.typeID !== null) {
      nextValues.push(parse)
    }

    this.setState({values: nextValues})
  }

  render() {
    return (
      <Calculation onChange={this.handleChange}/>
    )
  }
}

export default Calc
