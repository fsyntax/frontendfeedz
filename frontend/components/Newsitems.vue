<template>
  <CBox class="ff-feed__wrapper">
    <div v-for="item in items" :key="item.id" class="ff-feedCard">
      <div class="ff-feedCard__head">
        <h3 class="ff-feedCard__title">
          <c-link
            :isExternal="true"
            :href="item.attributes.link"
            target="_blank"
          >
            {{ item.attributes.title }}
          </c-link>
        </h3>
      </div>
      <div class="ff-feedCard__body">
        <c-box
          class="ff-feedCard__preview"
          :class="`ff-${item.id}`"
          @click="loggit(item.id)"
        >
          {{ item.attributes.preview }}
          <span class="ff-feedCard__preview--toggler">Read more</span>
        </c-box>
      </div>
      <div class="ff-feedCard__footer">
        <div class="ff-feedCard__creator">
          By: {{ item.attributes.creator }}
        </div>
        <div class="ff-feedCard__publishedAt">
          {{ item.attributes.pubDate }}
        </div>
      </div>
    </div>
  </CBox>
</template>

<script lang="js">

export default {
  name: 'FeedNewsItem',
  props: {
    items: Array,
  },
  data() {
    return {
      isExpanded: false,
    }
  },
  methods: {
    loggit(id) {
      document.querySelector(`.ff-${id}`).classList.toggle('expanded');
      console.log(document.querySelector(`.ff-${id}`));
      if(this.isExpanded === true) {
        this.isExpanded = false;
      }
      if(this.isExpanded === false) {
        this.isExpanded = true;
      }
    }

  }
}

</script>

<style lang="scss" scoped>
.ff-feedCard {
  margin: 1em;
  padding: 1em;
  background: lightgrey;
  border-radius: var(--border-radius-md);
  &__preview {
    max-height: 50px;
    overflow: hidden;
    transition: max-height 400ms;
    position: relative;
    margin-bottom: 2em;
    &::after {
      content: '';
      position: absolute;
      z-index: 1;
      bottom: 0;
      left: 0;
      pointer-events: none;
      background-image: linear-gradient(
        to bottom,
        rgba(255, 255, 255, 0),
        lightgrey 90%
      );
      width: 100%;
      height: 30px;
    }
    &.expanded {
      max-height: 1000px;
    }
    &--toggler {
      position: absolute;
      background: lightblue;
      bottom: 0;
      z-index: 10;
      left: 50%;
      transform: translateX(-50%);
    }
  }
}
</style>