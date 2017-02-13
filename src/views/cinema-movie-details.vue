<template>
	<div class="date">
		<div class="swiper-container tab">
		  	<div class="swiper-wrapper">
		    	<div class="swiper-slide" v-for="(item,index) in cinemaMovieDetail.Dates" >
		    		<div :class="{active:index==show}" @click="handleClick(index)">{{item.text}}</div>					
		    	</div>		   
		  	</div>
		</div>
		<div class="con">
			
			<div  v-for="(item,key,index) in cinemaMovieDetail.DateShow" :key="index" v-show="index==show">
				<div v-if="item.length==0" class="sold-out">今日场次已售完</div>
				<ul>
					<li v-for="i in item" :key="i.showId" class="session">
						<div class="time">
							<p class="start">{{i.tm}}</p>
							<p class="end">{{i.end}}结束</p>
						</div>
						<div class="type">
							<p class="lang">{{i.lang}}{{i.tp}}</p>
							<p class="th">{{i.th}}</p>
						</div>
						<div class="price">
							33元
						</div>
						
						
					</li>
				</ul>
			</div>
			
		</div>
	</div>
</template>
<script type="text/javascript">
export default{
	data(){
		return {
			cinemaMovieDetail:{
	    		Dates:[],
	    		DateShow:{}
	    	},	
	    	mySwiper:{},
	    	show:0
		}
	},
	created(){
		this.getCinemaMovieDetail();

	},
	watch:{
		'$route'(to,from){
			if(to.name==this.$route.name){

				this.getCinemaMovieDetail();
			}
		}
		
	},
	mounted () {
      this.mySwiper = new Swiper('.tab', {
       direction: 'horizontal',
       slidesPerView:3.5
     });
   },
   updated(){
   		this.mySwiper.updateSlidesSize()
   },
	methods:{
		getCinemaMovieDetail(){
			const movieid=this.$route.params.movieid||"";
			const cinemaid=this.$route.params.cinemaid;
	  		this.$http.get(`http://localhost:8080/showtime/wrap.json?cinemaid=${cinemaid}&movieid=${movieid}`).then(response=>{
	  		
	  			this.cinemaMovieDetail=response.data.data;
	  			this.show=0;
	  			
	  		}).catch(error=>{
	  			console.log(error);
	  		})
		},
		handleClick(index){
			this.show=index;
		}	
	}
}
</script>
<style lang="scss">
.date{
	.tab{
		overflow:hidden;
		padding:0.2rem;
		.swiper-slide{
			div{
				/*float:left;*/
				/*width:30%;*/
				text-align:center;
				font-size:0.36rem;
				font-weight:bold;
				height: 0.6rem;
				line-height: 0.6rem;
				border-radius:0.3rem;
				color:#666;
				&.active{
					color:#fff;
					background-color: #ef504d;
				}
			}
		}
		
	}
	.con{
		border-top:1px solid #ccc;
		.sold-out{
			text-align: center;
			padding:1rem 0;
			font-size: 0.4rem;
			line-height: 0.8rem;
			background-color: #f5f5f5;
		}
	}
	.session{
		overflow: hidden;
		background-color: #fff;
		border-bottom:1px solid #ccc;
		padding:0.2rem 0;
		color:#999;

		.time{
			float:left;
			text-align:center;
			width:22%;
			border-right:1px solid #ccc;
			.start{
				color:#df2d2d;
				font-weight: bold;
				font-size: 0.46rem;
				line-height: 0.6rem;
			}
			.end{
				font-size: 0.3rem;
				line-height: 0.4rem;
			}
		}
		.type{
			float:left;
			text-align:center;
			width:38%;
			font-size: 0.34rem;
			line-height: 0.48rem;
		}
		.price{
			float: left;
			width:40%;
			text-align:center;
			font-size: 0.5rem;
			line-height: 1rem;
			color:#df2d2d;

		}
	}
}
</style>