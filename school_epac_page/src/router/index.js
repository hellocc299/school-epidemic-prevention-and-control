import React from 'react'
import { Redirect } from 'react-router-dom'
import localCache from '@/utils/cache'
import Main from '@/views/main'
import Login from '@/views/login'
import Home from '@/components/main/content/home'
import StudentManage from '@/components/main/content/student-manage'
import Operation from '@/components/main/content/operation'
import Chat from '@/components/main/content/chat'
import HealthyCard from '@/components/main/content/healthy-card'
import LeaveApply from '@/components/main/content/leave-apply'
import ShowInfo from '../components/main/content/show-info'
import LeaveHandle from '@/components/main/content/leave-handle'
import SendAnnounce from '@/components/main/content/announce/send-announce'
import AccounceControl from '@/components/main/content/announce/annouce-control'
import EntireAnno from '@/components/main/content/announce/annouce-control/entire-anno'
import Notice from '@/components/main/content/notice'
import EntireNotice from '../components/main/content/notice/entire-notice'

const routes = [
  {
    path: "/",
    exact: true,
    render: () => {
      const token = localCache.get('token')
      if(token) {
        return <Redirect to="/main" />
      } else {
        return <Redirect to="/login" />
      }
    }
  },
  {
    path: "/main",
    component: Main,
    routes: [
      {
        path: '/main',
        exact: true,
        render: () => (
          <Redirect to='/main/showinfo' />
        )
      },
      {
        path: '/main/home',
        component: Home
      },
      {
        path: '/main/stumanage',
        component: StudentManage
      },
      {
        path: '/main/operation',
        component: Operation
      },
      {
        path: '/main/chat',
        component: Chat
      },
      {
        path: '/main/healthycard',
        component: HealthyCard
      },
      {
        path: '/main/leaveapply',
        component: LeaveApply
      },
      ,
      {
        path: '/main/showinfo',
        component: ShowInfo
      },
      {
        path: '/main/leavehandle',
        component: LeaveHandle
      },
      {
        path: '/main/sendanno',
        component: SendAnnounce
      },
      {
        path: '/main/annocontrol',
        component: AccounceControl
      },
      {
        path: '/main/entireanno',
        component: EntireAnno
      },
      {
        path: '/main/notice',
        component: Notice
      },
      {
        path: '/main/entire',
        component: EntireNotice
      }
    ]
  },
  {
    path: "/login",
    component: Login
  }
]

export default routes
