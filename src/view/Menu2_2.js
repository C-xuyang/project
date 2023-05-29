import React, { useRef } from 'react'
import { Layout, Button } from 'antd';
import store from '../redux/store';
const {  Content } = Layout;
export default function Menu2_2() {
    const myref = useRef()
  return (
    <Content>
            <div
              className="site-layout-background"
              style={{
                padding: 24,
                minHeight: 360,
              }}
            >
              <input ref={myref} style={{height:'32px'}}/>
              <Button type='primary' style={{marginLeft:'20px'}} onClick={()=>{
                store.dispatch({
                    type:'menuName',
                    payLoad:myref.current.value
                })
              }}>保存</Button>
            </div>
          </Content>
  )
}
