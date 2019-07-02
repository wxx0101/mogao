import React from 'react'
import {BrowserRouter} from "react-router-dom"
import routes from "../router/routeSetting"
import RouteViews from "./RouteViews"

function Router(){
    return <BrowserRouter>
            <RouteViews routes={routes} />
    </BrowserRouter>
}

export default Router;