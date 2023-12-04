<template>
    <div class="w-100 overflow-auto scrollable-container">
        <div ref="containerRef" class="mx-auto chat-window-container">
            <v-container>
                <transition-group name="fade">
                    <v-layout
                        v-for="(message, index) in store.messages"
                        :key="index"
                        :class="isBotSender(message) ? 'flex-row' : 'flex-row-reverse'"
                        class="d-flex flex-nowrap ga-2 py-2"
                    >
                        <div class="align-self-start avatar-container">
                            <message-sender-avatar
                                v-show="store.isPreviousMessageFromDifferentSender(index)"
                                :is-bot-sender="isBotSender(message)"
                            ></message-sender-avatar>
                        </div>
                        <div class="align-self-start message-bubble-container">
                            <message-bubble
                                :message="message"
                                :type-speed="isBotSender(message) ? 30 : 20"
                            ></message-bubble>
                        </div>
                    </v-layout>
                </transition-group>
                <div
                    class="d-flex flex-wrap justify-center align-start pt-4 ga-4 position-relative"
                >
                    <transition-group @after-leave="handleCommandButtonsAfterLeave" name="fade">
                        <command-button
                            :key="command"
                            v-for="(command, index) in store.commandList"
                            v-visible="!store.currentCommand"
                            :style="{ '--index': index }"
                            :command="command"
                        >
                        </command-button>
                    </transition-group>
                </div>
            </v-container>
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed, ref, onMounted, type VNodeRef } from 'vue';

import { type Message } from '@/modules/chat';
import { store } from '@/modules/store';

import MessageSenderAvatar from '@/components/MessageSenderAvatar.vue';
import MessageBubble from '@/components/MessageBubble.vue';
import CommandButton from '@/components/CommandButton.vue';

const isBotSender = (message: Message) => message.sender === 'bot';

const handleCommandButtonsAfterLeave = computed(() => {
    let numberOfCalls = 0;
    const numberOfButtons = store.commandList.length;
    return () => {
        numberOfCalls += 1;
        if (numberOfCalls === numberOfButtons) {
            store.postCommand();
            numberOfCalls = 0;
        }
    };
});

const containerRef = ref<VNodeRef | null>(null);
const resizeObserver = ref(
    new ResizeObserver((entries) => {
        for (const entry of entries) {
            entry.target?.scrollIntoView({ block: 'end', behavior: 'auto' });
        }
    }),
);

onMounted(() => {
    if (containerRef.value) resizeObserver.value.observe(containerRef.value);
});

setTimeout(() => store.executeCommand(), 300);
</script>

<style scoped lang="scss">
.scrollable-container {
    scroll-behavior: smooth;
}

.chat-window-container {
    max-width: 80ch;
    min-height: 100%;
}

.avatar-container {
    width: 40px;
    height: 40px;

    > * {
        width: 100%;
        height: 100%;
    }
}

.fade {
    &-move,
    &-enter-active,
    &-leave-active {
        transition: all 0.25s ease;
    }

    &-leave-active {
        position: relative;
    }

    &-enter-from,
    &-leave-to {
        opacity: 0;
        transform: scale(0.95) translate(0, 10px);
    }
}
</style>
