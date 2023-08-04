<template>
  <div class="card-item">
    <h3>{{ data.title }}</h3>
    <p>{{ data.price }}</p>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
import {ICartItem} from "./CartItem.interface.ts";
const props = defineProps<ICartItem>()

</script>

