<template>
  <div class="app">
      <DefaultLayout>
          <router-view></router-view>
      </DefaultLayout>
  </div>
</template>

<script setup>
import DefaultLayout from "./layouts/DefaultLayout.vue";
import "./assets/styles/normalize.css"
import "./assets/styles/general.css"
</script>