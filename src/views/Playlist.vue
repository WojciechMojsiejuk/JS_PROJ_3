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

                             <v-menu
                                     v-model="sortShow"
                                     close-on-click
                                     close-on-content-click
                                     offset-y
                             >
                                 <template v-slot:activator="{ on }">
                                     <v-btn
                                             rounded outlined
                                             v-on="on"
                                     >
                                         <v-icon>mdi-sort</v-icon> Sort
                                     </v-btn>
                                 </template>
                                 <v-container class="pa-4">
                                 <v-row class="ma-1">
                                     <v-btn rounded outlined @click="sortNameAsc"><v-icon>mdi-sort-alphabetical-ascending</v-icon>by name ascending</v-btn>
                                 </v-row>
                                 <v-row class="ma-1">
                                     <v-btn rounded outlined @click="sortNameDsc"><v-icon>mdi-sort-alphabetical-descending</v-icon>by name descending</v-btn>
                                 </v-row>
                                 <v-row class="ma-1">
                                     <v-btn rounded outlined @click="sortPubDateAsc"><v-icon>mdi-sort-ascending</v-icon> by date of joining ascending </v-btn>
                                 </v-row>
                                 <v-row class="ma-1">
                                     <v-btn rounded outlined @click="sortPubDateDsc"><v-icon>mdi-sort-descending</v-icon> by date of joining descending </v-btn>
                                 </v-row>
                                 <v-row class="ma-1">
                                     <v-btn rounded outlined @click="sortJDateAsc"><v-icon>mdi-sort-ascending</v-icon> by date of publishing ascending </v-btn>
                                 </v-row>
                                 <v-row class="ma-1">
                                     <v-btn rounded outlined @click="sortJDateDsc"><v-icon>mdi-sort-descending</v-icon> by date of publishing descending </v-btn>
                                 </v-row>
                                 <v-row class="ma-1">
                                     <v-btn rounded outlined @click="noSort"><v-icon>mdi-sort-variant-remove</v-icon>Clear</v-btn>
                                 </v-row>
                                 </v-container>

                             </v-menu>
                            <v-spacer></v-spacer>
                             <v-text-field v-model="search"
                                     append-icon="mdi-magnify"
                             ></v-text-field>
                         </v-row>
                     </v-container>

                </v-toolbar>
                </v-container>
                <v-list-item-group v-model="playlist" color="primary">
                    <v-list-item
                            v-for="song in sortPlaylist"
                            :key="song.id">
                        <v-list-item-avatar v-if="avatar">
                            <v-img :src="song.thumbnails.default.url"></v-img>
                        </v-list-item-avatar>
                        <v-list-item-content>
                            <v-list-item-title v-html="song.songTitle"></v-list-item-title>
                            <v-list-item-subtitle v-if="threeLine">
                                <v-row justify="end" class="pa-4">
                                    Joined: {{song.joiningDate | formatDate}}
                                </v-row>
                                <v-row justify="end" class="pa-4">
                                    Published: {{song.publishedDate | formatDate}}
                                </v-row>
                            </v-list-item-subtitle>
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
    // import debounce from "lodash.debounce";
    import orderBy from 'lodash/orderBy';
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
                search: '',
                sort: [false, false, false, false, false, false],
                sortShow: false,
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
            sortNameAsc()
            {
                this.noSort();
                this.sort[0] = true;
            },
            sortNameDsc()
            {
                this.noSort();
                this.sort[1] = true;
            },
            sortPubDateAsc()
            {
                this.noSort();
                this.sort[2] = true;
            },
            sortPubDateDsc()
            {
                this.noSort();
                this.sort[3] = true;
            },
            sortJDateAsc()
            {
                this.noSort();
                this.sort[4] = true;
            },
            sortJDateDsc()
            {
                this.noSort();
                this.sort[5] = true;
            },
            noSort()
            {
                this.sort = [false, false, false, false, false, false] ;
            },
        },
        computed: {
            sortPlaylist(){
                if(this.sort[0])
                {
                    return orderBy(this.playlist, 'songTitle', 'asc');
                }
                if(this.sort[1])
                {
                    return orderBy(this.playlist, 'songTitle', 'desc');
                }
                if(this.sort[2])
                {
                    return orderBy(this.playlist, 'joiningDate', 'asc');
                }
                if(this.sort[3])
                {
                    return orderBy(this.playlist, 'joiningDate', 'desc');
                }
                if(this.sort[4])
                {
                    return orderBy(this.playlist, 'publishedDate', 'asc');
                }
                if(this.sort[5])
                {
                    return orderBy(this.playlist, 'publishedDate', 'desc');
                }
                return this.playlist;

            }
            // filterSongs : debounce(function()
            // {
            //     return this.playlist.filter((item) => {
            //     item.map(s => s.artistName).toLowerCase().match(this.search)
            //     })
            // }, 100),
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