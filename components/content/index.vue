<template>
  <v-card class="mx-auto" max-width="344">
    <v-img
      src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
      height="200px"
    ></v-img>

    <v-card-title> {{ name }} ({{ username }})</v-card-title>

    <v-card-subtitle> ตำแหน่ง <span>อาจารย์</span></v-card-subtitle>

    <v-card-actions>
      <v-btn color="orange lighten-2" text> ดูข้อมูล </v-btn>

      <v-spacer></v-spacer>

      <v-btn icon @click="show = !show">
        <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>

        <v-card-text>
          เบอร์โทรศัพท์ {{ phone }} <br />
          อีเมล {{ email }} <br />
          เว็บไซต์ {{ website }}
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
</template>

<script>
export default {
  name: 'ContentComponent',
  props: {
    name: {
      type: String,
      default: 'ชื่อ',
    },
    phone: {
      type: Number,
      default: 0,
    },
    email: {
      type: String,
      default: 'อีเมล',
    },
    username: {
      type: String,
      default: 'username',
    },
    website: {
      type: String,
      default: 'website',
    },
  },
  data: () => ({
    show: false,
  }),
}
</script>

<style lang="scss" scoped></style>
