<template>
	<div>
		<div v-show="userInfo" id="head" class="parallax" parallax-speed="2">
			<h1 id="logo" class="text-center">
				<img @click="changeNun" class="img-circle img-circle-min" :src="userInfo.img" alt="">
				<img class="img-circle img-circle-max" :src="userInfo.img" alt="">
				<span class="title" style="font-size: 1.2rem">{{userInfo.nickname}}</span>
				<span class="tagline">QQ：563995050 <br> wechat：563995050LOVE <br> email：{{userInfo.email}}<br><br>{{userInfo.introduction}}</span>
			</h1>
		</div>
	</div>
</template>
<script>
	export default {
		props:["userInfo"],
		methods:{
			changeNun:function(){
				this.$router.push({ name: 'me'})
			}
		}
	}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.img-circle:hover{
	transform: rotateZ(30deg);
	transition: .6s all;
}
@media (max-width: 768px) {
	#head img.img-circle-min{
		display: block;
	}
	#head img.img-circle-max{
		display: none;
	}
}
@media (min-width: 768px) {
	#head img.img-circle-min{
		display: none;
	}
	#head img.img-circle-max{
		display: block;
	}
}
</style>