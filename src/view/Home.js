
  import '../css/ComMenu.css'
  import {  Layout, Menu ,Button} from 'antd';
  import{QuestionCircleOutlined,MenuFoldOutlined,MenuUnfoldOutlined,} from '@ant-design/icons'
  import React, { useEffect, useState } from 'react';
  import logo from '../css/logo.png'
import { Outlet , useNavigate} from 'react-router-dom';
import store from '../redux/store';

  const { Header, Sider } = Layout;

  function getItem(label, key, icon, children) {
    return {
      key,
      icon,
      children,
      label,
    };
  }
 
  const App = () => {
    useEffect(()=>{
        store.subscribe(()=>{
            console.log(store.getState().menuName)
            setMenu(store.getState().menuName)
        })
    },[])
    const [menu,setMenu] = useState(store.getState().menuName)
    const navigate = useNavigate()
    const [collapsed, setCollapsed] = useState(false);
    const toggleCollapsed = () => {
        setCollapsed(!collapsed);
      };
      const items = [
        getItem('菜单一', 'sub1', '', [
          getItem('子菜单1-1', '/home/menu1'),
          getItem('子菜单1-2', '/home/menu2'),
        ]),
        getItem('菜单二', 'sub2', '', [
          getItem('子菜单2-1', '/home/menu3'), 
          getItem(`${menu}`, '/home/menu4')]),
      ];
    return (
      <Layout
        style={{
          minHeight: '100vh',
        }}
      >
        <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)} >
        <div className="logo" >
              <img src={logo}/>
              <h2 >react</h2>
        </div>
        <div style={{width:"100%",display:'flex',justifyContent:'center',alignItems:"center"}}>
        <Button
            type='primary'
        onClick={toggleCollapsed}
        style={{
          margin:'10px 80px'
        
        }}
      >
        {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
      </Button>
        </div>
     
          <Menu theme="dark" defaultSelectedKeys={['/home/menu1']} 
          defaultOpenKeys={['sub1']} mode="inline" items={items} onClick={(item)=>{
            navigate(item.key)
          
          }}/>
        </Sider>
        <Layout className="site-layout">
          <Header
            className="site-layout-background"
            style={{
              padding: 0,
              position:'relative'
            }}
          >
            <div style={{color:'white',position:'absolute' ,right:'20px'}}>
            <QuestionCircleOutlined />
            <span style={{marginLeft:"10px"}}>admin</span>
            </div>
            
            </Header>
         <Outlet/>
        </Layout>
      </Layout>
    );
  };
  export default App;