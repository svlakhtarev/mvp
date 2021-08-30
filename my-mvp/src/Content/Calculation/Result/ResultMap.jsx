import React, {Component} from 'react'
import {GoogleMap, LoadScript, Marker} from '@react-google-maps/api'
import {Col, Row} from 'antd'

const containerStyle = {
  width: 'auto',
  height: '400px'
}

const center = {
  lat: 50.468095,
  lng: 30.546211
}

const position = {
  lat: 50.468095,
  lng: 30.546211
}

const onLoad = marker => {
  console.log('marker: ', marker)
}

export class ResultMap extends Component {

  render() {
    return (
      <Row justify='center' gutter={{xs: 8, sm: 16, md: 24, lg: 32}}>
        <Col className="gutter-row" span={24}>
          <LoadScript
            googleMapsApiKey="AIzaSyC_V9_5I2A-wfQgexfJLNQ7UNW0Lq7gVfM"
          >
            <GoogleMap
              mapContainerStyle={containerStyle}
              center={center}
              zoom={10}
            >
              <Marker
                onLoad={onLoad}
                position={position}
              />
              { /* Сделать: показ фейковой локации пользователя. Показ точек поставщиков на основе данных из supliers */}
              <></>
            </GoogleMap>
          </LoadScript>
        </Col>
      </Row>
    )
  }
}
