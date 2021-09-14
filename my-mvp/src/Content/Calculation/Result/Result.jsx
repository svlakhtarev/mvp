import React, {Component} from 'react'
import {ResultMap} from './ResultMap'
import {ResultSuppliers} from './ResultSuppliers'
import style from './../../../AppStyles.module.css'

export class Result extends Component {
  render() {
    return (
      <div className={style.result}>
        <ResultSuppliers typeIds={this.props.typeIds}/>
        <ResultMap/>
      </div>
    )
  }
}
