<template>
  <v-container>
    <CarouselComponent />
    <h1>ข่าวสาร</h1>
    <v-row>
      <v-col v-for="item in news" :key="item.id" cols="12" md="4">
        <ContentComponent :name="item.title" :image="item.img" />
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
  data() {
    return {
      news: [
        {
          title: 'ข่าว',
          id: 1,
          img: 'https://www.onep.go.th/wp-content/uploads/2023/07/envinews-20230713-2.jpg',
        },
        {
          title: 'ข่าว1',
          id: 2,
          img: 'https://cdn.vuetifyjs.com/images/cards/sunshine.jpg',
        },
        {
          title: 'ข่าว2',
          id: 3,
          img: 'https://cdn.vuetifyjs.com/images/cards/sunshine.jpg',
        },
      ],
    }
  },
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
