<template>
    <v-app-bar
            app
            color="rgba(0,0,0,0.4)"
            dark
    >
        <v-container fluid>
            <v-row justify="start">
                <v-btn outlined rounded to="/playlist" color="white" class="mx-2"><v-icon>mdi-playlist-music</v-icon>Playlist</v-btn>
                <v-btn outlined rounded to="/artists" color="white" class="mx-2"><v-icon>mdi-artist</v-icon>Artists</v-btn>
                <v-btn outlined rounded to="/playlist/add" color="white" class="mx-2"><v-icon>mdi-plus</v-icon>Add song</v-btn>
            </v-row>
        </v-container>

        <v-spacer></v-spacer>

    </v-app-bar>
</template>

<script>
    export default {
        name: "Navigation"
    }
</script>

<style scoped>

</style>