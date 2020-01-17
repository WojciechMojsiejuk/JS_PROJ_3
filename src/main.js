import Vue from 'vue';
import App from './App.vue';
import router from "./router";
import VueYouTubeEmbed from 'vue-youtube-embed'
import vuetify from './plugins/vuetify';
import moment from 'moment'

Vue.use(VueYouTubeEmbed);
Vue.filter('formatDate', function(value) {
  if (value) {
    return moment(String(value)).format('MM/DD/YYYY hh:mm')
  }
});
Vue.config.productionTip = false;

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app');
