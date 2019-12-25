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
                        {{channelTitle}}
    <!--                    <input v-model="message" placeholder="edit me">-->
                    </div>
                </div>
        </div>
        <div class="close" @click="$emit('closeModal')"/>
    </div>
</template>

<script>
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
            };
        },
        mounted(){
            this.songTitle = this.item.snippet.title;
            this.channelTitle = this.item.snippet.channelTitle;
            this.published = this.item.snippet.publishedAt;
            this.thumbnails = this.item.snippet.thumbnails;
            this.videoId = this.item.id.videoId;
        },
    }
</script>

<style scoped>

    .outerWrapper{
        background: aliceblue;
        max-width: 80%;
        height: 60%;
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
        justify-content: center;
        align-items: center;
        flex-direction: row;
    }
    .mediaPlayer{
        min-width: 50%;
        max-width: 70%;
        margin-right: 20px;
    }
    .description{
        color: black;
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