<template>
  <div id="app">
      <nav>
          <router-link to="/">home</router-link>
      </nav>
      <router-view />
  </div>
</template>

<!--<script>-->
<!--// import Song from './views/Search.vue'-->

<!--export default {-->
<!--  name: 'app',-->
<!--  // components: {-->
<!--  //   Song-->
<!--  // },-->
<!--  data: function() {-->
<!--    return {-->
<!--      playlist: []-->
<!--    }-->
<!--  },-->
<!--  methods:-->
<!--          {-->
<!--            // addNewSong()-->
<!--            // {-->
<!--            //   let newSong = <song;-->
<!--            //   this.playlist.push()-->
<!--            // }-->
<!--          }-->
<!--}-->
<!--</script>-->

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: aliceblue;
}
    body{
        margin:0;
        padding: 0;
        width: 100%;
    }
    a
    {
        color: aliceblue;
    }
</style>
