import React, { Component } from 'react'
import axios from "axios"
import "../mock/mock"
import { connect } from 'react-redux'
import {bindActionCreators} from "redux"
import Actions from "../store/Actions"
 
class Eetails extends Component {
    state = {
        editData: {},
        shopCar: []
    }
    render() {
        let {editData} = this.state;
        return (
            <div className="editBox">
                <h2>{editData.title}</h2>
                <p>￥<b>{editData.price}</b></p>
                <button onClick={this.shopClick.bind(this,editData)}>加入购物车</button>
            </div>
        )
    }
    componentDidMount(){
        let {match: {params: {id}}} = this.props
        axios.post("/edit",{
            id
        }).then(res => {
            this.setState({
                editData: res.data.result
            })
        })
    }
    shopClick(editData){
        let {shopClick,match: {params: {id}},history} = this.props
        let {shopCar} = this.state
        let flag = shopCar.find(item => item.id === id)
        if(flag){
            return ;
        }else{
            shopClick(editData,id)
        }
        history.push("/ShopCar")
    }
}


const mapStateToProps = (state) => {
    return {

    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(Actions,dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Eetails)
