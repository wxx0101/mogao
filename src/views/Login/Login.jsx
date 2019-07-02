import React, { Component } from 'react'
import axios from "axios"
import "../../mock/mock"
import { NavLink } from "react-router-dom"

export default class Login extends Component {
    state = {
        username: "",
        pwd: ""
    }
    render() {
        let { username, pwd } = this.state
        return (
            <div className="loginBox">
                <h2>登录</h2>
                <p><input type="text" placeholder="请输入用户名" onChange={(e) => {
                    this.setState({ username: e.target.value })
                }} value={username} /></p>
                <p><input type="password" placeholder="请输入密码" onChange={(e) => {
                    this.setState({ pwd: e.target.value })
                }} value={pwd} /></p>
                <b><button onClick={this.loginClick.bind(this)}>登录</button></b>
                <i>请前往<NavLink to="/Register">注册</NavLink>亲^-^</i>
            </div>
        )
    }
    loginClick() {
        let { username, pwd } = this.state
        let { history } = this.props
        axios.post("/login", {
            username,
            pwd
        }).then(res => {
            let { code, mes } = res.data
            if (code) {
                alert(mes)
            } else if (code === 1) {
                alert(mes)
            } else {
                alert(mes)
                history.push("/")
            }
        })
    }
}
