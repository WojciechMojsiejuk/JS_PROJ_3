<template>
    <div class="outerWrapper" align="center">
        <v-card class="innerWrapper" max-height="90%" shaped>
            <div class="mediaPlayer pa-4">
                <youtube :video-id="videoId"></youtube>
            </div>
                <div class="description">
                    <v-form v-model="valid">
                    <v-container fluid>
                        <v-row>
                            <v-col cols="12">
                            <v-text-field
                                    required
                                    v-model="songTitle"
                                    :rules="songTitleRules"
                                    hide-details="auto"
                                    label="Song title:"
                                    prepend-icon="mdi-music-note-eighth"
                                    outlined
                                    rounded
                                    clearable
                                    dense
                            ></v-text-field>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="12">
                            <v-combobox
                                    required
                                    v-model="newArtists"
                                    :rules="artistsRules"
                                    attach=".results"
                                    :items="dbArtists"
                                    :item-text="artistDescription"
                                    :search-input.sync="search"
                                    label="Artists:"
                                    deletable-chips
                                    prepend-icon="mdi-artist"
                                    multiple
                                    rounded
                                    clearable
                                    outlined
                                    dense
                                    persistent-hint
                                    small-chips
                            >
                                <template v-slot:no-data>
                                    <v-list-item>
                                        <v-list-item-content>
                                            <v-list-item-title>
                                                No results matching "<strong>{{ search }}</strong>". Press <kbd>enter</kbd> to create a new one
                                            </v-list-item-title>
                                        </v-list-item-content>
                                    </v-list-item>
                                </template>
                            </v-combobox>
                            </v-col>
                            </v-row>
                    </v-container>
                    </v-form>
                    </div>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-row justify="space-around">
                        <v-btn rounded @click="$emit('closeModal')"><v-icon >mdi-close</v-icon>Close</v-btn>
                        <v-btn rounded :disabled="!valid"><v-icon>mdi-music-note-plus</v-icon> Add song to your playlist</v-btn>
                </v-row>
                <v-spacer></v-spacer>
            </v-card-actions>
            </v-card>
        </div>
</template>

<script>
    import axios from 'axios';
    const serverUrl = ' http://localhost:3000';

    export default {
        name: "Modal",
        props:
            {
                item:
                    {
                        type: Object,
                        required: true,
                    },
            },
        data(){
            return{
                valid: false,
                songTitle: null,
                channelTitle: null,
                published: null,
                thumbnails: null,
                videoId: null,
                dbArtists: [],
                newArtists: [],
                newSong: null,
                search: null,
                songTitleRules: [
                    value => !!value || 'Required.',
                    value => (value && value.length >= 3) || 'Min 3 characters',
                ],
                artistsRules: [
                    value => value.length>0 || 'Required.',
                ]
            };
        },
        methods:{
            artistDescription: item => item.name
        },
        mounted(){
            // let $this = this;
            this.songTitle = this.item.snippet.title;
            this.channelTitle = this.item.snippet.channelTitle;
            this.published = this.item.snippet.publishedAt;
            this.thumbnails = this.item.snippet.thumbnails;
            this.videoId = this.item.id.videoId;
            this.newArtists.push(this.channelTitle);
            // let $this = this;
            axios.get(serverUrl+'/artists').then(
                artists => {
                    let value = artists.data;
                    // eslint-disable-next-line no-console
                    console.log(value)
                    this.dbArtists = value
                    // eslint-disable-next-line no-console
                    console.log(this.dbArtists)
                });
        },
    }
</script>

<style scoped>

    .outerWrapper{
        max-width: 70%;
        height: 100%;
        position:fixed;
        padding:30px;
    }
    .innerWrapper{
        display: flex;
        height: auto;
        padding:20px;
        /*justify-content: center;*/
        flex-direction: column;
    }
    .mediaPlayer{
        display: block;
        /*height: auto;*/
        float:left;
        position: relative;
    }
    @media (max-width:1200px){
        .mediaPlayer{
            display: none;
        }
    }
    .description{
        display: block;
        height: auto;
        color: black;
        float:left;
        position: relative;
    }
</style>