<template>
  <footer class="df jcsb">
    <div class="col">
		<img src="../../assets/logo.png" alt="">
		<ul>
			<li>
				<router-link :to="{path: '/'}">Новини</router-link>
			</li>
			<li>
				<router-link :to="{path: '/'}">Публікації</router-link>
			</li>
			<li>
				<router-link :to="{path: '/'}">Блоги</router-link>
			</li>
			<li>
				<router-link :to="{path: '/'}">Спецпроекти</router-link>
			</li>
			<li>
				<router-link :to="{path: '/'}">Мультимедіа</router-link>
			</li>
			<li>
				<router-link :to="{path: '/'}">Команда</router-link>
			</li>
			<li>
				<router-link :to="{path: '/'}">Реклама</router-link>
			</li>
			<li>
				<router-link :to="{path: '/'}">Правила користування</router-link>
			</li>
				<p class="w100">Підписатись на новини</p>
			<form action="#" class="df footerForm">
				<input type="email" placeholder="Ваш Email" name="email">
				<button type="submit"><i class="ic-arrow-right"></i></button>
			</form>
		</ul>
	</div>
	<div class="copy df jcsb">
		<p>© 2015-2021 AgroPortal.ua Усі права захищені.</p>
		<p>Created by <a href="#" target="_blank"><i class="ic-owlwebLogo"></i></a></p>
	</div>
  </footer>
</template>

<script>
export default {};
</script>

<style lang="sass" scoped>
@import '../../assets/sass/footerStyle/footer'
.col
	width: 100%
	flex-direction: column
	align-items: center
</style>
