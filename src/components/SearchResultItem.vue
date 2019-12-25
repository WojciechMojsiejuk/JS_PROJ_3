<template>
    <div class="item">
        <h1>{{this.songTitle}}</h1>
        <h2>{{this.channelTitle}}</h2>
        <p>{{this.published}}</p>
        <youtube :video-id="videoId"></youtube>
    </div>
</template>

<script>
    export default {
        name: "SearchResultItem",
        props:
            {
                item: {
                    type: Object,
                    required: true,
                },
            },
        data(){
            return{
                songTitle: this.item.snippet.title,
                channelTitle: this.item.snippet.channelTitle,
                published: this.item.snippet.publishedAt,
                thumbnails: this.item.snippet.thumbnails,
                desciption: this.item.snippet.description,
                videoId: this.item.id.videoId,
            };
        },
        mounted()
        {
            this.videoId = this.item.id.videoId;
        }
    };
</script>

<style scoped>
    .item{
        position: relative;
        padding: 30px;
        width: auto;
        height: auto;
    }

</style>