<template>
  <div class="container">
    <CBox
      v-bind="mainStyles[colorMode]"
    
    >
      <CHeading text-align="center" > ⚡️ Hello chakra-ui/vue </CHeading>
      <CButton @click="showToast"></CButton>

      <Newsitems :items="items"/>
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
