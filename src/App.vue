<script setup lang="ts">
const handleClick = () => {
  console.log('clicked')
}
</script>

<template>
  <GButton type="primary" block size="large">是的</GButton>
  <GButton type="primary" disabled @click="handleClick">是的</GButton>
  <GButton type="primary" size="small" @click="handleClick">是的</GButton>
</template>
<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
