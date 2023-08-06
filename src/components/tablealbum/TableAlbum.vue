<template>
  <div class="table-album" v-if="albumList.length">
      <a-table
              :dataSource="albumList"
              :columns="tableConfig"
              >
          <template #expandedRowRender="record">
            <a-table
                    :dataSource="record.record.nestedData"
                    :pagination="false"
                    :columns="photosConfig" >
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
import {AlbumList} from "../../services/api/api.interfaces.ts";
import {api} from "../../services/api/api.instance.ts";
const albumList: Ref<AlbumList> = ref([]);
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

onMounted(() => {
    api.getAlbums().then(resp => {
        albumList.value = resp;
        albumList.value.forEach((album, idx) => {
            album.key = idx;
            api.getPhotosById(album.id).then(resp => {
                album.nestedData = resp;
            })
        })
    })
})
</script>




