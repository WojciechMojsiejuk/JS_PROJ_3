<template>
    <v-app-bar
            app
            color="rgba(0,0,0,0.4)"
            dark
    >
        <v-container fluid >
            <v-row>
                <v-col>
                    <v-row align="center" justify="start">
                        <v-col xs="3" sm="3" md="3" lg="2">
                            <v-btn outlined rounded to="/playlist" color="white" class="mx-2"><v-icon>mdi-playlist-music</v-icon>Playlist</v-btn>
                        </v-col>
                        <v-col xs="3" sm="3" md="3" lg="2">
                            <v-btn outlined rounded to="/artists" color="white" class="mx-2"><v-icon>mdi-artist</v-icon>Artists</v-btn>
                        </v-col>
                        <v-col xs="3" sm="3" md="3" lg="2">
                            <v-btn outlined rounded to="/playlist/add" color="white" class="mx-2"><v-icon>mdi-plus</v-icon>Add song</v-btn>
                        </v-col>
                        <v-spacer></v-spacer>
                    </v-row>
                </v-col>
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