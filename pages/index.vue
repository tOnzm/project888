<template>
  <v-container>
    <CarouselComponent />

    <v-row>
      <v-col v-for="item in 3" :key="item" cols="12" md="4">
        <ContentComponent />
      </v-col>
    </v-row>

    <div class="tap"></div>
  </v-container>
</template>

<script>
import CarouselComponent from '../components/carousel/index.vue'
import ContentComponent from '../components/content/index.vue'

export default {
  name: 'IndexPage',
  components: { CarouselComponent, ContentComponent },
}
</script>

<style lang="scss" scoped>
.tap {
  width: 100%;
  height: 3rem;
  background-color: red;
  margin: 1rem 0;
}
</style>
