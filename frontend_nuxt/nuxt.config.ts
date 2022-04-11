import { defineNuxtConfig } from 'nuxt3'

export default defineNuxtConfig({
    buildModules: [
        '@nuxtjs/strapi',
        '@nuxtjs/style-resources',
    ],

    css: [
        '@/assets/css/variables.scss',
        '@/assets/css/mixins.scss',
    ],
})
