<template>
  <div>
    <div class="df jcsb ait border-b">
      <h2>h2-Спецпроект</h2>
      <router-link :to="'/'"><i class="ic-arrow-right"></i></router-link>
    </div>
    <div class="spesialProject df jcsb">
      <div class="l">
        <img src="../../../assets/img.png" alt="" />
      </div>
      <div class="r df fdc">
        <div data-v-b4eef13c="" class="infoWarpper">
          <span data-v-b4eef13c="">29 серпня 2021, 13:00</span
          ><span data-v-b4eef13c=""
            >145 <i data-v-b4eef13c="" class="ic-eye"></i
          ></span>
          <p data-v-b4eef13c="" class="title">
            AGROGEAR. Збереження вологи. Кожне господарство обирає найкращі
            технології під свої умови
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'special-item'
};
</script>

<style lang="sass" scoped>
@import '@/assets/sass/blocks'
.spesialProject
  margin-top: 20px
  .l
    margin-right: 10px
    img
      max-width: unset 
      max-height: 144px
h2
  font-weight: 500
  font-size: 24px
  line-height: 100%
  text-transform: uppercase
  color: #111325
</style>
