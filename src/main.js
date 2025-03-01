import Vue from 'vue'
import App from './App.vue'
import HeaderComponent from './components/HeaderComponent.vue'
import InputComponent from './components/InputComponent.vue'
import 'font-awesome/css/font-awesome.css';



Vue.config.productionTip = false
Vue.component('header-component', HeaderComponent)
Vue.component('input-component', InputComponent)

new Vue({
  render: h => h(App),
}).$mount('#app')
