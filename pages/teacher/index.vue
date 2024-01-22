<template>
  <v-container>
    <v-row>
      <v-col v-for="item in testapi" :key="item.id" cols="12" md="3">
        <personCard
          :name="item.name"
          :username="item.username"
          :phone="item.phone"
        />
      </v-col>
    </v-row>
    <br>
    <v-divider></v-divider>
    <br>
  </v-container>
</template>

<script>
import userApi from '@/api/user/index.js'
import personCard from '@/components/personCard/index.vue'
export default {
  name: 'TeacherPage',
  components: { personCard },
  data() {
    return {
      testapi: [],
    }
  },
  mounted() {
    this.getdata()
  },
  methods: {
    async getdata() {
      try {
        const data = await userApi.getAll()
        this.testapi = data
      } catch (error) {}
    },
  },
}
</script>

<style lang="scss" scoped></style>
