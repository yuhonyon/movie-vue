<template>
  <div>
	<my-header >首页</my-header>

	<div class="swiper-container headerBanner">
	  <div class="swiper-wrapper">
	    <div class="swiper-slide"><img src="../assets/images/1.jpg"></div>
	    <div class="swiper-slide"><img src="../assets/images/2.jpg"></div>
	    <div class="swiper-slide"><img src="../assets/images/3.jpg"></div>
	  </div>
	  <div class="swiper-pagination"></div>
	</div>

  <div>
    <h4>最近熱映</h4>
    <banner :link="'MovieDetails'" :movies="bannerData" :slidesPerView="5" ></banner>
  </div>

	<div class="blockBtnBox">

    <router-link to="/Movie" class="blockBtn"><i class="iconfont icon-dianyingicon"></i>查看所有影片</router-link>
    <router-link to="/Cinema" class="blockBtn"><i class="iconfont icon-dianying"></i>查看附近影院</router-link>
	</div>
  </div>	
</template>

<script>
import '../assets/scss/style.scss';
import '../assets/scss/iconfont/iconfont.css';
import Swiper from '../../static/swiper-3.4.1.min.js';
import '../../static/swiper-3.4.1.min.css';
import Banner from '../components/banner.vue';
import MyHeader from '../components/myHeader.vue';
export default {
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      bannerData:[]
    };
  },
  created () {
    this.getBannerData();
  },
  mounted () {
 
     var mySwiper = new Swiper('.headerBanner', {
       direction: 'horizontal',
       loop: true,
       pagination: '.swiper-pagination'
     });
   },
   methods:{
      getBannerData(){
        this.$http.get("http://localhost:8080/movie/list.json?type=hot&offset=0&limit=10")
        .then((response)=>{
          this.bannerData=response.data.data.movies
        }).catch((error)=>{
        })
      }
   },
   components:{
      Banner,
      MyHeader
   }
};
</script>

<style lang="scss" scoped>
h4{
  padding: 0 .2rem .2rem;
  text-align: center;
}

.headerBanner{
	height: 2.8rem;

  img{
    width: 100%;
  }
  
}

.blockBtnBox{
  margin-top: 2rem;
}
.blockBtn{
  height: 1rem;
  width: 80%;
  margin-left: 10%;
  background: #df2d2d;  
  color: #fff;
  display: block;
  line-height: 1rem;
  text-align: center;
  border-radius: 3px;
  font-size: .5rem;
  margin-bottom: .4rem;
  i{
    margin-right: .3rem;
  }
}
</style>
