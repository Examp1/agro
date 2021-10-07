<template>
  <li class="df jcsb">
    <div class="l">
      <img src="@/assets/img.png" alt="" />
    </div>
    <div class="r df fdc">
      <div class="infoWarpper">
        <span>29 серпня 2021, 13:00</span
        ><span>145 <i class="ic-eye"></i></span>
        <p class="title">
          AGROGEAR. Збереження вологи. Кожне господарство обирає найкращі
          технології під свої умови
        </p>
      </div>
    </div>
  </li>
</template>

<script>
export default {
	name: 'item'
};
</script>

<style lang="sass" scoped>
@import '@/assets/sass/blocks'
.article
	margin-bottom: 10px
	&:last-of-type
		margin-bottom: 15px
	.l
		width: 55%
		margin-right: 10px
	.r
		width: 45%
.article .title
	@include subtitle-3
.footerArticle
	.title
		@include subtitle-1
		font-weight: 400
</style>
