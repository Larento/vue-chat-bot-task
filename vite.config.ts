import { resolve } from 'node:path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vuetify from 'vite-plugin-vuetify';

export default defineConfig({
    plugins: [vue(), vuetify()],
    resolve: {
        alias: {
            '@': resolve('./src'),
        },
    },
    base: '/vue-chat-bot-task',
});
