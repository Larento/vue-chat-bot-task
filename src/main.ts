import { createApp } from 'vue';
import { createVuetify } from 'vuetify';
import 'vuetify/styles';

import App from '@/components/App.vue';
import '@/styles/global.scss';

const vuetify = createVuetify();
createApp(App).use(vuetify).mount('#app');
