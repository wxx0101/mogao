import loadable from "react-loadable"
import React, { Component } from 'react'


class Loading extends Component {
    render() {
        return <>Loading......</>
    }
}
const Login = loadable({
    loader: () => import("../views/Login/Login"),
    loading: Loading
})
const Download = loadable({
    loader: () => import("../views/Download"),
    loading: Loading
})
const Home = loadable({
    loader: () => import("../views/Home/Home"),
    loading: Loading
})
const Notes = loadable({
    loader: () => import("../views/Home/Notes"),
    loading: Loading
})
const Apeasked = loadable({
    loader: () => import("../views/Home/Apeasked"),
    loading: Loading
})
const Combat = loadable({
    loader: () => import("../views/Home/Combat"),
    loading: Loading
})
const Curriculum = loadable({
    loader: () => import("../views/Home/Curriculum.jsx"),
    loading: Loading
})
const Employment = loadable({
    loader: () => import("../views/Home/Employment"),
    loading: Loading
})
const Special = loadable({
    loader: () => import("../views/Home/Special"),
    loading: Loading
})
const Right = loadable({
    loader: () => import("../views/Right"),
    loading: Loading
})
const Register = loadable({
    loader: () => import("../views/Login/Register"),
    loading: Loading
})
const Eetails = loadable({
    loader: () => import("../views/Eetails"),
    loading: Loading
})
const ShopCar = loadable({
    loader: () => import("../views/ShopCar"),
    loading: Loading
})
const Search = loadable({
    loader: () => import("../views/Search"),
    loading: Loading
})


const routes = [
    {
        path: "/Download",
        component: Download,
        children: [
            {
                path: "/Download",
                redirect: "/Download/Home"
            },
            {
                path: "/Download/Home",
                component: Home
            },
            {
                path: "/Download/Curriculum",
                component: Curriculum,
                children: [
                    {
                        path: "/Download/Curriculum/:c",
                        component: Right
                    },
                    {
                        path: "/Download/Curriculum",
                        redirect: "/Download/Curriculum/qd"
                    }
                ]
            },
            {
                path: "/Download/Combat",
                component: Combat
            },
            {
                path: "/Download/Employment",
                component: Employment
            },
            {
                path: "/Download/Special",
                component: Special
            },
            {
                path: "/Download/Notes",
                component: Notes
            },
            {
                path: "/Download/Apeasked",
                component: Apeasked
            }
        ]
    },
    {
        path: "/Login",
        component: Login
    },
    {
        path: "/",
        redirect: "/Download"
    },
    {
        path: "/Register",
        component: Register
    },
    {
        path: "/Eetails/:id",
        component: Eetails
    },
    {
        path: "/ShopCar",
        component: ShopCar
    },
    {
        path: "/Search",
        component: Search
    }
]

export default routes;
