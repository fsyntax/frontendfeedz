<template>
  <div class="ff-feeditem__wrapper">
    <div class="ff-feeditem" v-for="item in newsitems.data" :key="item.id">
      <h3 class="ff-feeditem__title">
        <nuxt-link
          :to="item.attributes.link"
          class="ff-feeditem__link"
          target="_blank"
          >{{ item.attributes.title }}</nuxt-link
        >
      </h3>
      <hr class="ff-divider" />
      <div class="ff-feeditem__preview" :class="{ expanded: expanded }">
        {{ item.attributes.preview }}
      </div>
      <hr class="ff-divider" />
      <div class="ff-feeditem__more">
        <button class="ff-feed__more__btn" @click="setExpanded(item.id)">
          {{ expanded ? 'Read less' : 'Read more'}}
        </button>
      </div>
      <div class="ff-feeditem__creator">By: {{ item.attributes.creator }}</div>
      <div class="ff-feeditem__published">
        Published at: {{ item.attributes.pubDate }}
      </div>
    </div>
  </div>
</template>

<script setup>
const { data: newsitems } = await useFetch(
  "http://localhost:1337/api/newsitems"
);

const expanded = ref(false);
const setExpanded = () => {
  expanded.value = expanded.value ? false : true;
};
</script>

<style lang="scss" scoped>
.ff-feeditem {
  margin: var(--spacer-md) 0;
  padding: var(--spacer-md);
  background-color: #d9d5cb;
  border-radius: var(--border-radius-md);
  box-shadow: var(--box-shadow-light);
  &:first-of-type {
    margin-top: 0;
  }
  &__wrapper {
    padding: var(--spacer-md);
  }
  &__title {
    padding: 0;
    margin: 0 0 var(--spacer-sm) 0;
  }
  &__link {
    text-decoration: none;
    color: darkslateblue;
  }
  &__preview {
    max-height: 100px;
    overflow: hidden;
    transition: all 300ms;
    position: relative;
    &::after {
      content: "";
      position: absolute;
      left: 0;
      bottom: 0;
      height: 30px;
      width: 100%;
      background-image: linear-gradient(
        to bottom,
        rgba(255, 255, 255, 0),
        #d9d5cb 90%
      );
    }
    &.expanded {
      max-height: 500px;
      &::after {
          content: none;
      }
    }
  }
}
</style>