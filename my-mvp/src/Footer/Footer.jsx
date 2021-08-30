import {Col, Row} from 'antd'
import {Footer} from 'antd/es/layout/layout'

export const FooterPart = () => {
  return <Footer>
    <Row>
      <Col span={24}>Powered by <a href="https://github.com/svlakhtarev" target='_blank'>Serj Lakhtarev</a> and <a
        href="https://github.com/chebotiuk" target='_blank'>Pavlo Chebotiuk</a></Col>
    </Row>
  </Footer>
}
