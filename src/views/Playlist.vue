<template>
    <div class="playlistWrapper">
        <div class="playlistHolder" v-if="playlist.length">
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
    const serverUrl = ' http://localhost:3000';
    export default {
        name: "Playlist",
        data() {
            return {
                playlist:[],
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