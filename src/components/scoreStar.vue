<template>
	<div :class="[{scoreStarMin:isMin},'scoreStar']">
		<div class="starBox">
			<div class="star" :style="{width:score*10+'%'}"></div>
		</div>
		<span>{{score}}</span>
	</div>
</template>

<script>
export default {
	props: {
        score:{
        	type:Number,
        	default:0
        },
        isMin:{
        	type:Boolean,
        	default:false
        }
    }
};
</script>

<style lang="scss" scoped>
.scoreStar{
  margin-top: .2rem;
  overflow: hidden;

  .starBox{
    width: 2.4rem;
    height: .5rem;
    float: left;
    background: url(../assets/images/star-empty.png) 0 0 repeat-x;
    background-size: .5rem auto;
    .star{
      width: 2.4rem;
      height: .5rem;
      background: url(../assets/images/star-full.png) 0 0 repeat-x;
      background-size: .5rem auto;
    }

  }
  span{
    float: left;
    margin-left: .2rem;
    color: #ffc600;
    font-size: .5rem;
  }
  &.scoreStarMin{
  	.starBox{
    width: 1.5rem;
    height: .4rem;
    float: left;
    background-size: .3rem auto;
    .star{
      width: 1.5rem;
      height: .4rem;
      background-size: .3rem auto;
    }

  }
  span{
    font-size: .25rem;
    margin-left: .1rem;
  }
  }
}
</style>