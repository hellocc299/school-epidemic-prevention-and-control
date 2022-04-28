import React, { memo, useState } from 'react'
import { renderRoutes } from 'react-router-config'
import { MainWrapper } from './style';
import CCMenu from '@/components/main/aside/menu';
import SelfInfo from '@/components/main/aside/selfInfo';
import Head from '@/components/main/head';
import { Redirect } from 'react-router-dom';
import localCache from '@/utils/cache'
import { Layout } from 'antd';
const { Header, Sider, Content } = Layout;



const Main = memo((props) => {
  const { route } = props
  const [collapsed, setCoolapsed] = useState(false)

  const token = localCache.get('token')
  if(!token) {
    return <Redirect to='/login'/>
  }

  const changeCol = (isFold) => {
    setCoolapsed(isFold) 
  }
  return (
    <MainWrapper>
      <Layout>
        <Sider collapsed={collapsed}
               collapsedWidth='0px'>
          <SelfInfo></SelfInfo>
          <CCMenu></CCMenu>
        </Sider>
        <Layout>
          <Header><Head collapsed={collapsed} sendCol={changeCol}/></Header>
          <Content>
          { renderRoutes(route.routes) }
          </Content>
        </Layout>
      </Layout>
    </MainWrapper>
  )
})

export default Main


