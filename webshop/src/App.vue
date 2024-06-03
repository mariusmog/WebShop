<template>
  <div class= "container">
    <Menu></Menu >
    <IndexPage></IndexPage>
  </div>
</template>

<script>
  import Menu from './components/Menu.vue'
  import IndexPage from "./components/IndexPage.vue";

  export default {
    name: 'App',
    components: {
      IndexPage,
      Menu
    }
  }
</script>

<style>

</style>
  