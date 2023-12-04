import { createApp } from 'vue';
import { createVuetify } from 'vuetify';
import 'vuetify/styles';
import '@mdi/font/css/materialdesignicons.css';

import { visibleDirective } from '@/directives/visible';
import App from '@/components/App.vue';

const vuetify = createVuetify();
createApp(App).directive('visible', visibleDirective).use(vuetify).mount('#app');
