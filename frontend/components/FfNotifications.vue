<template>
  <div :class="`is-${type}`" class="notification">
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