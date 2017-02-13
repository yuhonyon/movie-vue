<template>
  <div>
	<my-header :back="true">所有影片</my-header>
	<ul class="movie-list">
		<movie-list v-for="movie in MovieListData" :key="movie.id" :id="movie.id" :img="movie.img" :title="movie.nm" :details="movie.scm" :time="movie.showInfo" :score="movie.sc" :tag="movie['3d']"></movie-list>
	</ul>
	<div>
		<a href="javascript:void(0);" class="more" @click="getMoreData">加载更多 <i class="iconfont icon-jiantou-down-copy"></i></a>
	</div>
  </div>


</template>

<script>
import MyHeader from '../components/myHeader.vue';
import MovieList from '../components/movie-list.vue';
export default {
	props: {
        back:{
	      type: Boolean,
	      default: true
	    }
    },
  data () {
    return {
      offset:0,
      MovieListData:[]
    }
  },
  created () {
    this.getMovieListData();
  },
  methods:{
      getMovieListData(){
        this.$http.get("http://localhost:8080/movie/list.json?type=hot&offset="+this.offset+"&limit=1000")
        .then((response)=>{
          this.MovieListData=this.MovieListData.concat(response.data.data.movies)
        }).catch((error)=>{
        })
      },
      getMoreData(){
      	this.offset+=1;
      	this.getMovieListData();
      }
   },
  components:{
      MyHeader,
      MovieList
   }
}
</script>

<style lang="scss" scoped>
.more{
	height: 1rem;
	line-height: 1rem;
	text-align: center;
	color: red;
	font-size: .4rem;
	display: block;
}
</style>
