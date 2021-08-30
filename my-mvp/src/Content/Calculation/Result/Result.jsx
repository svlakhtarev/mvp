import React, {Component} from 'react'
import {ResultMap} from './ResultMap'
import {ResultSuppliers} from './ResultSuppliers'

export class Result extends Component {
  render() {
    return (
      <div>
        <ResultSuppliers/>
        <ResultMap/>
      </div>
    )
  }
}
