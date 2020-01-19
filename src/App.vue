<template>
  <v-app id="app">
    <Navigation></Navigation>
    <v-content>
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>
  import Navigation from "@/components/Navigation";

export default {
  name: 'App',
  components:
          {
            Navigation,
          },
  data: () => ({
    //
  }),
};
</script>
<style>
  #app{
    background: rgba(0,0,0,0);
  }
</style>
