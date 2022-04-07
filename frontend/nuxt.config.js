export default {
  head: {
    title: 'frontend',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  css: [],

  plugins: [],

  components: true,

  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/stylelint-module',
  ],

  modules: [
    '@chakra-ui/nuxt',
    '@nuxtjs/emotion',
    '@nuxtjs/axios',
    '@nuxtjs/strapi',
  ],

  strapi: {
    url: '<http://localhost:1337>',
    entities: ['newsitem', 'subscriber'],
  },

  axios: {
    baseURL: '/',
  },

  build: {},
}
