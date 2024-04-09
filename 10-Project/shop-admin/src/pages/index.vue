<template>
    后台首页{{ store.user }}
</template>

<script setup>
import { useRouter } from 'vue-router';
import { myStore } from '../store';
const router = useRouter()
const store = myStore()

</script>

<style></style>