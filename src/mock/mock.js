import Mock from "mockjs"

// const arr = [require("")]
Mock.mock("/data", {
    "result|10-15": [
        {
            title: "@ctitle",
            name: "@name",
            img: "@image(100x80)",
            "num|100-2000": 1
        }
    ]
})

Mock.mock("/navData", {
    "result|10": [
        {
            title: "@ctitle",
            name: "@name",
            img: "@image(90x70)",
            "num|100-2000": 1
        }
    ]
})

Mock.mock("/combat", ({ body }) => {
    let { page, limin } = JSON.parse(body)
    let num = (page - 1) * limin + 1;
    return Mock.mock({
        [`result|${limin}`]: [
            {
                title: "@ctitle",
                name: "@name",
                img: "@image(100x80)",
                "num|+1": num,
                "id|+1": 0
            }
        ]
    })
})


const loginData = [
    {
        username: "zs",
        pwd: "1234"
    },
    {
        username: "ls",
        pwd: "3456"
    }
]

Mock.mock("/login", ({ body }) => {
    let { username, pwd } = JSON.parse(body)
    const usernameflag = loginData.find(item => item.username === username)
    const pwdflag = loginData.find(item => item.pwd === pwd)
    if (usernameflag && pwdflag) {
        localStorage.username = username;
        return {
            code: 0,
            mes: "登录成功"
        }
    } else if (usernameflag && !pwdflag) {
        return {
            code: 1,
            mes: "密码输入有误"
        }
    } else {
        return {
            code: 2,
            mes: "用户不存在，请注册"
        }
    }
})

Mock.mock("/register", ({ body }) => {
    let { username, pwd } = JSON.parse(body)
    const usernameflag = loginData.find(item => item.username === username)
    if (!usernameflag) {
        loginData.push({ username, pwd })
        localStorage.username = username;
        return {
            code: 0,
            mes: "注册成功"
        }
    } else {
        return {
            code: 1,
            mes: "用户名已存在"
        }
    }
})

Mock.mock("/edit", ({ body }) => {
    let { id } = JSON.parse(body)
    return Mock.mock({
        "result": {
            title: `商品名称${id}`,
            price: "10",
            num: 0,
            id: `${id}`,
            checked: false
        }

    })
})

Mock.mock("/hotSearch", {
    "result|4-6": [
        {
            title: "@ctitle"
        }
    ]
})