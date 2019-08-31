//引入组件
import {
    Home,
    AddBooks,
    HotBooks,
    PublicArticle,
    Login,
    Auth,
    Info
} from "@pages"


export const layoutRouter = [
    {
        path:"/home",//路径
        component:Home,//组件
        icon:"user",//icon图标
        key:"/home",//key值 （可以直接调用）
        name:"首页",//名称
        meta:{
            auth:true//权限信息
        }
    },
    {
        path:"/books",
        icon:"user",
        key:"/books",
        name:"书籍管理",
        children:[//嵌套
            {
                path:"/books/hotBooks",
                component:HotBooks,
                icon:"user",
                key:"/books/hotBooks",
                name:"热门书籍",
                meta:{
                    auth:true
                }
            },
            {
                path:"/books/addBooks",
                component:AddBooks,
                icon:"user",
                key:"/books/addBooks",
                name:"发表文章",
                meta:{
                    auth:true
                }
            },
            {
                path:"/books/publicArticle",
                component:PublicArticle,
                icon:"user",
                key:"/books/publicArticle",
                name:"热门书籍",
                meta:{
                    auth:true
                }
            }
        ]
    },
    {
        path:"/user",
        icon:"user",
        key:"/user",
        name:"用户管理",
        children:[
            {
                path:"/user/info",
                component:Info,
                icon:"user",
                key:"/user/info",
                name:"个人信息",
                meta:{
                    auth:true
                }
            },
            {
                path:"/user/auth",
                component:Auth,
                icon:"user",
                key:"/user/auth",
                name:"权限管理",
                meta:{
                    auth:true
                }
            }
        ]
    }
]

export const noLayoutRouter = [
    {
        path:"/login",
        component:Login,
        key:"/login",
        name:"登录",
        meta:{
            auth:false
        }
    }
]

export const baseConfig = layoutRouter.concat(noLayoutRouter)