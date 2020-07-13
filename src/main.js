import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router"
import routes from './routes'
import framework7 from './plugins/framework7'
import "framework7/css/framework7.bundle.min.css"

Vue.use(VueRouter)
Vue.use(framework7)

Vue.config.productionTip = false

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
