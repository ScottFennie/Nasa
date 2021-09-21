<template>
  <div class="text-center">
    <div class="card-header bg-dark py-4">
      <img :src="pics.hdurl" class="image-fluid">
    </div>
    <div class="card-body bg-dark text-light">
      <h3>{{ pics.title }}</h3>
    </div>
  </div>
</template>

<script>
import { AppState } from '../AppState'
import { computed } from '@vue/runtime-core'
export default {
  props: {
    pic: { type: Object, required: true }
  },
  setup() {
    return { pics: computed(() => AppState.pics) }
  }
}
</script>

<style scoped lang="scss">
img{
  object-fit: contain;
  object-position: center;
  max-height: 50vh;
  max-width: 50vw;
}
</style>
