<template>
  <div class="container">
    <CBox
      v-bind="mainStyles[colorMode]"
      d="flex"
      w="100vw"
      h="100vh"
      flex-dir="column"
      justify-content="center"
    >
      <CHeading text-align="center" mb="4"> ⚡️ Hello chakra-ui/vue </CHeading>
      <CButton @click="showToast"></CButton>
      <div v-for="item in items" :key="item.id">
  {{item.attributes.title}}
      </div>
    </CBox>
  </div>
</template>

<script lang="js">


export default {
  name: 'IndexPage',
  components: {

  },
  inject: ['$chakraColorMode', '$toggleColorMode'],
  data () {
    return {
      showModal: false,
      mainStyles: {
        dark: {
          bg: 'gray.700',
          color: 'whiteAlpha.900'
        },
        light: {
          bg: 'white',
          color: 'gray.900'
        }
      },
      items: [],
      error:"",
    }
  },
  
  async fetch() {
    const newsItems = await this.$http.$get('http://localhost:1337/api/newsitems')
    this.items = newsItems.data
  },
  activated() {
    if (this.$fetchState.timestamp <= Date.now() - 30000) {
      this.$fetch()
    }
  },
  computed: {
    colorMode () {
      return this.$chakraColorMode()
    },
    theme () {
      return this.$chakraTheme()
    },
    toggleColorMode () {
      return this.$toggleColorMode
    }
  },
  methods: {
    showToast () {
      // const fetchedItems = this.$strapi.$newsitems.find();
      // fetchedItems.then(function(result){
      //   this.items = result.value
      // })
      console.log(this.items)
     }
  },

}
</script>
