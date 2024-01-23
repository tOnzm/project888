<template>
    <div>
        <v-carousel
    cycle
    height="400"
    hide-delimiter-background
    show-arrows-on-hover
  >
    <v-carousel-item
      v-for="(slide, i) in slides"
      :key="i"
    >
      <v-sheet
        :color="img[i]"
        height="100%"
      >
      <img :src=img[i] alt="" srcset="">
        <v-row
          class="fill-height"
          align="center"
          justify="center"
        >
          <div class="text-h2">
            {{ slide }} Slide
          </div>
        </v-row>
      </v-sheet>
    </v-carousel-item>
  </v-carousel>
    </div>
</template>

<script>
    export default {
        name:'CarouselComponent',
        data () {
      return {
        img: [
          'https://www.chula.ac.th/wp-content/uploads/2023/02/Banner-CUDSON-Web-App_TH-1-768x402.jpg',
          'https://www.chula.ac.th/wp-content/uploads/2023/02/Banner-CUDSON-Web-App_TH-1-768x402.jpg',
          'pink darken-2',
          'red lighten-1',
          'deep-purple accent-4',
        ],
        slides: [
          'First',
          'Second',
          'Third',
          'Fourth',
          'Fifth',
        ],
      }
    },
    }
</script>

<style lang="scss" scoped>

</style>