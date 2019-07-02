import React, { Component } from 'react'
import axios from "axios"
import "../../mock/mock"
import BScroll from "better-scroll"

export default class Combat extends Component {
    page = 1
    state = {
        List: [],
        open: false
    }

    render() {
        let { List, open } = this.state;
        return (
            <div className="content" ref="con">
                <div className="big">
                    {
                        List.map((item, key) => <dl key={key} onClick={this.btnClick.bind(this,item.id)} ><dt><img src={item.img} alt="" /></dt><dd><p>{item.title}</p><p>{item.name}</p><p>{item.num}</p></dd></dl>)
                    }
                    <div className={"loading " + (open ? "active" : "")}>
                        <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1559212071819&di=3b09436cc1879d1c31ccd53d0eb7a54f&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F0204e459093a10a80121455047d894.gif" alt="" />
                    </div>
                </div>

            </div>
        )
    }
    componentDidMount() {
        this.myBScroll = new BScroll(this.refs.con, {
            probeType: 3,
            click: true
        })
        this.getData()
        this.scrollLoad()
    }
    getData() {
        let page = this.page
        axios.post("/combat", {
            page,
            limin: 10
        }).then(res => {
            let { List } = this.state
            List = List.concat(res.data.result)
            this.setState({
                List
            }, () => {
                this.myBScroll.refresh()
            })
        })
    }
    scrollLoad = () => {
        this.myBScroll.on("scroll", () => {
            let { y, maxScrollY } = this.myBScroll
            if (maxScrollY - y > 60) {
                this.setState({
                    open: true
                })
            } else if (maxScrollY - y < 40) {
                this.setState({
                    open: false
                })
            }
        })
        this.myBScroll.on("scrollEnd", () => {
            this.setState({
                open: false
            })
        })
        this.myBScroll.on("touchEnd", () => {
            let { open } = this.state;
            if (open) {
                this.page++;
                this.getData()
            }
        })
    }
    btnClick(id){
        let {history} = this.props
        history.push({pathname: `/Eetails/${id}`})
    }
}