<template>
  <div class="movie-details">
  	<my-header :back="true">{{MovieData.nm}}</my-header>
  	<div class="movie-header">
      <div class="movie-background" :style="{background:'url('+MovieData.img+')'}"></div>
      <div class="movie-filter"></div>
  		<div class="movie-img">
  			<img :src="MovieData.img">
  		</div>
  		<div class="movie-info">
  			<h4>{{MovieData.nm}}</h4>
  			<small>{{MovieData.scm}}</small>
        <score-star :score="MovieData.sc"></score-star>
  			<p>(共{{MovieData.snum}}人评分)</p>
  			<p>{{MovieData.cat}}</p>
  			<p>{{MovieData.src}}/{{MovieData.dur}}分钟</p>
  			<p>{{MovieData.rt}}</p>

  		</div>
  	</div>
    <div class="movie-introduce" v-html="MovieData.dra">
    </div>

    <div class="panel">
      <h4>花絮</h4>
      <div class="player">
        <video controls="" :src="MovieData.vd"  data-reactid=".co9mqvikn4.4.1.0.0"></video>
      </div>
    </div>

    <div class="panel">
      <h4>评论</h4>
      <ul>
          <comment-list v-for="comment in CommentData" :img="comment.avatarurl" :name="comment.nickName" :comment="comment.content" :time="comment.time" :score="comment.score" :key="comment.id"></comment-list>
      </ul>
    </div>
  </div>
</template>

<script>
import MyHeader from '../components/myHeader.vue';
import ScoreStar from '../components/scoreStar.vue';
import CommentList from '../components/comment-list.vue';
export default {
  data () {
    return {
      id: this.$route.params.id,
      MovieData:{},
      CommentData:[]
    }
  },
  created () {
     this.getMovieData();
  },
  methods:{
      getMovieData(){
        this.$http.get("http://localhost:8080/movie/"+this.id+".json")
        .then((response)=>{
          this.MovieData=response.data.data.MovieDetailModel;
          this.CommentData=response.data.data.CommentResponseModel.hcmts;
        }).catch((error)=>{
        })
      }
   },
  components:{
      MyHeader,
      ScoreStar,
      CommentList
   }
}
</script>

<style lang="scss" scoped>
.movie-details{
  background: #f5f5f5;
}
.panel{
  background: #fff;
  margin-top: .5rem;
  border-top: 1px solid #eee;
  border-bottom: 1px solid #eee;
  h4{
    height: 1rem;
    line-height: 1rem;
    padding-left: .5rem;
    font-weight: bold;
    color: #666;
    border-bottom: 1px solid #eee;
  }
}
.player{
  video{
    background: #000;
    width: 100%;
    max-height: 5rem;
  }
}
.movie-header{
  height: 5rem;
  overflow: hidden;
  position: relative;
  .movie-img{
    position: relative;
    z-index: 1;
    width:3rem;
    overflow: hidden;
    border:2px solid #fff;
    height: 4rem;
    float: left;
    margin-top: .5rem;
    margin-left: .5rem;
    img{
      width: 100%;
    }
  }
  .movie-info{
    position: relative;
    z-index: 1;
    width: 6rem;
    float: left;
    padding-left: .5rem;
    padding-top: .4rem;
    h4{
      color: #fff;
      font-size: .48rem;
    }
    small{
      color: #fff;
      font-size: .3rem;

      opacity: .8;
    }
    p{
      opacity: .8;
      color: #fff;
      font-size: .3rem;
      line-height: .5rem;
    }
  }
}
.movie-background{
      top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    z-index: 0;
    position: absolute;
    filter: blur(.6rem);
    -webkit-filter: blur(.6rem);
    background-size: cover;
    background-image: gray;
    background-repeat: no-repeat;
    background-position-y: 40%;
}
.movie-filter {
        top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    z-index: 0;
    position: absolute;
    background-color: #40454d;
    opacity: .55;
}

.movie-introduce{
  padding: .2rem;
  background: #fff;
  color: #555;
  border-bottom: 1px solid #eee;
}
</style>
