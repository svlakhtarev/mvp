import React, {Component} from 'react'
import {Calculation} from './Calculation/Calculation'

export class ContentPart extends Component {

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
    console.log(this.state)
    return (
      <Calculation typeIds={this.state.values.map(item => item.typeID)}
                   isDisabled={this.state.values.length === 0}
                   onChange={this.handleChange}/>
    )
  }
}
