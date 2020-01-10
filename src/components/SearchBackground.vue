<template>
    <div class="searchBackground"></div>
</template>

<script>
    export default {
        name: "SearchBackground"
    }
</script>

<style scoped>
.searchBackground{
    position: fixed;
    width: 100%;
    top: 0;
    z-index: -1;
    height: 100vh;
    background-blend-mode: soft-light;
    background: url("../assets/754283.jpg") no-repeat;
    background-size: cover;
}
</style>