import Vue from 'vue'
import App from './App.vue'
import '@progress/kendo-ui'
import '@progress/kendo-theme-default/dist/all.css'
import { ContextMenu, LayoutInstaller } from '@progress/kendo-layout-vue-wrapper'
import { Menu } from '@progress/kendo-layout-vue-wrapper'
import { PanelBar } from '@progress/kendo-layout-vue-wrapper'
import { Splitter } from '@progress/kendo-layout-vue-wrapper'
import { TabStrip } from '@progress/kendo-layout-vue-wrapper'
import { DataSourceInstaller }from '@progress/kendo-datasource-vue-wrapper'

Vue.use(LayoutInstaller)
Vue.use(DataSourceInstaller)
Vue.config.productionTip = false

new Vue({
  components: {
    ContextMenu,
     Menu,
     PanelBar,
     Splitter,
     TabStrip
},
  render: h => h(App),
}).$mount('#app')
