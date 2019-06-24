<template>
	<el-card :body-style="{ padding: '0px', position: 'relative', height: '100%', width: '100%'}" style="width: 100%; height: 100%;">
		<div class="img-box">
			<img :src="info.thumbImg" class="image">
		</div>
		<div class="content-box" style="padding: 14px;">
			<span class="content-title">{{info.title}}</span>
			<div class="content-display">
				<span class="space2"></span>
				<div style="display: inline;">{{content}}</div>
			</div>
		</div>
		<div class="bottom clearfix" v-if="isCarousel">
			<time class="time">{{ currentDate }}</time>
			<div :underline="false" type="primary" class="button">操作按钮</div>
		</div>
		<div class="bottom" v-if="!isCarousel"><div class="button">[猜你喜欢]</div></div>
	</el-card>
</template>

<script>
	export default {
		props: {
			info: {
				thumbImg: String,
				title: String,
				content: String,
				isCarousel: Boolean
			}
		},
		data() {
			return {
				currentDate: this.utils.getDateDefault()
			};
		},
		computed : {
			content: function() {
				return this.info.content; 
			},
			isCarousel: function() {
				console.log("computed-isCarousel: ", this.info.isCarousel);
				return this.info.isCarousel? false : true;
			}
		},
		watch: {
			$utils(newValue, oldValue) {
				console.log("watch-$utils: ", newValue, oldValue);
			},
			isCarousel(newValue, oldValue) {
				console.log("watch-isCarousel: ", newValue, oldValue);
			}
		},

	}
</script>

<style lang="scss">

	.bottom {
		position: absolute;
		// line-height: 12px;
		text-align: right;
		right: 0.625rem;
		bottom: 0.2px;
		// background-color: aqua;
	}

	.time {
		font-size: 13px;
		color: #999;
		// right: 0.875rem;
		// bottom: 0px;
	}
	
	.button {
		padding-bottom: 0.3rem;
		right: 0.8rem;
		color:  navy;
		font-size: 0.8rem;
	}

	.image {
		width: 100%;
		height: 6rem;
		overflow: hidden;
		display: block;
		object-fit: cover;
	}
	
	.content-box {
		// height: 100%;
	}
	
	.content-title {
		font-size: 0.875rem;
		height: 0.875rem;
		line-height: 0.875rem;
		overflow: hidden;
		text-overflow: ellipsis;
		display: block;
		white-space: nowrap;
	}
	
	.content-display {
		margin-top: 0.1rem;
		font-size: 0.75rem;
		word-break:break-all;
		display:-webkit-box;
		-webkit-line-clamp:2;
		-webkit-box-orient:vertical;
		overflow:hidden;
	}
	
	.space2 {
		display: inline;
		padding-left: 20px;
		width: 0.8rem; 
		height: 1px;
	}

	.clearfix:before,
	.clearfix:after {
		content: "";
	}

	.clearfix:after {
		clear: both
	}
</style>
