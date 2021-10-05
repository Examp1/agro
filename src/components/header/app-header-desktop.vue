<template>
  <header class="header fdc">
    <div class="header__top df jcsb ait">
		<img src="../../assets/logo.png" alt="">
    <ul class="lang-switcher df">
      <li>
        Укр
      </li>
      |
      <li>
        Рус
      </li>
    </ul>
    <ul class="social df">
      <li>
        <router-link :to="{path: '/fb'}"><i class="ic-fb"></i></router-link>
      </li>
      <li>
        <router-link :to="{path: '/fb'}"><i class="ic-tl"></i></router-link>
      </li>
      <li>
        <router-link :to="{path: '/fb'}"><i class="ic-inst"></i></router-link>
      </li>
      <li>
        <router-link :to="{path: '/fb'}"><i class="ic-youtube"></i></router-link>
      </li>
      <li>
        <router-link :to="{path: '/fb'}"><i class="ic-tik-tok"></i></router-link>
      </li>
      <li>
        <router-link :to="{path: '/fb'}"><i class="ic-rss"></i></router-link>
      </li>
      <li>
        <router-link :to="{path: '/fb'}">Підписатись <i class="ic-arrow-right"></i></router-link>
      </li>
    </ul>
	</div>
  <div class="hr"></div>
  <nav class="df jcsb ait">
    <ul class="df jcsb">
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
        <router-link :to="{path: '/'}">AgroCheck</router-link>
      </li>
      <li>
        <router-link :to="{path: '/'}">Мультимедіа</router-link>
      </li>
    </ul>
    <i class="ic-search"></i>
  </nav>
  <div class="hr"></div>
  <div class="header__bottom">
    <ul class="df jcsb">
      <li>
        <router-link :to="{path: '/'}">Індекс АПК</router-link>
      </li>
      <li>
        <router-link :to="{path: '/'}">Клуб Агроефективності АПК</router-link>
      </li>
      <li>
        <router-link :to="{path: '/'}">Organic Style</router-link>
      </li>
      <li>
        <router-link :to="{path: '/'}">Конкурс</router-link>
      </li>
      <li>
        <router-link :to="{path: '/'}">AgroGear</router-link>
      </li>
    </ul>
  </div>
  </header>
</template>

<script>
export default {

};
</script>

<style lang="sass" scoped>
header
  color: $c-gray-text-icons
nav
  ul
    width: 70%
.hr
  width: 100%
  height: 1px
  margin: 10px 0px
  background-color: $c-gray-light-1
.social li
  &:not(:last-of-type)
    margin-right: 4px
    a
      width: 50px 
      height: 50px
      border-radius: 50%
      display: flex
      justify-content: center
      align-items: center
      border: 1px solid $c-green-bright
      font-size: 20px
  &:last-of-type a
    @include btn-text
    display: flex
    align-items: center
    height: 100%
    margin-left: 20px
    i
      margin-left: 15px
.lang-switcher li
  @include btn-text
nav li
  @include menu-1
.header__bottom li
  @include menu-2
  display: block
  border: 2px solid $c-green-bright
  padding: 10px 15px
  border-radius: 25px
</style>
