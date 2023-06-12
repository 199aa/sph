<template>
  <div>
    <TypeNav></TypeNav>
    <ListContainer></ListContainer>
    <Recommend></Recommend>
    <Rank></Rank>
    <Like></Like>
    <Brand></Brand>
    <Floor></Floor>
  </div>
</template>

<script>
import ListContainer from '../Home/ListContainer.vue'
import Recommend from '@/views/Home/Recommend.vue'
import Rank from '@/views/Home/Rank.vue'
import Like from '@/views/Home/Like.vue'
import Brand from '@/views/Home/Brand.vue'
import Floor from '@/views/Home/Floor.vue'

export default {
  components: {
    ListContainer,
    Recommend,
    Rank,
    Like,
    Brand,
    Floor
  },
  mounted() {
    // this.$store.dispatch('UserInfo')
  }
}
</script>

<style>
</style>