<template>
  <div class="table-album" v-if="albumList.length">
      <a-table
              :dataSource="albumList"
              :columns="tableConfig"
              :row-key="(record) => record.id"
              @expand="(isTableOpen) => isNestedTableOpen = isTableOpen"
      >

          <template #expandedRowRender="record">
              <AlbumPreview
                      :idOfRow="record.record.id"
                      :isOpened="isNestedTableOpen"
              />
          </template>
      </a-table>
  </div>
</template>

<script setup lang="ts">
import {onMounted, Ref, ref} from "vue";
import {AlbumList} from "../../services/api/api.interfaces.ts";
import {api} from "../../services/api/api.instance.ts";
import AlbumPreview from "./AlbumPreview.vue";
const albumList: Ref<AlbumList> = ref([]);
const isNestedTableOpen: Ref<boolean> = ref(false);
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

onMounted(() => {
    api.getAlbums().then(resp => {
        albumList.value = resp;
    })
})
</script>




