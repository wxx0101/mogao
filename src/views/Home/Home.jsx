import React, { Component } from 'react'
import "swiper/dist/css/swiper.min.css"
import Swiper from "swiper/dist/js/swiper"
import axios from 'axios';
import "../../mock/mock"

export default class Home extends Component {
    state = {
        data: []
    }
    render() {
        let { data } = this.state
        return (
            <div className="homeBox">
                <div className="swiperBox" ref="swiperBox">
                    <div className="swiper-container" ref="page">
                        <div className="swiper-wrapper">
                            <div className="swiper-slide">
                                <img src="//img2.mukewang.com/5ce3a4bf09671b6a18000600.jpg" alt="" />
                            </div>
                            <div className="swiper-slide">
                                <img src="//img1.mukewang.com/szimg/5ceb46810938402e09000300.jpg" alt="" />
                            </div>
                            <div className="swiper-slide">
                                <img src="//img4.mukewang.com/szimg/5cedec650972384009000300.jpg" alt="" />
                            </div>
                            <div className="swiper-slide">
                                <img src="//img1.mukewang.com/szimg/5ceb5d370955f30f09000300.jpg" alt="" />
                            </div>
                            <div className="swiper-slide">
                                <img src="//img3.mukewang.com/szimg/5cbfcef2084b081d09000300.jpg" alt="" />
                            </div>
                        </div>
                        <div className="swiper-pagination"></div>
                    </div>
                </div>
                <div className="con">
                    <h3>实战推荐</h3>
                    {
                        data.map((item, key) => <dl key={key}><dt><img src={item.img} alt="" /></dt><dd><p>{item.title}</p><p>{item.name}</p><p>销售量：{item.num}</p></dd></dl>)
                    }
                </div>
            </div>
        )
    }
    componentDidMount() {
        new Swiper(this.refs.page, {
            loop: true,
            autoplay: {
                delay: 1000,
                disableOnInteraction: true
            },
            pagination: {
                el: ".swiper-pagination",
                clickable: true
            }
        })
        axios.get("/data").then(res => {
            this.setState({
                data: res.data.result
            })
        })
    }
}
