import React, { Component } from 'react'
import Slide from "../../components/Slide"
import RouteViews from "../../router/RouteViews"

export default class Curriculum extends Component {
    render() {
        let {routes} = this.props
        return (
            <div className="keBox">
                <Slide />
                <RouteViews routes={routes} />
            </div>
        )
    }
}
