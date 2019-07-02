import React, { Component } from 'react'
import "../mock/mock"
import axios from "axios"

export default class Right extends Component {
    state = {
        todoList: []
    }
    render() {
        let { todoList } = this.state;
        return (
            <div className="rightBox" ref="rightBox">
                {
                    todoList.map((item, key) => <dl key={key}><dt><img src={item.img} alt="" /></dt><dd><p>{item.title}</p><p>{item.name}</p><p>销售量：{item.num}</p></dd></dl>)
                }
            </div>
        )
    }
    componentDidMount() {
        this.getData()
    }
    componentWillReceiveProps() {
        this.getData()
    }
    getData() {
        axios.get("/navData").then(res => {
            this.setState({
                todoList: res.data.result
            })
        })
    }
}
