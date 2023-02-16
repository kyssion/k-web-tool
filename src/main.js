import { createApp } from 'vue'
import App from './App.vue'
import Mainjs from './Main.vue'

import './assets/main.css'

// vue 里面app 是一个根应用 ， 拥有一套独立的资源和全局作用域
// createApp 是创建一个应用级别的app
const app = createApp(App)
const appV2 = createApp(App) // vue 可以创建多个共存的应用 ， 逻辑相当于在html中增加一个div

// app 提供一个全局范围的配置能力通过这个能力 ， 我们可以自定义一个应用中各种属性的配置
app.config.errorHandler = (err)=>{
    console.log(" this is  err ", err)
}

// 应用 app 维度注册一个组件


app.component('TestButton', app)

// 将一个app 挂载在html 中app
// app.mount("#app")

// 自定义的测试类
const mainJs = createApp(Mainjs).mount("#app")