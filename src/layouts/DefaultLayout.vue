<template>
    <div class="default">
        <Header />
        <main class="wrapper">
            <slot />
        </main>
        <Footer />
    </div>
</template>

<script setup lang="ts">
import Header from "../components/header/Header.vue";
import Footer from "../components/footer/Footer.vue";
</script>