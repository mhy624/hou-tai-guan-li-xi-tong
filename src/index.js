import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from "./store"//引入 store
import {Provider} from "react-redux"// 引入redux-thunk 中的Provider组件
import {HashRouter as Router,Route} from "react-router-dom"//引入哈希路由 重定项
import {noLayoutRouter} from "@router" // 引入router文件中的 noLayoutRouter
import routerEach from "@utils/routerEach"//引入 routerEach中的routerEach方法

let RouteComponent=routerEach(noLayoutRouter)//定义RouteComponent 调用routerEach方法执行noLayoutRouter
ReactDOM.render(
    <Router>{/*哈希路由做根组件*/}
        <Provider store={store}> {/*Provider组件包裹 store属性用来接收store*/}
            <Route path="/" component={App}/>{/*当路径为根路径的时候渲染App组件，渲染的*/}
                {RouteComponent}{/*渲染的是登录页面*/}
        </Provider>
    </Router>,
    document.getElementById('root'));


