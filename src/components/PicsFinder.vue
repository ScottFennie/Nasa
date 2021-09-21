<template>
  <div>
    <form @submit.prevent="findPics">
      <label for="start">Select A Date: </label>
      <div class="form-group d-flex justify-content-center">
        <input v-model="query"
               type="date"
               id="date"
               name="trip-start"
               min="2018-01-01"
               max="2021-09-21"
        >
        <button class=" ms-2 btn btn-dark" type="submit">
          Find Pics
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity'
import { picsService } from '../services/PicsService'
import Pop from '../utils/Pop'
export default {
  setup() {
    const query = ref('')

    return {
      query,

      async findPics() {
        try {
          await picsService.findPicsByQuery(query.value)
        } catch (error) {
          Pop.toast(error.message, 'error')
        }
      }
    }
  }

}
</script>

<style>

</style>
