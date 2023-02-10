<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import BoredApi from '@/api/BoredApi.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  },
  mounted () {
    BoredApi.getActivity().then((res) => {
      console.log(res)
    })
  }
}
</script>
