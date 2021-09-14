import React, {Component} from 'react'
import {suppliers} from './suppliers'
import {Card, Col, Row, Space} from 'antd'
import style from './../../../AppStyles.module.css'

export class ResultSuppliers extends Component {

  render() {
    const filterResult = suppliers.filter((item) => this.props.typeIds.includes(item.typeID))

    return (
      <div>
        <Row justify='center'>
          <Col span={24}>
            <h2 className={style.h2}>Suppliers</h2>
          </Col>
        </Row>
        <Row>
          {filterResult.map(item => (
            <Col span={8}>
              <Space direction="vertical">
                <Card title={<div className={style.cardTitle}>{item.marketTitle}</div>} className={style.card}>
                  <div><img alt={''} className={style.img}
                            src={'https://www.designevo.com/res/templates/thumb_small/yellow-and-blue-shopping-cart.webp'}/>
                  </div>
                  <div><strong>Product type:</strong> {item.lable}</div>
                  <div><strong>Products:</strong> {item.type}</div>
                  <div><strong>Location: </strong>{item.location}</div>
                  <div><strong>Phone: </strong>{item.phone}</div>
                  <div><strong>E-Mail: </strong>{item.email}</div>
                  <div><strong>Market description: </strong>{item.description}</div>
                </Card>
              </Space>
            </Col>
          ))}
        </Row>
      </div>
    )
  }
}
