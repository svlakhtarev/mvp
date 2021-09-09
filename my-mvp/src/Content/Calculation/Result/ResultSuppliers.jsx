import React, {Component} from 'react'
import {suppliers} from './suppliers'
import {Card, Col, Row, Space} from 'antd'
import style from './../Calculation.module.css'

export class ResultSuppliers extends Component {

  render() {
    return (
      <div>
        <Row justify='center'>
          <Col span={24}>
            <h2>Suppliers</h2>
          </Col>
        </Row>
        {suppliers.map(item => (
          <Row gutter={[16, 24]}>
            <Col className="gutter-row" span={24}>
              <h3 className={style.h3}>
                <hr/>
                {item.lable}
                <hr/>
              </h3>
            </Col>
            {item.options.map(option => (
              <Col span={8}>
                <Space direction="vertical">
                  <Card title={option.marketTitle} className={style.card}>
                    <div><strong>Location: </strong>{option.location}</div>
                    <div><strong>Phone: </strong>{option.phone}</div>
                    <div><strong>E-Mail: </strong>{option.email}</div>
                    <div><strong>Market description: </strong>{option.description}</div>
                  </Card>
                </Space>
              </Col>
            ))}
          </Row>
        ))}
      </div>
    )
  }
}
