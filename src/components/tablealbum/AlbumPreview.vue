<template>
<a-table
        :dataSource="photosList"
        :pagination="false"
        :columns="tableConfig"
        :loading="isLoaded"
>
    <template #bodyCell="{column, record}">
        <template v-if="column.dataIndex === 'url'">
            <img :src="record.thumbnailUrl"
                 :alt="record.thumbnailUrl"
            >
        </template>
    </template>
</a-table>
</template>

<script setup lang="ts">
import {ref, Ref, defineProps, onMounted} from "vue";
import {api} from "../../services/api/api.instance.ts";
import {PhotosList} from "../../services/api/api.interfaces.ts";
const { idOfRow, isOpened } = defineProps<{idOfRow: number, isOpened: boolean}>();
const photosList: Ref<PhotosList> = ref([]);
const isLoaded: Ref<boolean> = ref(false);

const tableConfig = [
    {
        title: 'Айди фотографии',
        dataIndex: 'id',
        key: "id",
    },
    {
        title: 'Заголовок Изображения',
        dataIndex: 'title',
        key: "title"
    },
    {
        title: 'Фотография',
        dataIndex: 'url',
        key: "url",
        align: "center"
    },
]

onMounted(() => {
    if(isOpened) {
        isLoaded.value = true;
         api.getPhotosById(idOfRow).then(resp => {
             isLoaded.value = false;
             photosList.value = resp;
         });
    } else {
        return [];
    }
})

</script>

