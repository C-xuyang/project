import { Navigate } from 'react-router-dom'
import LazyLoad from '../components/LazyLoad'
const elements= [
    {
        path:'/',
        element:<Navigate to='/home'/>
    },
    {
        path:'/home',
        element:LazyLoad('Home'),
        children:[
            {
                path:'',
                element:<Navigate to='/home/menu1'/>
            },
            {
                path:'menu1',
                element:LazyLoad('Menu1_1')
            },{
                path:'menu2',
                element:LazyLoad('Menu1_2')
            },{
                path:'menu3',
                element:LazyLoad('Menu2_1')
            },{
                path:'menu4',
                element:LazyLoad('Menu2_2')
            }
        ]
    },{
        path:'/login',
        element:LazyLoad('Login')
    }
]
export default  elements
