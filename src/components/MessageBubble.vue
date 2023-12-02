<template>
    <div
        class="mb-0 align-self-start position-relative message-bubble-container"
        :class="isBotSender ? '' : 'person-sender'"
    >
        <div class="bubble-arrow"></div>
        <v-card
            :elevation="0"
            :color="isBotSender ? 'indigo-darken-1' : 'indigo-lighten-4'"
            :class="isBotSender ? 'rounded-bs-0' : 'rounded-be-0'"
            class="px-3 py-1 font-weight-600 bubble"
            rounded="lg"
        >
            <typeout-text
                :text="message.content"
                :type-speed="typeSpeed"
                @typeout-end="isBotSender ? store.clearCommand() : store.executeCommand()"
            >
            </typeout-text>
        </v-card>
    </div>
</template>

<script setup lang="ts">
import { Message } from '@/modules/chat';
import { store } from '@/modules/store';
import TypeoutText from '@/components/TypeoutText.vue';

const props = defineProps<{
    message: Message;
    typeSpeed: number;
}>();

const isBotSender = props.message.sender === 'bot';
</script>

<style scoped lang="scss">
.message-bubble-container {
    --base-color: #1a237e;
    --accent-color: #7c4dff;
}

.bubble {
    background-image: linear-gradient(2deg, var(--base-color), var(--accent-color));
}

.bubble-arrow {
    --size: 12px;
    --width: 0.7;
    position: absolute;
    bottom: calc((-1 + var(--width)) * var(--size));
    left: calc((-1 + var(--width)) * var(--size));
    height: var(--size);
    width: var(--size);
    clip-path: polygon(
        calc((1 - var(--width)) * 100%) 0,
        100% 0,
        100% calc(var(--width) * 100%),
        0% 100%
    );
    background-color: var(--base-color);
}

.person-sender {
    --base-color: #c5cae9;
    --accent-color: #e8eaf6;

    .bubble-arrow {
        transform: scaleX(-1);
        left: unset;
        right: calc((-1 + var(--width)) * var(--size));
    }
}
</style>
