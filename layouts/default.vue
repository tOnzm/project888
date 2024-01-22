<template>
  <v-app>
    <div class="navbar">
      <v-row align="center">
        <v-col cols="12" md="2">
          <nuxt-link to="/">
            <img src="@/static/logos/cs_logo.png" alt="" width="25%">
          </nuxt-link>
        </v-col>
        <v-col cols="12" md="10">
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
    </div>
    <v-main>
      <Nuxt />
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
export default {
  name: 'Default',
}
</script>

<style lang="scss" scoped>
.navbar {
  background-color: red;
  padding: 1rem 2rem;
}
ul {
  display: flex;
  justify-content: space-around;
  li {
    list-style: none;
  }
}
</style>
