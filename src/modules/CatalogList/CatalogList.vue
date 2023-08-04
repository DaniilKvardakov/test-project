<template>
  <div class="catalog-list" v-if="CATALOG_DATA.length">
      <CartItem
            v-for="item in CATALOG_DATA"
            :key="item.id"
            :data="item"
      />
  </div>
</template>

<script lang="ts" setup>
import {onMounted, ref} from "vue";
import CartItem from "../cartitem/CartItem.vue";
import {TCatalogList} from "./CatalogList.interface.ts";
const CATALOG_DATA: TCatalogList = ref([]);
import {useCatalogStore} from "./store";
const catalogStore = useCatalogStore();

onMounted(() => {
  catalogStore.FETCH_CATALOG_ITEMS().then(() => {
      CATALOG_DATA.value = catalogStore.GET_CATALOG_ITEMS;
      console.log(catalogStore.GET_CATALOG_ITEMS)
  });
})
</script>

