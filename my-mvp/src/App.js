import './App.css'
import 'antd/dist/antd.css'
import HeaderPart from './Header/Header'
import {Content} from 'antd/es/layout/layout'
import {FooterPart} from './Footer/Footer'
import {ContentPart} from './Content/Content'

const App = () => {
  return (
    <div className="App">
      <HeaderPart/>
      <Content>
        <ContentPart/>
      </Content>
      <FooterPart/>
    </div>
  )
}

export default App
