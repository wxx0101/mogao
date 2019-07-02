import React, { Component } from 'react'
import axios from "axios"
import "../../mock/mock"

export default class Register extends Component {
    state = {
        username: "",
        pwd: "",
        qrpwd: "",
        open: false
    }
    render() {
        let { username, pwd, qrpwd, open } = this.state
        return (
            <div className="registerBox">
                <h2>注册</h2>
                <p><input type="text" placeholder="请输入用户名" onChange={(e) => {
                    this.setState({ username: e.target.value })
                }} value={username} /></p>
                <p><input type="password" placeholder="请输入密码" onChange={(e) => {
                    this.setState({ pwd: e.target.value })
                }} value={pwd} /></p>
                <p><input type="password" placeholder="请再次输入密码" onChange={(e) => {
                    this.setState({ qrpwd: e.target.value })
                }} value={qrpwd} /></p>
                {open && <span>两次密码输入不一致</span>}
                <b><button onClick={this.registerClick.bind(this)}>注册</button></b>
            </div>
        )
    }
    registerClick() {
        let { username, pwd, qrpwd } = this.state
        let {history} = this.props 
        if(pwd === qrpwd){
            axios.post("/register",{
                username,
                pwd
            }).then(res => {
                let {code,mes} = res.data
                if(code){
                    alert(mes)
                }else{
                    alert(mes)
                    history.replace("/Login")
                }
            })
        }else{
            this.setState({
                open: true
            })
        }
    }
}
