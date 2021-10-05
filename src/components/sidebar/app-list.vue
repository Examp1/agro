<template>
  <ul>
    <list-item v-for="(article, idx) in list" :key="idx" :article="article"></list-item>
  </ul>
</template>

<script>
import listItem from "./app-list-item.vue";
export default {
  name: "app-listing",
  components: {
    listItem,
  },
  data() {
    return {
      list: [
		{title: 'Експерти розповіли, що підікріває закупівельні ціни на свинину', time: '13:00', viewed: '145', sticker: 'promo'},
		{title: 'Експерти розповіли, що підікріває закупівельні ціни на свинину', time: '16:00', viewed: '125'},
		{title: 'test3', time: '10:00', viewed: '135'},
		{title: 'Експерти розповіли, що підікріває закупівельні ціни на свинину', time: '11:00', viewed: '1455', sticker: 'exclusive'},
		{title: 'test5', time: '12:00', viewed: '185'},
		],
    };
  },
};
</script>

<style></style>
