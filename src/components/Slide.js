import React, { Component } from 'react'
import { NavLink } from "react-router-dom"


const slideData = [
    {
        title: "前端开发",
        url: "qd"
    },
    {
        title: "后端开发",
        url: "hd"
    },
    {
        title: "移动开发",
        url: "yd"
    },
    {
        title: "算法&数学",
        url: "sf"
    },
    {
        title: "前沿技术",
        url: "qy"
    },
    {
        title: "云计算&大数据",
        url: "yjs"
    },
    {
        title: "运维&测试",
        url: "yw"
    },
    {
        title: "数据库",
        url: "sjk"
    }
]

export default class Nav extends Component {
    state = {
        slideData
    }
    render() {
        let {slideData} = this.state
        return (
            <div className="slideBox">
                {
                    slideData.map((item,key) => <NavLink key={key} to={{
                        pathname: `/Download/Curriculum/${item.url}`
                    }}>{item.title}</NavLink>)
                }
            </div>
        )
    }
}