<template>
  <c-menu class="ff-menu"  v-slot="{ isOpen }" autoSelect="false">
    <c-menu-button class="ff-menu__btn" :is-active="isOpen" :right-icon="isOpen ? 'chevron-up' : 'chevron-down'">
       {{ isOpen ? 'Close' : 'Menu' }}
    </c-menu-button>
    <c-menu-list class="ff-menu__wrapper" v-if="!isAuthenticated">
      <c-menu-item class="ff-menu__item"
        ><nuxt-link to="/">Home</nuxt-link></c-menu-item
      >
      <c-menu-item class="ff-menu__item"
        ><nuxt-link to="/register">Register</nuxt-link></c-menu-item
      >
      <c-menu-item class="ff-menu__item"
        ><nuxt-link to="/login">Login</nuxt-link></c-menu-item
      >
    </c-menu-list>

    <c-menu-list class="ff-menu__wrapper" v-if="isAuthenticated">
        <c-menu-item class="ff-menu__item"><nuxt-link to="/profile">My Profile</nuxt-link></c-menu-item>
        <c-menu-item class="ff-menu__item"><button @click="logout">Logout</button></c-menu-item>
    </c-menu-list>
  </c-menu>
</template>

<script lang="js">
import { mapGetters } from "vuex";

export default {
 computed: {
 ...mapGetters(["isAuthenticated", "loggedInUser"]),
 },
 methods: {
async logout() {
   await this.$auth.logout()
 }
 }
};
</script>

<style lang="scss">
.ff-menu {
  &__btn {
    padding:0 var(--spacer-xs);  
    margin: 0;
    outline: none;
    background: none;
    border: none;
    &:hover, &:active, &:target, &:visited, &:focus {
      background: none;
      border: none;
      box-shadow: none;
      outline-offset: none;
      outline: none;
    }
  }
  &__wrapper {
    background-color: darkslateblue;
    min-width: max-content;
    
  }
  &__item {
    color: #fff;
    &:active,&:focus {
      
      background-color: transparent;
    }
  
  }
}
</style>