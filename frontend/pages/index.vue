<template>
  <div>
      <div v-for="item in newsitems.data" :key="newsitems.id">
          <div>{{item.id}}</div>
      </div>
  </div>
</template>

<script setup>
const {data: newsitems} = await useFetch('http://localhost:1337/api/newsitems');
</script>

<style>

</style>