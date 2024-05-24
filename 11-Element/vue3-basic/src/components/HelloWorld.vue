<script setup lang="ts">
import { ref, inject } from 'vue'
import { langKey, userkey } from '../keys'
defineProps<{ msg: string }>()

const count = ref(0)
const lang = inject(langKey)
const currentUser = inject(userkey)
</script>

<template>
  <h1>{{ msg }} - {{lang}} - {{currentUser && currentUser.name}}</h1>

  <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
