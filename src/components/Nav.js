import React, { Component } from 'react'
import { NavLink } from "react-router-dom"

export default class Nav extends Component {
    render() {
        return (
            <nav>
                <NavLink to="/Download/Home">首页</NavLink>
                <NavLink to="/Download/Curriculum">课程</NavLink>
                <NavLink to="/Download/Combat">实战</NavLink>
                <NavLink to="/Download/Employment">就业班</NavLink>
                <NavLink to="/Download/Special">专栏</NavLink>
                <NavLink to="/Download/Notes">手记</NavLink>
                <NavLink to="/Download/Apeasked">猿问</NavLink>
            </nav>
        )
    }
}
