<template>
  <v-app>
    <v-app-bar
      app
      color="indigo"
      dark
    >
      <div class="d-flex align-center">
        <router-link to="/">Home</router-link>
        <router-link to="/playlist">Playlist</router-link>
        <router-link to="/playlist/add">Add song</router-link>
      </div>

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
