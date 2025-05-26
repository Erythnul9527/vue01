<template>
  <div>
    <div class="carousel-container">
      <el-carousel height="240px">
        <el-carousel-item v-for="item in images" :key="item.url">
          <img :src="item.url" :alt="item.alt" class="carousel-image" />
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="main-content">
      <div class="center-btn">
        <el-button type="primary" @click="openHello">
          跳转到HelloWorld页面
        </el-button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const images = [
  { url: 'https://picsum.photos/1200/320?random=1', alt: '风景图1' },
  { url: 'https://picsum.photos/1200/320?random=2', alt: '风景图2' },
  { url: 'https://picsum.photos/1200/320?random=3', alt: '风景图3' }
]

const router = useRouter()
const openHello = () => {
  router.push('/hello')
}
</script>

<style scoped>
.carousel-container {
  margin-bottom: 20px;
}

.carousel-image {
  width: 100%;
  height: auto;
}

.center-btn {
  text-align: center;
}
</style>