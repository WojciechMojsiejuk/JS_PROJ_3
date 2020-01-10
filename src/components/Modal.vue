<template>
    <div class="outerWrapper">
        <div class="innerWrapper">
            <div class="mediaPlayer">
                <youtube :video-id="videoId"></youtube>
            </div>
                <div class="description">
                    <div class="title">
                        <h2>
                            Song title:
                        </h2>
                        {{songTitle}}
                    </div>
                    <div class="artists">
                        <h2>
                            Artist:
                        </h2>
                        <v-container fluid>
                            <v-row>
                                <v-col cols="12">
                            <v-combobox
                                    v-model="newArtist"
                                    attach=".artists"
                                    :items="dbArtists"
                                    :item-text="artistDescription"
                                    :search-input.sync="search"
                                    label="Combobox"
                                    multiple
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
    <!--                    <input v-model="message" placeholder="edit me">-->
                    </div>
                </div>
        </div>
        <div class="close" @click="$emit('closeModal')"/>
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
                songTitle: null,
                channelTitle: null,
                published: null,
                thumbnails: null,
                videoId: null,
                dbArtists: [],
                newArtist: [],
                search: null,
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
        background: aliceblue;
        max-width: 80%;
        height: 80%;
        position:fixed;
        top:0;
        left:0;
        right:0;
        bottom:0;
        margin:auto;
        box-shadow: 0 30px 30px -10px rgba(0,0,0,0.3);
    }
    .innerWrapper{
        display: flex;
        height: 100%;
        /*justify-content: center;*/
        align-items: center;
        flex-direction: row;
    }
    .mediaPlayer{
        display: block;
        min-width: 50%;
        /*height: auto;*/
        float:left;
        max-width: 70%;
        position: relative;
    }
    .description{
        display: block;
        max-width: 30%;
        height: auto;
        color: black;
        float:left;
        position: relative;
    }
    .close{
        position: absolute;
        width: 30px;
        height: 30px;
        padding: 30px;
        right: 0;
        top: 0;
        cursor: pointer;
    }
    .close::before,
    .close::after{
        position: absolute;
        top:20px;
        right: 20px;
        content:'';
        width: 10px;
        height: 2px;
        background: black;
        display: block;
    }

    .close::before{
        transform: rotate(45deg);
    }
    .close::after{
        transform: rotate(-45deg);
    }
</style>