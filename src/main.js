import { createApp } from 'vue';
import App from './App.vue';
import MyButton from './components/MyButton.vue';
import router from './router';
import store from './store';

createApp(App)
  .use(store)
  .use(router)
  .component('my-button', MyButton)
  .mount('#app');
