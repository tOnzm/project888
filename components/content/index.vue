<template>
  <v-card class="mx-auto" max-width="344">
    <v-img
      :src='image'
      height="200px"
    ></v-img>

    <v-card-title> {{ name }} </v-card-title>

    

    <v-card-actions>
      <v-btn color="orange lighten-2" text> ดูข้อมูล </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: 'ContentComponent',
  props: {
    name: {
      type: String,
      default: 'คอลัมน์ Sustainable Talk: ‘วิเลิศ’เปิด3คำดันธุรกิจยั่งยืน เปิดแอปคาร์บอนเครดิตครั้งแรก',
    }, image: {
      type: String,
      default: 'https://cdn.vuetifyjs.com/images/cards/sunshine.jpg',
    },
  },
  data: () => ({
    show: false,
  }),
}
</script>

<style lang="scss" scoped></style>
