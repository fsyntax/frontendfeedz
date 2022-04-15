<template>
  <div class="ff-notification" :class="`is-${type}`">
    {{ message }}
  </div>
</template>

<script lang="js">
export default {
    name: "FfNotificatios",
    props: {
    type: {
        type: String,
        default: "success",
        validator: (val) => ["danger", "success"].includes(val),
    },
    message: {
        type: String,
        default: "",
    },
 },
};
</script>

<style lang="scss">
.ff-notification {
  min-height: 100px;
  background: lightgoldenrodyellow;
}
</style>