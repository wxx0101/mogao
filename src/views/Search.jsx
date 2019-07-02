import React, { Component } from 'react'
import { connect } from 'react-redux'
import "../mock/mock"
import Actions from "../store/Actions"
import { bindActionCreators } from "redux";

class Search extends Component {
    state = {
        val: ""
    }
    render() {
        let { val } = this.state
        let { data, searchArr,deleteFn } = this.props
        return (
            <div className="searchBox">
                <h2>搜索</h2>
                <p><input type="text" placeholder="搜索" value={val} onChange={(e) => {
                    this.setState({
                        val: e.target.value
                    })
                }} /><button onClick={this.SearchClick.bind(this)}>搜索</button> </p>
                <ul>
                    <b>热门搜索</b>
                    {
                        data.map((item, key) => <li key={key}>{item.title}</li>)
                    }
                </ul>
                <ul>
                    <b>搜索记录</b>
                    {
                        searchArr.map((item, key) => <li key={key}>{item.title} <span onClick={()=>deleteFn(key)}>X</span></li>)
                    }
                </ul>
            </div>
        )
    }
    componentDidMount() {
        this.props.getHotSearch("/hotSearch")
    }
    SearchClick() {
        let { val } = this.state;
        let {searchArr} = this.props
        let flag = searchArr.findIndex(item => item.title == val)
        if (flag == -1) {
            let list = searchArr.concat({ title: val })
            this.props.SearchRecord(list)
        }else{
            return ;
        }
        this.setState({
            val: ""
        })
    }
}

const mapStateToProps = (state) => {
    return {
        data: state.searchFn.data,
        searchArr: state.searchFn.searchArr
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(Actions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Search)
