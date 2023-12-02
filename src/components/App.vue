<template>
    <v-app class="app">
        <toolbar></toolbar>
        <v-container>
            <chat-window></chat-window>
        </v-container>
    </v-app>
</template>

<script setup lang="ts">
import Toolbar from '@/components/Toolbar.vue';
import ChatWindow from '@/components/ChatWindow.vue';
</script>
