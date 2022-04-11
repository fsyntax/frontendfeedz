<template>
    <div class="ff-header">
        <div class="ff-header__logo">
            FrontendFeedz
        </div>
        <div class="ff-header__menu">

        </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
@import '~/assets/css/mixins.scss';
.ff-header {
    padding: var(--spacer-xs);
    box-shadow: 0 0 12px -3px black;
    background-color: #4a513f;
    height: var(--mobile-header-height);
    @include flexAlignCenter;
    &__logo {
        letter-spacing: .85px;
        color: #d2d1b7;
        font-size: 1.4em; 
        width: max-content;

    }
}
</style>