<template>
  <li class="articleItem">
    <router-link :to="'/'">
      <span>{{ article.time }}</span>
      <span>{{ article.viewed }}<i class="ic-eye"></i> </span>
      <br />
      <span class="sticker" v-if="article.sticker">{{ article.sticker }}</span>
      <p class="title">{{ article.title }}</p>
    </router-link>
  </li>
</template>

<script>
export default {
  name: "app-list-item",
  props: {
    article: {
      type: Object,
      default: () => {},
    },
  },
};
</script>

<style lang="sass" scoped>
.articleItem
	padding: 15px 0px
	cursor: pointer
	transition: .3s
	&:not(:last-of-type)
		border-bottom: 1px solid $c-gray-light-1
	&:hover
		color: $c-green
	a
		display: block
	span
		font-style: normal
		font-weight: 500
		font-size: 12px
		line-height: 135%
		letter-spacing: 0.01em
		color: $c-gray-light-2
		display: inline-flex
		align-items: center
		&:first-of-type
			margin-right: 10px
		i
			font-size: 15px
			color: $c-gray-light-2
	.sticker
		font-style: normal
		font-weight: bold
		font-size: 10px
		line-height: 120%
		letter-spacing: 0.05em
		text-transform: uppercase
		color: $c-white
		background-color: $c-green
		padding: 3px 4px
		border-radius: 4px
	.title
		margin-bottom: 0px
		@include subtitle-3
</style>
