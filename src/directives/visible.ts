import { type ObjectDirective } from 'vue';

function setVisibility(el: HTMLElement, value: boolean): void {
    el.style.visibility = value ? '' : 'hidden';
}

/**
 * Alternative to v-show directive, but based on `visibility` property instead of `display`.
 * Based on Vue.js code for v-show directive.
 *
 * [Vue.js GitHub](https://github.com/vuejs/core/blob/9ea2b868be765ca8b6a766004a3b6dfff03b76d3/packages/runtime-dom/src/directives/vShow.ts)
 */
export const visibleDirective: ObjectDirective<HTMLElement, boolean> = {
    beforeMount(el, { value }, { transition }) {
        if (transition && value) {
            transition.beforeEnter(el);
        } else {
            setVisibility(el, value);
        }
    },
    mounted(el, { value }, { transition }) {
        if (transition && value) {
            transition.enter(el);
        }
    },
    updated(el, { value, oldValue }, { transition }) {
        if (!value === !oldValue) return;
        if (transition) {
            if (value) {
                transition.beforeEnter(el);
                setVisibility(el, true);
                transition.enter(el);
            } else {
                transition.leave(el, () => setVisibility(el, false));
            }
        } else {
            setVisibility(el, value);
        }
    },
    beforeUnmount(el, { value }) {
        setVisibility(el, value);
    },
};
