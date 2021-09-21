<template>
  <div class="pics container-fluid">
    <div class="row">
      <div class="col py-2 text-center">
        <PicsFinder />
      </div>
    </div>
    <div class="row">
      <div class="col-lg-12" v-for="p in pics" :key="p.id"></div>
      <Pic :pic="p" />
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped lang="scss">
.home{
  display: grid;
  height: 80vh;
  place-content: center;
  text-align: center;
  user-select: none;
  .home-card{
    width: 50vw;
    > img{
      height: 200px;
      width: 200px;
    }
  }
}
</style>
