import {defineStore} from "pinia";
import HTTP from "../../../helpers/HTTP.ts";
import {TCatalogList} from "../CatalogList.interface.ts";
import {Ref, ref, computed} from "vue";

export const useCatalogStore = defineStore('catalog', () => {
    const CATALOG_ITEMS: Ref<TCatalogList | []> = ref([]);

    const FETCH_CATALOG_ITEMS = () => {
        return HTTP.get("/src/mock/catalogitems.json").then((items) => {
            CATALOG_ITEMS.value = items.data.data;
        }).catch((err): Error => {
            throw Error(err);
        })
    }

    const GET_CATALOG_ITEMS = computed((): TCatalogList | []  => {
        return CATALOG_ITEMS.value;
    })

    return {CATALOG_ITEMS, FETCH_CATALOG_ITEMS, GET_CATALOG_ITEMS}
})