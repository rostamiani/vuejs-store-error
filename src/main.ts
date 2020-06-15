import Vue from 'vue'
import store from './store'

Vue.config.productionTip = false

import vueCustomElement from 'vue-custom-element'
import AppParent from './components/Parent.vue'
Vue.use(vueCustomElement)
Vue.customElement('app-parent', new AppParent({ store }).$options)
