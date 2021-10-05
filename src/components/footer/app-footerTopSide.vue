<template>
  <section class="topSide">
    <p class="title">
      Підписуйтесь на кращі новини агропромисловості в Україні 👇
    </p>
    <form action="#" class="df footerForm">
      <input type="email" placeholder="Ваш Email" name="email" />
      <button type="submit"><i class="ic-arrow-right"></i></button>
    </form>
    <ul class="social">
      <li v-for="(item, idx) in social" :key="idx">
        <a href="#">
          <i :class="item.icon"></i>
          <span>{{ item.text }}</span>
        </a>
      </li>
    </ul>
	<i class="hr"></i>
    <ul class="articleList">
      <!-- <li class="article df jcsb" v-for="i in 3" :key="i">
        <router-link :to="'/'">
          <div class="l">
            <img src="../../assets/img.png" alt="" />
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
        </router-link>
      </li> -->
      <article-item class="footerArticle" v-for="i in 3" :key="i"></article-item>
    </ul>
  </section>
</template>

<script>
import articleItem from '../contentZone/app-articleItem'
export default {
  name: "footerTopSide",
  components: {
    articleItem,
  },
  data() {
    return {
      social: [
        {
          icon: "ic-fb",
          text: "Facebook",
        },
        {
          icon: "ic-tl",
          text: "Telegram",
        },
        {
          icon: "ic-inst",
          text: "Instagram",
        },
        {
          icon: "ic-youtube",
          text: "Youtube",
        },
        {
          icon: "ic-tik-tok",
          text: "Tik-Tok",
        },
      ],
    };
  },
};
</script>

<style lang="sass" scoped>
@import '../../assets/sass/footerStyle/footer'
.articleList
	display: flex
	width: 100%
	li
		display: flex
		flex-direction: column
		width: 33%
		text-align: left
		position: relative
		&:not(:last-of-type)
			margin-right: 30px
			&::before
				content: ''
				position: absolute
				right: -15px
				background-color: $c-gray-dark-3
				width: 1px
				height: 100%
.topSide
	background-color: $c-gray-dark-2
	color: #fff
	text-align: center
	padding: 50px 30px
button
	width: 20%
.title
	@include text-1
.social
	color: $c-white
	margin-top: 70px
	display: flex
	justify-content: center
	li
		&:not(:last-of-type)
			margin-right: 50px
		a
			display: flex
			flex-direction: column
			align-items: center
	i
		color: inherit
		width: 50px
		height: 50px
		display: flex
		align-items: center
		justify-content: center
		font-size: 22px
		border-radius: 50%
		border: 1px solid #555861
		margin-bottom: 10px
</style>
