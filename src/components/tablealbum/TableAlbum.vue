<template>
  <div class="table-album" v-if="albumList.length">
      <a-table
              :dataSource="albumList"
              :columns="tableConfig"
              :row-key="(record) => record.id"
              @expand="getNestedTableData"
      >
          <template #expandedRowRender="record">
            <a-table
                    :dataSource="photosList"
                    :pagination="false"
                    :columns="photosConfig"
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
      </a-table>
  </div>
</template>

<script setup lang="ts">
import {onMounted, Ref, ref} from "vue";
import {AlbumList, PhotosList} from "../../services/api/api.interfaces.ts";
import {api} from "../../services/api/api.instance.ts";
const albumList: Ref<AlbumList> = ref([]);
const photosList: Ref<PhotosList> = ref([]);
const isLoaded: Ref<boolean> = ref(false);
const tableConfig = [
      {
          title: 'Айди пользователя',
          dataIndex: 'userId',
          align: "center",
          key: "userId"
      },
      {
          title: 'Айди альбома',
          dataIndex: 'id',
          key: "id"
      },
      {
          title: 'Название альбома',
          dataIndex: 'title',
          key: "title"
      },
]
const photosConfig = [
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

const getNestedTableData = (isTableOpen, record) => {
    const { id } = record;
    if(isTableOpen) {
        isLoaded.value = true;
        api.getPhotosById(id).then(resp => {
            isLoaded.value = false;
            photosList.value = resp;
        })
    } else {
        photosList.value = [];
    }
}

onMounted(() => {
    api.getAlbums().then(resp => {
        albumList.value = resp;
    })
})
</script>




