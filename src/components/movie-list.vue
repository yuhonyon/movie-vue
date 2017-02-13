<template>
  <li class="movie-list">
		<div>
			<img :src="img">
		</div>
		<div>
			<h4>{{title}}<var v-if="tag">3D</var></h4>
			<p>{{details}}</p>
			<span>{{time}}</span>
		</div>
		<div>
			<span>{{score}} <small>分</small></span>
			<router-link :to="{name:'MovieDetails',params:{id:id}}" class="movie-list-btn">详情</router-link>
		</div>
	</li>
</template>

<script>
export default {
	props: {
        img:{
	      type: String,
	      default: "http://p1.meituan.net/165.220/movie/d273af80e581b4c60abcbb57a95ad2b72956123.jpg"
	    },
	    title:{
	      type: String,
	      default: "未知名称"
	    },
	    tag:{
	      type: Boolean,
	      default: false
	    },
	    details:{
	      type: String,
	      default: "无描述"
	    },
	    time:{
	      type: String,
	      default: "上映时间未知"
	    },
	    score:{
	    	type:Number,
	    	default:10
	    },
	    id:{
	    	type:Number,
	    	default:0
	    }
    }
}
</script>


<style lang="scss" scoped>
.movie-list{
	height: 2rem;
	border-bottom: 1px solid #eee;
	padding-top: .14rem;
	>div:nth-child(1){
		width: 1.4rem;
		height: 1.7rem;
		float: left;
		margin:0 .3rem;
		overflow: hidden;
		img{
			width: 100%;
		}
	}

	>div:nth-child(2){
		width: 6rem;
		height: 100%;
		float: left;
		h4{
			font-size: .4rem;
			var{
				background: #2895db;
				padding: 0 .1rem;
				color: #fff;
				font-size: .3rem;
				border-radius: 3px;
				margin-left: .1rem;
			}
		}
		p{
			color: #666;
			padding: .1rem 0 0;
		}
		span{
			color: #666;
			font-size: .3rem;
		}
	}
	>div:nth-child(3){
		width: 2rem;
		height: 100%;
		float: left;
		text-align: right;
		padding-right: .3rem;
		span{
			font-size: .5rem;
			color: #ff9a00;
			display: block;
			small{
				font-size: .3rem;
			}
		}
		.movie-list-btn{
			font-size: .3rem;
			padding: .1rem .3rem;
			margin-top: .3rem;
		    background-color: transparent;
		    border-radius: 4px;
		    border: 1px solid #e54847;
		    color: #e54847;
		    display: inline-block;
		    vertical-align: top;
		    white-space: nowrap;
		}
	}
}
</style>