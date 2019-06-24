import Vue from 'vue'
import axios from 'axios'

import App from './App'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import utils from './utils'
Vue.prototype.utils = utils

import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'

Vue.use(mavonEditor);

import VueUeditorWrap from 'vue-ueditor-wrap'
Vue.component('vue-ueditor-wrap',VueUeditorWrap);

if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.http = Vue.prototype.$http = axios
Vue.config.productionTip = false

Vue.use(ElementUI)

router.beforeEach(function(to,from,next){
  console.log("to:", to);//object
  console.log("from", from);//object
  console.log("next", next);//function
  next();
});


/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  store,
	utils,
  template: '<App/>'
}).$mount('#app')
