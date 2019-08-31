import React from 'react'
import {Route} from 'react-router-dom'
export default (routes)=>{
    const fn=(children)=>{
        return children.map((item,index)=>(
            <Route path={item.path} key={index} render={()=>(
                <item.component/>
            )}/>
        ))
    }
 
    return routes.map((item,index)=>{
        if(item.children){
            return fn(item.children)
        }else{
            return <Route path={item.path} key={index} render={()=>(
                <item.component/>
            )}/>
        }
    })
}
/*
递归 
判断 路由里是否嵌套了children，如果有就先遍历 拿到item.children后传入到
定义的fn 函数中再进行遍历，目的是为了得到children里的path和component进行渲染

如果子级的下面还有子级路由，那么可以在下面继续做if else判断，再得到item.children.children
传回fn进行遍历




*/

