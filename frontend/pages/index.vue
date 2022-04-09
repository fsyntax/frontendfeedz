<template>
  <div>
      <div v-for="item in newsitems.data" :key="item.title">
          <div>Id: {{item.attributes.title}}</div>
      </div>
  </div>
</template>

<script setup>
const {data: newsitems} = await useFetch('http://localhost:1337/api/newsitems');

</script>

<style lang="scss">
body {
  padding: 0;
  margin: 0;
}
</style>