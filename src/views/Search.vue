<template>
  <div class="wrapper">
    <h1>HELLO</h1>
    <div class="searchSong">
      <label for="search"> Search your favourite songs</label>
      <input
        id="search"
        name="search"
        v-model="searchValue"
        @input="handleInput"
      />
    </div>

    <div class="searchResults">
      <ul>
        <li v-for="result in results" :key="result.id.videoId">
          <p>
            {{result.snippet.title}}
            {{result.snippet.channelTitle}}
          </p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import axios from 'axios';
  import debounce from 'lodash.debounce';
  const YOUTUBE_API = 'https://www.googleapis.com/youtube/v3/search';
export default {
  name: 'Search',
  data() {
    return {
      searchValue: '',
      results: [],
    };
  },
  //
  methods:
          {
            handleInput: debounce(function()
            {
              let $this = this;
              axios.get(`${YOUTUBE_API}?q=${this.searchValue}&part=snippet&key=AIzaSyCofLG8HocAvre4tEmdRye5-jhmvu9f3Qc&type=video&videoCategoryId=10`)
                      .then(function(response){
                        let searchResults = response.data.items;
                        $this.results = searchResults;

                      }).catch(function(error){
                        // eslint-disable-next-line no-console
                        console.log(error);
                      });
            }, 1500),
          },
};

</script>

<style scoped>

.wrapper{
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
  padding: 30px;
  width: 100%;
}

  .searchSong{
  display: flex;
    flex-direction: column;
    width: 300px;
  }
  input{
    height: 50px;
    border: 0;
    border-bottom: 1px solid black;
  }
</style>
