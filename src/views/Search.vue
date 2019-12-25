<template>
  <div :class="[{ flexStart: step===1 },'wrapper']">
    <transition name="fade">
      <SearchBackground v-if="step === 0"></SearchBackground>
    </transition>
    <SearchClaim v-if="step === 0"></SearchClaim>
    <SearchInput v-model="searchValue" @input="handleInput" :dark="step===1"></SearchInput>
    <div class="searchResults" v-if="results && !loading && step===1">
      <SearchResultItem v-for="item in results" :item="item" :key="item.id.videoId"></SearchResultItem>
    </div>
  </div>
</template>

<script>
  import axios from 'axios';
  import debounce from 'lodash.debounce';
  import SearchInput from "@/components/SearchInput";
  import SearchBackground from "@/components/SearchBackground";
  import SearchClaim from "@/components/SearchClaim";
  import SearchResultItem from "@/components/SearchResultItem";
  const YOUTUBE_API = 'https://www.googleapis.com/youtube/v3/search';
export default {
  name: 'Search',
  components:
          {
            SearchClaim,
            SearchBackground,
            SearchInput,
            SearchResultItem
          },
  data() {
    return {
      loading: false,
      step: 0,
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
              $this.loading = true;
              axios.get(`${YOUTUBE_API}?q=${this.searchValue}&part=snippet&key=AIzaSyCofLG8HocAvre4tEmdRye5-jhmvu9f3Qc&type=video&videoCategoryId=10`)
                      .then(function(response){
                        let searchResults = response.data.items;
                        $this.results = searchResults;
                        $this.loading=false;
                        $this.step=1;

                      }).catch(function(error){
                        // eslint-disable-next-line no-console
                        console.log(error);
                      });
            }, 1500),
          },
};

</script>

<style scoped>

.wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
  padding: 30px;
  width: auto;
  height: 100vh;
  justify-content: center;
  color: aliceblue;
}

.flexStart{
  justify-content: flex-start;
}

  .fade-enter-active, .fade-leave-active{
    transition: opacity .6s ease;
  }
  .fade-enter, .fade-leave-to{
    opacity: 0;
  }
  .searchResults{
    margin-top: 50px;
    color: midnightblue;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
  }

</style>
