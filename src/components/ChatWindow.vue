<template>
    <v-layout class="d-block mx-auto chat-window-container">
        <transition-group name="fade">
            <v-layout
                v-for="(message, index) in store.messages"
                :key="index"
                :class="isBotSender(message) ? 'flex-row' : 'flex-row-reverse'"
                class="d-flex flex-nowrap ga-2 py-1 px-0 ma-0"
            >
                <div class="avatar-container">
                    <message-sender-avatar
                        v-if="store.isPreviousMessageFromDifferentSender(index)"
                        :is-bot-sender="isBotSender(message)"
                    ></message-sender-avatar>
                </div>
                <message-bubble
                    :message="message"
                    :type-speed="isBotSender(message) ? 30 : 20"
                ></message-bubble>
            </v-layout>
        </transition-group>
                    <transition-group @after-leave="handleCommandButtonsAfterLeave" name="fade">
                    v-for="(command, index) in store.commandList"
                            v-visible="!store.currentCommand"
                    </transition-group>
        </div>
    </v-layout>
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

setTimeout(() => store.executeCommand(), 300);
</script>

<style scoped lang="scss">
.chat-window-container {
    max-width: 80ch;
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
