<template>
    <div class="playlistWrapper">
        <background></background>
        <div class="playlistHolder" v-if="playlist.length">
            <v-list
                    :three-line="threeLine"
                    shaped
                    :avatar="avatar"
            >
                <v-subheader>
                    Playlist
                    <v-switch v-model="threeLine" class="ma-2" label="More info"></v-switch>
                    <v-switch v-model="avatar" class="ma-2" label="Avatar"></v-switch>
                </v-subheader>
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



            <div v-for="song in playlist" :key="song.id">
                {{song}}
                <input type="button" value="delete" @click="remove(song)">
                <input type="button" value="edit" @click="edit(song)">
            </div>
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
</style>