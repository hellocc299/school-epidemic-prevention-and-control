import React, { memo, useEffect, useState } from 'react'
import { useHistory, withRouter } from 'react-router-dom'
import { shallowEqual, useSelector } from 'react-redux'
import { CCMenuWrapper } from './style'
import { menus } from './config/diffShow'
import { Menu } from 'antd'

const CCMenu = memo((props) => {
  const history = new useHistory()
  const path = history.location.pathname
  const selfInfo = useSelector(state => state.login.selfInfo, shallowEqual)
  const userMenus = menus(selfInfo.type)
  
  const jump = (menu) => {
    history.push({ pathname: menu.menuPath })
  }

  return (
    <CCMenuWrapper>
      <Menu mode="inline"
            theme="dark"
            defaultSelectedKeys={[path]}>
        { userMenus.map((menu) => {
          return(
            menu.children ? 
            (<Menu.SubMenu title={menu.menuName} key={menu.menuPath} icon={ menu.iconCpn }>
              { menu.children.map((subMenu) => {
                return(
                <Menu.Item key={subMenu.menuPath} onClick={() => jump(subMenu)}>
                  <span className='icon'>{subMenu.iconCpn}</span> 
                  <span>{subMenu.menuName}</span>
                </Menu.Item>
                  )
                }) 
              }
            </Menu.SubMenu>) :
            (<Menu.Item key={menu.menuPath} onClick={() => jump(menu)}>
              <span className='icon'>{menu.iconCpn}</span> 
              <span>{menu.menuName}</span>
            </Menu.Item>
            )   
          )
        })}
      </Menu>
    </CCMenuWrapper>
  )
})

export default withRouter(CCMenu)