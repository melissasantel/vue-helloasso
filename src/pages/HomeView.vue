<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import ReqresIn from '@/api/ReqresIn.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  },
  mounted () {
    ReqresIn.getUsers().then((res) => {
      console.log(res)
    })
  }
}
</script>
