import { createApp } from 'vue';
import { createVuetify } from 'vuetify';
import 'vuetify/styles';
import '@mdi/font/css/materialdesignicons.css';

import App from '@/components/App.vue';

const vuetify = createVuetify();
createApp(App).use(vuetify).mount('#app');
