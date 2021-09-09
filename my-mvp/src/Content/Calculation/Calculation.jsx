import React, {Component} from 'react'
import {Button, Card, Col, Row, Select, Space} from 'antd'
import style from './Calculation.module.css'
import {filter} from './filter'
import {Result} from './Result/Result'

export class Calculation extends Component {

  state = {
    resultCallState: false
  }

  resultStateHandler = () => {
    this.setState({
      resultCallState: true
    })
  }

  render() {
    let {onChange} = this.props

    return <div className={style.content}>
      <Row justify='center'>
        <Col span={12}>
          <h2>Description</h2>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rhoncus velit in scelerisque lobortis. Maecenas
          gravida bibendum justo, quis elementum sapien venenatis at. Etiam viverra, purus nec placerat molestie, eros
          arcu tristique est, ac commodo justo est a ipsum. Etiam eget lacus sed sapien dictum mattis et quis ex. Cras
          blandit tempor tincidunt. Sed leo diam, molestie et vulputate ac, dignissim et dui. Quisque in lorem non nulla
          lobortis sollicitudin nec quis leo. Phasellus vitae quam in felis bibendum mollis.
        </Col>
      </Row>
      <Row justify='center' gutter={{xs: 8, sm: 16, md: 24, lg: 32}}>
        {/*Обернуть ещё и фильтрацией всего массива Фильтр, для того, чтобы фильтровать по value с typeID. По нажатию кнопки, отдать отфильтрованные данные в useState, чтобы при нажатии на результат, выдать результат*/}
        {filter.map(item => (
          <Col className="gutter-row" span={6}>
            <Space direction="vertical" key={item.categoryID}>
              <Card title={item.lable} className={style.card}>
                <Select defaultValue={item.options[0].title} onChange={onChange}>
                  {item.options.map(option => (
                    <option key={option.typeID}
                            value={JSON.stringify({
                              typeID: option.typeID,
                              categoryID: item.categoryID
                            })}>{option.title}</option>
                  ))}
                </Select>
              </Card>
            </Space>
          </Col>
        ))}
      </Row>
      <Button className={style.button} onClick={this.resultStateHandler}>Result</Button>
      {this.state.resultCallState ? <Result/> : null}
      {/*как сделать так, чтобы кнопка была не активна (disabled??), если хоть один Select value = null ? Обращение к тому, что лежит в State?*/}
    </div>
  }
}
