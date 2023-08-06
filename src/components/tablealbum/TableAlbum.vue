<template>
  <a-table :dataSource="albumList" :columns="tableConfig"/>
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
          key: "userId",
          align: "center"
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
