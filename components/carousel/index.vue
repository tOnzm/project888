<template>
  <div>
    <v-carousel
      cycle
      height="600"
      hide-delimiter-background
      show-arrows-on-hover
    >
      <v-carousel-item v-for="(slide, i) in slides" :key="i">
        <v-sheet height="100%">
          <img :src="img[i]" alt="" srcset="" width="100%" height="100%" />
          <v-row class="fill-height" align="center" justify="center">
            <div class="text-h2">{{ slide }} Slide</div>
          </v-row>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>
  </div>
</template>

<script>
export default {
  name: 'CarouselComponent',
  data() {
    return {
      img: [
        'https://www.chula.ac.th/wp-content/uploads/2023/02/Banner-CUDSON-Web-App_TH-1-768x402.jpg',
        'https://th.bing.com/th/id/OIP.7FybJ76ZSSkVoBWAy1WnoQHaE8?w=1080&h=720&rs=1&pid=ImgDetMain',
        'https://th.bing.com/th/id/OIP.Jybue-ds467_33legXfcowHaD5?rs=1&pid=ImgDetMain',
        'https://th.bing.com/th/id/OIP.Jybue-ds467_33legXfcowHaD5?rs=1&pid=ImgDetMain',
        'https://th.bing.com/th/id/OIP.Jybue-ds467_33legXfcowHaD5?rs=1&pid=ImgDetMain',
      ],
      slides: ['First', 'Second', 'Third', 'Fourth', 'Fifth'],
    }
  },
}
</script>

<style lang="scss" scoped></style>
