import Vue from 'vue';
import App from './App.vue';
import router from "./router";
import VueYouTubeEmbed from 'vue-youtube-embed'
import vuetify from './plugins/vuetify';
Vue.use(VueYouTubeEmbed);

Vue.config.productionTip = false;

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app');
