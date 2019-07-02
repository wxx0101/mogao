import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavLink } from "react-router-dom"
import { bindActionCreators } from "redux"
import Actions from "../store/Actions"

class ShopCar extends Component {
    render() {
        let { shopCarData, addClick,ChangeFn, delClick,AllPrice,allClick,AllChecked } = this.props
        return (
            <div className="shopBox">
                <h2><b onClick={this.backFn.bind(this)}>返回</b> 购物车</h2>
                <div className="wrap">
                    {
                        shopCarData.length ? shopCarData.map((item, key) => <div className="con" key={key}><input type="checkbox" checked={item.checked} onChange={() => {ChangeFn(item.checked,item.id)}} /><p>{item.title}</p>
                            <p>￥<b>{item.price}</b></p>
                            <p><span onClick={() =>item.checked && delClick(item.id)}>-</span><i>{item.num}</i><span onClick={() => item.checked && addClick(item.id)}>+</span></p></div>) : <b>购物车为空，快去<NavLink to="/">首页</NavLink>逛逛吧</b>
                    }
                    <ul><li><input checked={AllChecked} type="checkbox" onChange={() => allClick()} />全选</li><li>总价{AllPrice}</li></ul>
                </div>
            </div>
        )
    }
    backFn() {
        let { history } = this.props
        history.push("/Download/Combat")
    }
}



const mapStateToProps = (state) => {
    return {
        shopCarData: state.shopFn.shopCarData,
        AllPrice: state.shopFn.AllPrice,
        AllChecked: state.shopFn.AllChecked
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(Actions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ShopCar)
