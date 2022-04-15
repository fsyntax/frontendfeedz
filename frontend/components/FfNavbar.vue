<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <FfMenu />
    <button @click="logg">log</button>
      </nav>
</template>

<script lang="js">

export default {
  methods: {
    logg() {
      console.log(this.$auth.loggedIn)
    }
  }
};
</script>