<template>
  <div>
    <div class="profile">
      <div class="top">
        <div class="stats">
          <img src="@/static/logos/cs_logo.png" alt="" width="25%" />
          <div class="role">
            <h5>ตำแหน่ง</h5>
            <h2>อาจารย์</h2>
          </div>
        </div>
        <div class="imageWarp">
          <img src="@/static/persons/shadow.png" alt="" />
        </div>
      </div>
      <div class="bottom">
        <div class="name">
          <h3>{{ username }}</h3>
          <h1>{{ name }}</h1>
          <p>ติดต่อ {{ phone }}</p>
        </div>
        <v-row class="social">
          <v-col cols="1"> <v-icon> mdi-facebook</v-icon> </v-col>
          <v-col cols="1"> <v-icon> mdi-linkedin</v-icon> </v-col>
        </v-row>
        <v-row class="footer">
          <v-col cols="6" class="nationality" align="start">
            <img src="@/static/flags/TH.png" alt="" width="20%" />
            <h5>Thai</h5>
          </v-col>
          <v-col cols="6" align="end">
            <nuxt-link to="/">
              <h5>ดูเพิ่มเติม</h5>
            </nuxt-link>
          </v-col>
        </v-row>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PersonCardComponent',
  props: {
    name: {
      type: String,
      default: 'ไม่พบข้อมูล',
    },
    username: {
      type: String,
      default: 'ไม่พบข้อมูล',
    },
    phone: {
      type: String,
      default: 'ไม่พบข้อมูล',
    },
  },
}
</script>

<style lang="scss" scoped>
.profile {
  width: 320px;
  height: auto;
  border: solid 0.1rem #ebe5eb;
  overflow: clip;
  border-radius: 10px;

  .top {
    background-image: url('@/static/bg.png');
    background-size: cover;
    backdrop-filter: blur(10px);
    display: flex;
    justify-content: flex-start;
    height: 320px;
    overflow: hidden;

    .imageWarp {
      height: 50%00px;
      width: 500px;
      background: #f0f0f0b9;
      position: relative;

      img {
        top: 20%;
        right: -10%;
        position: absolute;
        width: 280px;
        object-fit: contain;
        z-index: 5;
        transition: transform 500ms ease-out;
      }
    }
    .stats {
      background-color: #ffffffd7;
      height: 320px;
      padding: 1rem;
      color: #37003c;
      img {
        width: 80px;
      }
      h2 {
        line-height: 1.5rem;
        font-weight: 800;
      }
      h5 {
        line-height: 1rem;
        font-weight: 400;
      }
      .role {
        margin-bottom: 1rem;
      }
    }
  }
  .bottom {
    background-color: #ffffff;
    padding: 0.5rem;
    display: flex;
    flex-direction: column;
    .name {
      color: #37003c;
      line-height: 1.7rem;
      h1 {
        font-weight: 600;
      }
      h3 {
        font-weight: 400;
      }
      p {
        color: #37003c80;
      }
    }
    .social {
      .v-icon {
        color: #b3b3b3;
      }
      .v-icon:hover {
        color: #37003c;
      }
    }
    .footer {
      .nationality {
        display: flex;
        align-items: center;
        gap: 0.5rem;
      }
      h5 {
        font-weight: 400;
        font-size: 1rem;
      }
    }
  }
}

.imageWarp:hover {
  img:hover {
    transform: scale(1.1);
  }
}
</style>
