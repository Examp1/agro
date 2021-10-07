<template>
  <aside>
	<h2 class="title">новини</h2>
	<ul class="filter df">
		<li class="active">
			останні
		</li>
		<li>
			головні
		</li>
	</ul>
	<i class="hr"></i>
    <side-bar-list></side-bar-list>
  </aside>
</template>

<script>
import sideBarList from "./app-list";
export default {
  name: "app-side-bar",
  data() {
    return {};
  },
  created() {},
  components: {
    sideBarList,
  },
};
</script>

<style lang="sass" scoped>
.title
  font-style: normal
  font-weight: 500
  font-size: 24px
  line-height: 120%
  text-transform: uppercase
  color: #111325
  margin-top: 0px
.filter
	li
		padding: 5px 7px
		cursor: pointer
		border: 1px solid #BABABB
		color: $c-black
		border-radius: 25px
		transition: .3s
		@include menu-3
		&:hover, &.active
			background-color: $c-green-bright
			color: $c-white
		&:not(:last-of-type)
			margin-right: 5px
aside
	grid-column: 1
	grid-row: 1/3
	@media (max-width: 640px)
		grid-row: 2
		grid-column: unset
</style>
