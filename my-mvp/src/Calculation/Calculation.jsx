import React from 'react'
import {filter} from './filter'
import Result from "./Result";
import {Button, Col, Row, Select} from "antd";


class Calculation extends React.Component {

  state = {
    resultCallState: false
  }
  resultStateHandler = () => {
    this.setState({
      resultCallState: true
    })
  }

  render() {
    let {onChange} = this.props;

    return <div>
      {filter.map(item => (
        <div key={item.categoryID}>
          <Row justify="start">
            <Col span={3} offset={9}>
            <strong>{item.lable}</strong>
            </Col>
            <Col span={6}>
            <Select defaultValue={item.options.typeID[0]} onChange={onChange}>
              {item.options.map(option => (
                <option key={option.typeID}
                        value={JSON.stringify({
                          typeID: option.typeID,
                          categoryID: item.categoryID
                        })}>{option.title}</option>
              ))}
            </Select>
            </Col>
          </Row>
        </div>
      ))}
      <div>
        <Button onClick={this.resultStateHandler}>Result</Button>
        {this.state.resultCallState ? <Result/> : null}
      </div>
    </div>
  }
}

export default Calculation
