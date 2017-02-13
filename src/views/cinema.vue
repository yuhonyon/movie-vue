<template>
  <div>
	<my-header :back="true">附近影院</my-header>
	<div class="cinemaList">
		<div class="area" v-for="(item,key,index) in cinemaData">
			<div class="town" @click="handleClick(index)">
				{{key}}
				<span>({{item.length}}家)</span>
				<var v-if="show[index]"><i class="iconfont icon-jiantou-up-copy"></i></var>
				<var v-else><i class="iconfont icon-jiantou-down-copy"></i></var>
			</div>
			<ul v-show="show[index]">
				<li class="cinema" v-for="i in item">
					<router-link :to="{name:'CinemaDetails',params:{cinemaid:i.id}}">
						<p class="name">{{i.nm}}<span v-if='i.sell'>座</span></p>
						<p class="place">{{i.addr}}</p>
					</router-link>
					
				</li>
			</ul>
		</div>
	</div>
  </div>
</template>

<script>
import MyHeader from '../components/myHeader.vue';
export default {
  data () {
    return {
      cinemaData:{},
      show:[true]
    }
  },
  methods:{
  	getCinemaData(){
  		this.$http.get("http://localhost:8080/myapi/cinemas.json").then((response)=>{
  			this.cinemaData=response.data.data;
  		}).catch(error=>{
  			console.log(error);
  		})
  	},
  	handleClick(index){
  		if(this.show.length<=index){
  			this.show.length=index+1;
  			this.show.splice(index,1,true);
  		}else{
  			this.show.splice(index,1,!this.show[index]);
  		}
  	}
  },
  created(){
  	this.getCinemaData();
  },
  components:{
  	MyHeader
  }
}
</script>

<style lang="scss" scoped>
.cinemaList{
	.area{
		border-top:1px solid #ccc;
		.town{
			background-color: #fff;
			height:0.8rem;
			border-bottom:1px solid #ccc;
			line-height: 0.8rem;
			padding:0 0.2rem;
			font-size:0.28rem;
			color:#7a7a7a;
			var{
				float: right;
				font-size: .2rem;
				color: #999;
			}
			span{
				font-size:0.25rem;
			}
		}
		.cinema{
			border-bottom:1px solid #ccc;
			padding:0.2rem;
			background-color: #f2f2f2;
			a{
				display:block;
				&:active{
					background-color:#ccc;
				}
			}
			.name{
				font-size:0.3rem;
				color:#333;
				line-height: 0.4rem;
				span{
					color:#fff;
					display: inline-block;
					font-size:0.28rem;
					background-color: #d92d2d;
					border-radius:3px;
					padding:4px 7px;
					margin-left:10px;
				}
			}
			.place{
				font-size:0.25rem;
				color:#999;
				line-height: 0.6rem;
			}
		}
		ul{
			
		}
	}
}
</style>
