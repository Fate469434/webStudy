<template>
    <button 
    ref="_ref"
    class="vk-button"
    :class="{
        [`vk-button--${type}`]:type,
        [`vk-button--${size}`]:size,
        'is-plain':plain,
        'is-round':round,
        'is-circle':circle,
        'is-disabled':disabled 
    }"
    :disabled="disabled"
    :autofocus="autofocus"
    :type="nativetype"
    >
    <slot></slot>
    </button>
    {{ console.log(nativetype)
     }}
</template>

<!-- 单独定义组件名 -->
<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
    name:'VKButton'
})
</script>

<script setup lang="ts" name="Butt">
import { buttonProps } from './types';
import { ref } from 'vue';
defineProps(buttonProps)
const _ref=ref<HTMLButtonElement>()
defineExpose({
    ref:_ref
})
</script>

<style>

</style>