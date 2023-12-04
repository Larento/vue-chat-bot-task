<template>
    <div class="d-flex flex-nowrap flex-column app">
        <toolbar></toolbar>
        <chat-window></chat-window>
    </div>
</template>

<script setup lang="ts">
import Toolbar from '@/components/Toolbar.vue';
import ChatWindow from '@/components/ChatWindow.vue';
</script>

<style scoped lang="scss">
.app {
    max-height: 100vh;
    height: 100dvh;

    & > :first-child {
        flex-grow: 0;
    }

    & > * {
        flex-grow: 1;
    }
}
</style>
