
 import React from 'react'
 import { Spin } from 'antd';
 const LazyLoad = (path)=>{
    const Comp = React.lazy(()=>import(`../view/${path}`))
    return (
        <React.Suspense fallback={<div style={{display:'flex',justifyContent:"center",alignItems:'center'}}><Spin tip='Loading...'/></div>}>
            <Comp/>
        </React.Suspense>
    )
 }
 export default LazyLoad