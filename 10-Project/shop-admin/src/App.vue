<template>
  <RouterView></RouterView>
</template>

<script setup>
</script>

<style scoped>
.btn{
  @apply 
  bg-purple-500 
  text-indigo-50 
  px-4 
  py-2 
  rounded 
  hover:( bg-purple-900) 
  transition-all 
  duration-700 
  focus:( ring-8);
}
</style>
