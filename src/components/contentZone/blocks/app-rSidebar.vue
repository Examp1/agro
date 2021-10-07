<template>
  <aside>
    <div class="df jcsb ait">
      <h2 data-v-b8225eb0="">H2-Блоги</h2>
      <a
        href="/"
        aria-current="page"
        class="router-link-exact-active router-link-active"
      >
        <i class="ic-arrow-right"></i
      ></a>
    </div>
	<ul class="articleList">
		<router-link :to="'/'">
			<li v-for="i in 3" :key="i" class="df jcsb">
			<img src="https://via.placeholder.com/150" alt="">
			<div class="textBlock">
				<p class="date">
					28 серпня 2021, 13:00
				</p>
				<p class="view">
					145 <i class="ic-eye"></i>
				</p>
				<p class="name">
					Валерій Яковенко 
				</p>
				<p class="descr">
					Співзасновник компанії DroneUA, голова профспілки безпілотної журналістики
				</p>
				<p class="descr2">
					Як дрони рятують соняшник в Україні
				</p>
			</div>
		</li>
		</router-link>
	</ul>
	<router-link :to="'/'" class="viewAll">Показати все <i class="ic-arrow-right"></i></router-link>
	<div class="ads">
		<img src="https://via.placeholder.com/250" alt="">
	</div>
  </aside>
</template>

<script>
export default {};
</script>

<style lang="sass" scoped>
.viewAll
	font-style: normal
	font-weight: 600
	font-size: 16px
	line-height: 100%
	text-align: center
	color: #66B31E
	margin-top: 50px
	margin-bottom: 50px
	display: block
	i
		margin-left: 10px
		color: inherit
aside
	padding: 15px 10px
	border-top: 4px solid $c-green2
	background-color: $c-gray-light-0
	width: 100%
	position: relative
	h2
		margin-top: 0px
	&::before
		content: ''
		position: absolute
		width: 1px
		height: 100%
		background-color: $c-gray-light-1
		left: -15px
		top: 0px
.articleList
	li
		&:not(:last-of-type)
			margin-bottom: 30px
		&:hover
			.name, .descr2
				color: #75AD40
			img
				border-color: #75AD40
		img
			margin-right: 10px
			width: 75px
			height: 75px
			border-radius: 50%
			border: 3px solid #DEDDE7
			transition: .3s
		.date, .view
			font-style: normal
			font-weight: 500
			font-size: 12px
			display: inline-flex
			align-items: center
			line-height: 135%
			letter-spacing: 0.01em
			color: #9E9EA7	
			margin: 0px
			i
				color: inherit
		.name, .descr2
			transition: .3s
			font-style: normal
			font-weight: 600
			font-size: 13px
			line-height: 120%
			color: #111325
			margin: 0px
		.descr
			font-style: normal
			font-weight: 500
			font-size: 12px
			line-height: 130%
			color: #111325	
			margin-top: 5px
			margin-bottom: 5px
</style>
