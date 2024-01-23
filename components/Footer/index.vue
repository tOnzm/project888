<template>
  <div class="Footer">
    <v-row align="center">
      <v-col cols="4" md="12" align="center">
        <ul>
          <h3>ช่องทางติดต่อ</h3>
          <v-icon> mdi-facebook</v-icon>
          <v-icon>mdi-map-marker</v-icon>
          <v-icon>mdi-phone-in-talk</v-icon>
          <v-col cols="4" md="12" align="center">
            สาขาวิทยาการคอมพิวเตอร์
          </v-col>
        </ul>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: 'FooterItem',
  data() {
    return {}
  },
}
</script>

<style lang="scss" scoped>
.Footer {
  display: flex;
  justify-content: center;
  flex-direction: column;
}
ul {
  justify-content: space-around;
  li {
    list-style: none;
  }
}
</style>
