import React, { Component } from 'react'
import { NavLink } from "react-router-dom"

export default class Top extends Component {
    render() {
        return (
            <div className="topBox">
                <div className="imgBox">
                    <img src={require("../img/top.png")} alt="" />
                </div>
                <div className="right">
                    <NavLink to="/Search">搜索</NavLink>
                    <p>
                        <NavLink to="/Download">下载APP</NavLink>
                        <NavLink to={localStorage.username ? localStorage.username: "/Login"} onClick={this.Click.bind(this)}>{localStorage.username ? localStorage.username:"登录"}</NavLink>
                    </p> 
                </div>
            </div>
        )
    }
    Click(){
        console.log(this.props)
    }
}
