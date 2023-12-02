<template>
    <v-avatar
        :icon="isBotSender ? 'mdi-robot-happy' : 'mdi-account'"
        :color="isBotSender ? 'indigo-darken-1' : 'indigo-lighten-4'"
        variant="tonal"
        class="pa-2 flex-shrink-0 align-self-end w-100 h-100"
    >
    </v-avatar>
</template>

<script setup lang="ts">
defineProps<{
    /** Indicates, whether the sender is a bot or not. */
    isBotSender: boolean;
}>();
</script>
