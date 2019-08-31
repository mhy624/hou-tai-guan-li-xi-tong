import {createStore,combineReducers,applyMiddleware} from "redux"//引入redux的三个方法
import reduxThunk from "redux-thunk"//引入redux-thunk解决异步action
import user from "./reducers/user"//引入 单独的reducer模块
import books from "./reducers/books"//引入 单独的reducer模块

const reducer =combineReducers({//合并reducer
    user,
    books
})
const store = createStore(reducer,applyMiddleware(reduxThunk))//应用方法创建store，使用中间件reduxThunk

export default store;//导出store