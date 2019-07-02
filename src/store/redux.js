import { createStore, combineReducers, applyMiddleware } from "redux"
import thunk from "redux-thunk"

const shopFn = (state = { shopCarData: [], AllPrice: 0, AllChecked: false }, action) => {
    const newState = JSON.parse(JSON.stringify(state))
    switch (action.type) {
        case "DATA":
            let flag = newState.shopCarData.findIndex(item => item.id === action.id)
            if (flag === -1) {
                newState.shopCarData.push(action.shopCar)
            }
            newState.shopCarData.forEach(item => {
                if (item.checked) {
                    newState.AllChecked = true
                } else {
                    newState.AllChecked = false
                }
            })
            return newState
        case "ADD":
            newState.shopCarData.find(item => item.id === action.id).num++
            newState.AllPrice += newState.shopCarData.find(item => item.id === action.id).price * 1
            return newState;
        case "DEL":
            if (newState.shopCarData.find(item => item.id === action.id).num >= 1) {
                newState.shopCarData.find(item => item.id === action.id).num--
            }
            newState.AllPrice -= newState.shopCarData.find(item => item.id === action.id).price * 1
            return newState;
        case "CHANGE":
            let index =  newState.shopCarData.findIndex(item => item.id === action.id)
            newState.shopCarData[index].checked = !action.checked
            newState.AllPrice = !action.checked ? newState.AllPrice + newState.shopCarData[index].price * newState.shopCarData[index].num : newState.AllPrice - newState.shopCarData[index].price * newState.shopCarData[index].num
            newState.AllChecked = newState.shopCarData.every(item => item.checked)
            return newState;
        case "ALLCHANGE":
            newState.AllChecked = !newState.AllChecked;
            newState.shopCarData.forEach(item => item.checked = newState.AllChecked)
            newState.AllPrice = newState.AllChecked ? newState.shopCarData.reduce((prev,next) => {
                return prev + (next.num * next.price)
            },0) : 0
            return newState;
        default:
            return state
    }
}

const searchFn = (state = {data: [],searchArr: []}, action) => {
    const newState = JSON.parse(JSON.stringify(state))
    switch(action.type){
        case "HOT":
            newState.data = action.data
            return newState
        case "RECORD": 
            newState.searchArr = action.list
            return newState;
        case "DELETE":
            let {index} = action
            newState.searchArr.splice(index,1)
            return newState;
        default :
            return state
    }
}

const reducer = combineReducers({
    shopFn,
    searchFn
})
const store = createStore(reducer, applyMiddleware(thunk))
export default store;