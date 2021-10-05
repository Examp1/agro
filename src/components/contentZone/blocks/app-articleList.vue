<template>
  <ul>
    <!-- <li class="article df jcsb" v-for="i in 3" :key="i">
      <div class="l">
        <img src="../../../assets/img.png" alt="" />
      </div>
      <div class="r df fdc">
        <div class="infoWarpper">
          <span>29 серпня 2021, 13:00</span
          ><span
            >145 <i class="ic-eye"></i
          ></span>
          <p class="title">
            AGROGEAR. Збереження вологи. Кожне господарство обирає найкращі
            технології під свої умови
          </p>
        </div>
      </div>
    </li> -->
    <article-item v-for="(i, idx) in 3" :key="idx" class="article"></article-item>
	<i class="hr"></i>
  </ul>
</template>

<script>
import articleItem from '../app-articleItem.vue'
export default {
  name: 'article-List',
  components: {
    articleItem,
  },
};
</script>

<style lang="sass" scoped>

</style>
