<template>
	<div class="swiper-container banner">
	  <div class="swiper-wrapper">
	    <div class="swiper-slide" v-for="movie in movies">
		    <router-link :to="{name:'MovieDetails',params:{id:movie.id}}">
				<div class="banner-content">
					<div><img :src="movie.img"></div>
				<h5>{{movie.nm}}</h5>
				<span>{{movie.sc}}</span>
				</div>
			</router-link>	
	    </div>
	   
	  </div>
	</div>
</template>

<script>
export default {
	props: {
        movies:Array,
        slidesPerView:Number
    },
  data () {
    return {
      mySwiper:{},
      dat: {

      }
    };
  }, 
  mounted () {
      this.mySwiper = new Swiper('.banner', {
       direction: 'horizontal',
       slidesPerView:this.slidesPerView,
       loop: true
     });
   },
   updated(){
   		this.mySwiper.updateSlidesSize()
   }
};
</script>

<style lang="scss" scoped>
.banner-content{
	width: 100%;
	height: 4rem;
	overflow: hidden;
	padding: 0 .1rem;
	div{
		height: 2.5rem;
		width: 100%;
		overflow: hidden;
		img{
			width: 100%;
		}
	}
	h5{
		font-size: .3rem;
		overflow: hidden;
		text-overflow: ellipsis;
		width: 100%;
		text-align: center;
		white-space:nowrap;
	}
	span{
		color: red;
		font-size: .4rem;
		display: block;
		text-align:center;
	}
	
}
</style>