//路由懒加载
import Loadable from "react-loadable"
//引入loading
import Loading from "@common/loading" 

const Home = Loadable({
    loader:()=>import("./home"),
    loading:Loading
})

const AddBooks = Loadable({
    loader:()=>import("./books/addBooks"),
    loading:Loading
})

const HotBooks = Loadable({
    loader:()=>import("./books/hotBooks"),
    loading:Loading
})

const PublicArticle = Loadable({
    loader:()=>import("./books/publicArticle"),
    loading:Loading
})

const Login = Loadable({
    loader:()=>import("./login"),
    loading:Loading
})

const Auth = Loadable({
    loader:()=>import("./users/auth"),
    loading:Loading
})

const Info = Loadable({
    loader:()=>import("./users/info"),
    loading:Loading
})

export {
    Home,
    AddBooks,
    HotBooks,
    PublicArticle,
    Login,
    Auth,
    Info
}