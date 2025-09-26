<template>
  <Navbar/>

  <div class="positive-margin">
    <router-view></router-view>
  </div>
</template>

<script setup lang="ts">
import Navbar from '@/components/Navbar.vue';
</script>