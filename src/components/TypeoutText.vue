<template>
    <span :class="isTyping ? 'is-typing' : ''">{{ partialText }}</span>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';

const emit = defineEmits<{
    /** When text has finished being typed. */
    (e: 'typeout-end'): void;
}>();

const props = defineProps<{
    /** Final text content that should be typed out with animation. */
    text: string;
    /** Typing speed in characters per second. */
    typeSpeed: number;
}>();

async function typeText() {
    /** Time interval between each character being typed, ms. */
    const typeInterval = 1e3 / props.typeSpeed;
    isTyping.value = true;
    for (let index = 0; index < props.text.length; index += 1) {
        partialText.value += props.text[index];
        await new Promise((resolve) => setTimeout(resolve, (0.5 + Math.random()) * typeInterval));
    }
    isTyping.value = false;
    emit('typeout-end');
}

const partialText = ref('');
const isTyping = ref(false);

onMounted(typeText);
</script>

<style scoped lang="scss">
span {
    &:empty::before {
        content: '.';
        color: transparent;
    }

    &::after {
        display: inline;
        margin-left: 1px;
        padding-left: 2px;
        background-color: transparent;
        animation: none;
        content: '';
    }

    &.is-typing::after {
        background-color: currentColor;
        animation: blink 0.5s infinite alternate-reverse;
    }

    @keyframes blink {
        from {
            opacity: 0.05;
        }
        to {
            opacity: 0.7;
        }
    }
}
</style>
