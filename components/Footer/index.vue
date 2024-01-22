<template>
  <div class="Footer">
    <v-row align="center">
      <v-col cols="4" md="4" align="end">
        <ul>
          <h3>หน้าแรก</h3>
          <nuxt-link to="/teacher">
            <li>คณะอาจารย์</li>
          </nuxt-link>
          <nuxt-link to="/about">
            <li>แนะนำสาขา</li>
          </nuxt-link>
          <nuxt-link to="reward">
            <li>ผลงานสาขา</li>
          </nuxt-link>
        </ul>
      </v-col>
      <v-col cols="4" md="4" align="center">
        <ul>
          <h3>หน้าแรก</h3>
          <nuxt-link to="/teacher">
            <li>คณะอาจารย์</li>
          </nuxt-link>
          <nuxt-link to="/about">
            <li>แนะนำสาขา</li>
          </nuxt-link>
          <nuxt-link to="reward">
            <li>ผลงานสาขา</li>
          </nuxt-link>
        </ul> </v-col
      ><v-col cols="4" md="4" align="start">
        <ul>
          <h3>หน้าแรก</h3>
          <nuxt-link to="/teacher">
            <li>คณะอาจารย์</li>
          </nuxt-link>
          <nuxt-link to="/about">
            <li>แนะนำสาขา</li>
          </nuxt-link>
          <nuxt-link to="reward">
            <li>ผลงานสาขา</li>
          </nuxt-link>
        </ul>
      </v-col>
    </v-row>
    <v-row>
      <v-col align="center"> สาขาวิทยาการคอมพิวเตอร์ </v-col>
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
