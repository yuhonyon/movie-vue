<template>
  <div class="header"><router-link to="/" class="blockBtn"><i v-if="back" class="iconfont icon-jiantou"></i></router-link> <slot></slot></div>
</template>

<script>
export default {
	props: {
        back:{
	      type: Boolean,
	      default: false
	    }
    }
}
</script>

