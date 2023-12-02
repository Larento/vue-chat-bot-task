<template>
    <v-btn
        :elevation="0"
        @click="handleClick"
        density="compact"
        size="large"
        variant="tonal"
        rounded="lg"
        color="indigo-darken-4"
        class="flex-grow font-weight-normal text-none"
        :style="{ letterSpacing: 'normal' }"
    >
        {{ getCommandLabel(command) }}
    </v-btn>
</template>

<script setup lang="ts">
import { getCommandLabel, type BotCommand } from '@/modules/chat';
import { store } from '@/modules/store';

const props = defineProps<{
    command: BotCommand;
}>();

const emit = defineEmits<{
    (e: 'before-set-command'): void;
}>();

const handleClick = () => {
    emit('before-set-command');
    store.setCommand(props.command);
};
</script>
