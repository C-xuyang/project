import {createStore} from 'redux'

const reducer = (prevState={
    menuName:'子菜单2-2'
},action) =>{
    let newState = {...prevState}
    switch(action.type){
        case "menuName":
            newState.menuName=action.payLoad
            return newState
        default:
            return prevState
    }
    
}
const store = createStore(reducer)
export default store