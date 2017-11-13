import React from 'react'
import PropTypes from 'prop-types'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

//importing components/containers
import {Layout} from 'antd';
import HeaderContainer from '../containers/HeaderContainer';
import ContentComponent from '../components/Content/Content';
import SiderComponent from '../components/Sider/Sider';
import FooterComponent from '../components/Footer/Footer';

const {Header, Content, Sider, Footer} = Layout;

//importing actions

class App extends React.Component {
  static propsTypes = {};

  render() {
    return (
      <Layout>
        <Header className='ant-layout-header'>
          <HeaderContainer/>
        </Header>
        <Layout>
          <Sider
            className='ant-layout-sider'
            collapsible={true}
          >
            <SiderComponent/>
          </Sider>
          <Content className='ant-layout-content'>
            <ContentComponent/>
          </Content>
        </Layout>
        <Footer className='ant-layout-footer'>
          <FooterComponent/>
        </Footer>
      </Layout>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
