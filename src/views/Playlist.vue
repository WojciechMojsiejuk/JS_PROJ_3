<template>
    <div class="playlistWrapper">
        <background></background>
        <div class="playlistHolder" v-if="playlist.length">
            <v-list
                    :three-line="threeLine"
                    shaped
                    :avatar="avatar"
                    class="song"
            >
                <v-container fluid justify="space-between">
                <v-toolbar>
                    <v-toolbar-title>
                        Playlist
                    </v-toolbar-title>
<!--                    <v-toolbar-items>-->
                     <v-container align="center">
                         <v-row align="center">
                             <v-layout align-center >
                                 <v-flex xs12 md6 lg3>
                                     <v-layout column align-center>
                                         <v-switch v-model="threeLine" class="ma-2" label="More info" align="center"></v-switch>

                                     </v-layout>
                                 </v-flex>
                             </v-layout>
                             <v-layout align-center >
                                 <v-flex xs12 md6 lg3>
                                     <v-layout column align-center>
                                         <v-switch v-model="avatar" class="ma-2" label="Avatar" align="center"></v-switch>
                                     </v-layout>
                                 </v-flex>
                             </v-layout>


                             <v-spacer></v-spacer>
                                 <v-btn rounded outlined><v-icon>mdi-sort-alphabetical</v-icon> Sort by name</v-btn>
                             <v-spacer></v-spacer>
                             <v-btn rounded outlined><v-icon>mdi-sort</v-icon> Sort by date of joining </v-btn>
                            <v-spacer></v-spacer>
                             <v-text-field
                                     append-icon="mdi-magnify"
                             ></v-text-field>
                         </v-row>

                            <!--                                    v-model="ricerca"-->
                            <!--                                    @keyup="updateData();"-->
                            <!--                                    label="Cerca"-->
                     </v-container>
<!--                    </v-toolbar-items>-->

                </v-toolbar>
                </v-container>
                <v-list-item-group v-model="playlist" color="primary">
                    <v-list-item
                            v-for="song in playlist"
                            :key="song.id">
                        <v-list-item-avatar v-if="avatar">
                            <v-icon>mdi-music-box</v-icon>
<!--                            <v-img :src="song.avatar"></v-img>-->
                        </v-list-item-avatar>
                        <v-list-item-content>
                            <v-list-item-title v-html="song.title"></v-list-item-title>
                            <v-list-item-subtitle v-if="threeLine">Hello</v-list-item-subtitle>
<!--                            v-html="item.subtitle"-->
                        </v-list-item-content>
                        <v-btn icon><v-icon>mdi-close</v-icon></v-btn>
                    </v-list-item>
                </v-list-item-group>
            </v-list>
        </div>
        <div class="playlistEmpty" v-if="!playlist.length">
            <p> Your playlist is empty, please add songs</p>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'
    import Background from "@/components/Background";
    const serverUrl = ' http://localhost:3000';
    export default {
        name: "Playlist",
        components:
            {
                Background,
            },
        data() {
            return {
                playlist:[],
                threeLine: true,
                avatar: true,
            }
            },
        mounted()
        {
            let $this = this;
            // load all songs from server
            axios.get(serverUrl+'/songs').then(songs => $this.playlist=songs.data);
        },
        methods:
            {
                remove(song) {
                    let idx = this.playlist.indexOf(song);
                    this.playlist.splice(idx, 1);
                    axios.delete(serverUrl+'/songs/'+idx);
                },
            }

    }
</script>

<style scoped>
    p{
        color: black;
    }
    song{
        background: rgba(0,0,0,0.3);
        opacity:0.2;
    }
</style>