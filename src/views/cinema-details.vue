<template>
  <div class="cinema-detail">
	<my-header :back="true">{{cinemaDetailModel.nm}}</my-header>
	<div class="cinema-info">
		<p class="address">{{cinemaDetailModel.addr}}</p>
		<div class="phone">
			<a  v-for="item in cinemaDetailModel.tel" :href="'tel:'+item">{{item}}</a>
		</div>
	</div>
	<banner :link="'CinemaMovieDetails'" :movies="moviesData" :slidesPerView="5" ></banner>	
	<router-view></router-view>
  </div>
</template>

<script>
import MyHeader from '../components/myHeader.vue';
import Banner from '../components/banner.vue';
export default {
  data () {
    return {
    	
    	cinemaDetailModel:{
    		tel:[]
    	},
    	show:[true,false],
    	moviesData:[]
    }
  },
  created(){
  	this.getCinemaDetail();
  },
 
  methods:{
  	getCinemaDetail(){
  		const id=this.$route.params.cinemaid;
  		this.$http.get(`http://localhost:8080/showtime/wrap.json?cinemaid=${id}`).then((response)=>{
  			this.cinemaDetailModel=response.data.data.cinemaDetailModel;
  			this.moviesData=response.data.data.movies;
 
  			this.$router.push({  params: { movieid: this.moviesData[0].id}})
  		}).catch(error=>{
  			console.log(error);
  		})
  	}
  	
  },
 
  components:{
  	Banner,
  	MyHeader
  }
}
</script>

<style lang="scss">
.cinema-detail{
	.banner-content{
		img{
			opacity: 0.3;
		}
	}
	.router-link-active{
		.banner-content{
			img{
				opacity: 1;
			}
		}
		
	}
}
.cinema-info{
	padding:0.2rem;
	background-color: #fff;
	font-size: 0.32rem;
	line-height: 0.44rem;
	margin-bottom:0.2rem;
	.address{
		color:#666;
	}
	.phone{
		text-decoration: underline;
		a{
			color:#df3434;
			margin-right: .2rem;
		}
	}
}
</style>
