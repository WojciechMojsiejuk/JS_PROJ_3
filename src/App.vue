<template>
  <v-app id="app">
    <v-app-bar
      app
      color="rgba(0,0,0,0.4)"
      dark
    >
      <v-container fluid="true">
        <v-row justify="start">
        <v-btn outlined rounded to="/" color="white" class="mx-2">Home</v-btn>
        <v-btn outlined rounded to="/playlist" color="white" class="mx-2"><v-icon>mdi-playlist-music</v-icon>Playlist</v-btn>
        <v-btn outlined rounded to="/artists" color="white" class="mx-2"><v-icon>mdi-artist</v-icon>Artists</v-btn>
        <v-btn outlined rounded to="/playlist/add" color="white" class="mx-2"><v-icon>mdi-plus</v-icon>Add song</v-btn>
        </v-row>
      </v-container>

      <v-spacer></v-spacer>

    </v-app-bar>

    <v-content>
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>

export default {
  name: 'App',

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
