<template>
	<div>
		<el-carousel :interval="4000" type="card" height="200px" :autoplay="false">
			<el-carousel-item v-for="item in carousel.length" :key="item">
				<SubjectView :info="carousel[item-1]"></SubjectView>
			</el-carousel-item>
		</el-carousel>
		<ul>
			<li :id="'subject-item-'+n" class="circle-subject-item" v-for="n in subject.length" :key="n">
				<SubjectView :info="subject[n-1]"></SubjectView>
			</li>
		</ul>
	</div>
</template>

<script>
	import SubjectView from './views/subjectView.vue'
	export default {
		components: {
			"SubjectView": SubjectView
		},
		created: function() {
			console.log("circleFollow>created", SubjectView);
		},
		mounted: function() {
			console.log("mounted");
		},
		data: function() {
			return {
				info: null,
				carousel: [
					{
						title: "小帅哥推荐你来玩哦",
						content: "谁请吃饭啊, 肚子好饿啊;谁请吃饭啊, 肚子好饿啊;谁请吃饭啊, 肚子好饿啊;谁请吃饭啊, 肚子好饿啊",
						thumbImg: "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
						isCarousel: true
					},
					{
						title: "小美女推荐你来玩哦",
						content: "谁请吃饭啊, 肚子好饿啊;谁请吃饭啊, 肚子好饿啊;谁请吃饭啊, 肚子好饿啊;谁请吃饭啊, 肚子好饿啊",
						thumbImg: "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
						isCarousel: true
					}
				],
				subject: [{
						title: "下午没吃饭好饿啊",
						content: "谁请吃饭啊, 肚子好饿啊, 我要出去了, 真的好奇哦",
						thumbImg: "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
					},
					{
						title: "一群智障诶",
						content: "啊哈嗯哼哦豁",
						thumbImg: "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
					},
					{
						title: "注册想要子传给父的事件",
						content: "注册想要子传给父的事件",
						thumbImg: "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
					},
					{
						title: "通过点击上述事件",
						content: "会触发下图的方法，然后通过注册的事件",
						thumbImg: "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
					},
					{
						title: "效果如图",
						content: "再通过触发updatetitle（$event）（注：$event是注册事件时所传的形参）",
						thumbImg: "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
					},
					{
						title: "传值和传引用的区别",
						content: "传值指的是传String、布尔等基本类型值；传值只改变所设定的要改变的值",
						thumbImg: "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
					},
					{
						title: "注册想要子传给父的事件",
						content: "注册想要子传给父的事件",
						thumbImg: "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
					},
					{
						title: "通过点击上述事件",
						content: "会触发下图的方法，然后通过注册的事件",
						thumbImg: "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
					},
					{
						title: "效果如图",
						content: "再通过触发updatetitle（$event）（注：$event是注册事件时所传的形参）",
						thumbImg: "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
					},
					{
						title: "传值和传引用的区别",
						content: "传值指的是传String、布尔等基本类型值；传值只改变所设定的要改变的值",
						thumbImg: "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
					},
					{
						title: "传引用指的是传对象、数组等引用类型值",
						content: "传引用当改变一个数据的值，则与该绑定的值相关的值都会发生变化",
						thumbImg: "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
					}
				]
			}
		},
		info: {
			n(newValue, oldValue) {
				console.log("info: ", newValue, oldValue);
			}
		},
	}
</script>

<style lang="scss">
	.circle-subject-item {
		width: 33.33%;
		height: 13.8rem;
		min-width: 10rem;
		display: inline-flex;
		padding: 0.3rem;
	}


	.circle-subject-item:hover {
		background-color: whitesmoke;
	}

	.el-carousel__item h3 {
		color: #475669;
		font-size: 14px;
		opacity: 0.75;
		line-height: 200px;
		margin: 0;
	}

	.el-carousel__item:nth-child(2n) {
		background-color: #99a9bf;
	}

	.el-carousel__item:nth-child(2n+1) {
		background-color: #d3dce6;
	}
</style>
