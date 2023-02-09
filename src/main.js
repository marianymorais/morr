import Vue from 'vue'
import App from './App.vue'
import form1 from './components/form1.vue'

Vue.config.productionTip = false
Vue.component('form1',form1)

new Vue({
  render: h => h(App),
}).$mount('#app')
