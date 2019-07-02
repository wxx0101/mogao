import React, { Component } from 'react'
import Top from "../components/Top"
import RouteViews from "../router/RouteViews"
import Nav from "../components/Nav"

export default class Download extends Component {
    render() {
        let { routes } = this.props
        return (
            <>
                <Top />
                <main>
                    <Nav />
                        <RouteViews routes={routes} />
                </main>
            </>
        )
    }
}
