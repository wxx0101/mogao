import axios from "axios"

const shopClick = (shopCar,id) => {
    return dispatch => {
        dispatch({
            type:"DATA",
            shopCar,
            id
        })
    }
}
const addClick = (id) => {
    return dispatch => {
        dispatch({
            type:"ADD",
            id
        })
    }
}
const delClick = (id) => {
    return dispatch => {
        dispatch({
            type:"DEL",
            id
        })
    }
}
const ChangeFn = (checked,id) => {
    return dispatch => {
        dispatch({
            type:"CHANGE",
            checked,
            id
        })
    }
}
const allClick = () => {
    return dispatch => {
        dispatch({
            type:"ALLCHANGE",
        })
    }
}

const getHotSearch = (url) => {
    return dispatch => {
        axios.get(url).then(res => {
            dispatch({
                type:"HOT",
                data: res.data.result
            })
        })
    }
}
const SearchRecord = (list) => {
    return dispatch => {
        dispatch({
            type:"RECORD",
            list
        })
    }
}
const deleteFn = (index) => {
    return dispatch => {
        dispatch({
            type:"DELETE",
            index
        })
    }
}

export default {shopClick,addClick,delClick,ChangeFn,allClick,getHotSearch,SearchRecord,deleteFn}