<template>
  <div class="Footer">
    <v-row align="center">
      <v-col cols="4" md="4" align="end">
        <ul>
          <nuxt-link to="/">
            <li>หน้าแรก</li>
          </nuxt-link>
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
          <nuxt-link to="/">
            <li>หน้าแรก</li>
          </nuxt-link>
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
          <nuxt-link to="/">
            <li>หน้าแรก</li>
          </nuxt-link>
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
    <div align="center">
      <h5>คำชี้แจงความเป็นส่วนตัว เงื่อนไขการใช้บริการ</h5>
      <h5>© KFC Thailand. All rights reserved.</h5>
    </div>
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
