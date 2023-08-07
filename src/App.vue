<template>
  <div class="app">
      <DefaultLayout>
          <router-view></router-view>
      </DefaultLayout>
  </div>
</template>

<script setup>
import DefaultLayout from "./layouts/DefaultLayout.vue";
</script>