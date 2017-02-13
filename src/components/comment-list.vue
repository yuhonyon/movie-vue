<template>
  <li class="comment-list">
		<div>
			<score-star class="comment-star" :isMin="true" :score="score"></score-star>
			<span class="comment-time">{{time}}</span>
		</div>
		<p>{{comment}}</p>
		<div class="comment-user">
			<div><img :src="img"></div>
			<span>{{name}}</span>
		</div>
	</li>
</template>

<script>
import ScoreStar from '../components/scoreStar.vue';
export default {
	props: {
        img:{
	      type: String,
	      default: "http://p1.meituan.net/165.220/movie/d273af80e581b4c60abcbb57a95ad2b72956123.jpg"
	    },
	    name:{
	      type: String,
	      default: "名称"
	    },
	    comment:{
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
	    }
    },
  components:{
      ScoreStar
   }
}
</script>


<style lang="scss" scoped>
	.comment-list{
		padding: 0 .2rem .2rem;
		border-bottom: 1px solid #eee;

		p{
			color: #666;
			float: left;
			width: 100%;
			padding-bottom: .2rem;
		}
		.comment-user{
			overflow: hidden;
			width: 100%;
			div{
				height: 1rem;
				width: 1rem;
				border-radius: 50%;
				overflow: hidden;
				float: left;
				img{
					width: 100%;
				}
			}
			span{
				color: #999;
				float: left;
				line-height: 1rem;
				margin-left: .2rem;
			}
		}
	}
	.comment-star{
		float: left;
	}
	.comment-time{
		float: right;
		color: #999;
		font-size: .3rem;
		line-height: .7rem;
	}
</style>