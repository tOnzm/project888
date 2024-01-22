<template>
  <v-container>
    <v-row>
      <v-col v-for="item in 50" :key="item" cols="12" md="3">
        <ContentComponent />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import ContentComponent from '@/components/content/index.vue'
export default {
  name: 'TeacherPage',
  components: {ContentComponent },

}
</script>

<style lang="scss" scoped></style>
