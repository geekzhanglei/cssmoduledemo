import Vue from 'vue'
import Other from '../Other.vue'

Vue.config.productionTip = false

new Vue({
    render: h => h(Other),
}).$mount('#other')
