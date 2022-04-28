import { HomeOutlined, 
         UsergroupAddOutlined, 
         CommentOutlined, 
         UserOutlined, 
         SolutionOutlined,
         FormOutlined,
         MessageOutlined
} from '@ant-design/icons'
export const menus = (type) => {
  if(type === 1) {
    return [
      {
        menuName: "我的首页",
        menuPath: '/main/home',
        iconCpn: <HomeOutlined />
      },
      {
        menuName: "学生管理",
        menuPath: '/main/stumanage',
        iconCpn: <UsergroupAddOutlined />
      },
      {
        menuName: "通知管理",
        menuPath: '/main/annomanage',
        iconCpn: <CommentOutlined />,
        children: [
          {
          menuName: "发布通知",
          menuPath: '/main/sendanno',
          iconCpn: <CommentOutlined />,
          },
          {
            menuName: "管理通知",
            menuPath: '/main/annocontrol',
            iconCpn: <CommentOutlined />,
          }
        ]
      },
      {
        menuName: "班级管理",
        menuPath: '/main/operation',
        iconCpn: <UsergroupAddOutlined />
      },
      {
        menuName: "个人信息",
        menuPath: '/main/showinfo',
        iconCpn: <UserOutlined />
      },
      {
        menuName: "我的聊天",
        menuPath: '/main/chat',
        iconCpn: <CommentOutlined />
      }
    ]
  } else if(type === 3) {
    return [
      {
        menuName: "我的首页",
        menuPath: '/main/home',
        iconCpn: <HomeOutlined />
      },
      {
        menuName: "学生管理",
        menuPath: '/main/stumanage',
        iconCpn: <UsergroupAddOutlined />
      },
      {
        menuName: "请假管理",
        menuPath: '/main/leavehandle',
        iconCpn: <SolutionOutlined />
      },
      {
        menuName: "个人信息",
        menuPath: '/main/showinfo',
        iconCpn: <UserOutlined />
      },
      {
        menuName: "通知管理",
        menuPath: '/main/annomanage',
        iconCpn: <MessageOutlined />,
        children: [
          {
          menuName: "发布通知",
          menuPath: '/main/sendanno',
          iconCpn: <CommentOutlined />,
          },
          {
            menuName: "管理通知",
            menuPath: '/main/annocontrol',
            iconCpn: <CommentOutlined />,
          }
        ]
      },
      {
        menuName: "我的聊天",
        menuPath: '/main/chat',
        iconCpn: <CommentOutlined />
      }
    ] 
  } else {
    return [
      {
        menuName: "我的通知",
        menuPath: '/main/notice',
        iconCpn: <MessageOutlined />
      },
      {
        menuName: "健康填报",
        menuPath: '/main/healthycard',
        iconCpn: <FormOutlined />
      },
      {
        menuName: "请假申请",
        menuPath: '/main/leaveapply',
        iconCpn: <SolutionOutlined />
      },
      {
        menuName: "个人信息",
        menuPath: '/main/showinfo',
        iconCpn: <UserOutlined />
      },
      {
        menuName: "我的聊天",
        menuPath: '/main/chat',
        iconCpn: <CommentOutlined />
      }
    ]
  }
}