<template>
  <Header
  :links="links"
  />
  <router-view/>
</template>

<script>
import Header from './components/header.vue'

export default {
  components: {
    Header
  },
  data(){
    return{
      links: [
        {title: 'Demo', url: '/'},
        {title: 'Documentation', url: '/documentation'},
      ]
    }
  }
}
</script>

<style>

</style>
