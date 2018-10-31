<template>
	<div>
		<nav  v-show="classData" class="navbar navbar-default navbar-sticky">
			<div class="container-fluid">
				<div class="navbar-header">
					<button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1"> 
						<span class="sr-only">Toggle navigation</span> 
						<span class="icon-bar"></span> 
						<span class="icon-bar"></span> 
						<span class="icon-bar"></span> 
					</button>
				</div>
				<div class="navbar-collapse collapse">
					<ul class="nav navbar-nav">
						<li v-bind:class="{ liActive: $store.state.activeNav == 1 }" @click="navbarNavItemActive(1,'')" class="navbar-nav-item"><router-link :to="{name:'index'}">home</router-link></li>
						<li v-bind:class="{ liActive: $store.state.activeNav == index+2 }" @click="navbarNavItemActive(index+2,item._id)" class="navbar-nav-item" v-for="(item, index) in classData" :key="index">
							<router-link :to="{name:'index'}">{{item.name}}</router-link>
						</li>
						<li v-bind:class="{ liActive: $store.state.activeNav == classData.length+2 }" @click="navbarNavItemActive(classData.length+2,'')" class="navbar-nav-item"><router-link :to="{name:'me'}">me</router-link></li>
					</ul>
				</div>   
			</div>  
		</nav>
	</div>
</template>
<script>
	export default {
		props:["classData"],
		data() {
			return{
				navsNum: 2
			}
		},
		mounted:function(){
			this.navsNum = this.classData.length+2
			this.axios.get('/api_main/index/all').then((response) => {
				const res = response.data
				if(res.code === 0 ){
					this.$store.commit('userInfoVuex', res.data[1])
					this.$store.commit('classDataVuex', res.data[0])
				}else{
				}
			})
		},
		methods:{
			navbarNavItemActive:function (e,id) {
				this.$store.state.activeNav = e 
				this.$store.state.activeNavId = id 
				this.$emit('changeClassFn',id)
			}
		}
	}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.navbar-nav-item:active,.navbar-nav-item:hover{
	border: 1px solid #cccccc;
	box-sizing: border-box;
	border-top: 0;
	border-bottom: 0;
}
.navbar-default .navbar-nav > li.liActive > a{
	color: #bd1550;
}
@media (max-width: 768px) {
	.navbar-default{
		display: none;
	}
}
</style>