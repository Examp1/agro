<template>
  <section class="infoSection">
	<h1>H1 - AgroPortal.ua -</h1>
	<p class="description">
		☘ агроновини України і світу: технології, рослинництво, тваринництво, органіка, сільгосптехніка, клімат
	</p>
	<ul class="df jcsb">
		<li v-for="(li, idx) in list" :key="idx">
			{{ li.text }}
		</li>
	</ul>
  </section>
</template>

<script>
export default {
name: 'app-infoBlock',
data() {
	return {
		list: [
			{
				text: 'AgroPortal.ua стартовал 1 октября 2015 г., над его созданием трудится команда профессиональных редакторов и журналистов. Ядро нашей целевой аудитории – активные успешные люди, которые формируют «аграрную» жизнь страны.'
			},
			{
				text: 'Ядро нашей целевой аудитории – активные успешные люди, которые формируют «аграрную» жизнь страны. Ядро нашей целевой аудитории – активные успешные люди, которые формируют «аграрную» жизнь страны.'
			},
			{
				text: 'Ядро нашей целевой аудитории – активные успешные люди, которые формируют «аграрную» жизнь страны. Ядро нашей целевой аудитории – активные успешные люди, которые формируют «аграрную» жизнь страны.'
			}
		]
	}
},
}
</script>

<style lang="sass" scoped>
.infoSection
	background-color: $c-gray-light-0
	text-align: center
	ul 
		margin-left: 30px
		li 
			text-align: left
			font-style: normal
			font-weight: normal
			font-size: 16px
			line-height: 145%
			letter-spacing: -0.02em
			color: #3C3F49
			&:not(:last-of-type)
				margin-right: 20px
	.description
		font-style: normal
		font-weight: 500
		font-size: 22px
		line-height: 145%
		text-align: center
		color: #3C3F49
h1
	@include heading-1
</style>