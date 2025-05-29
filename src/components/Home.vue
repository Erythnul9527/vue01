<template>
  <div class="home-root">
    <!-- 顶部导航栏 -->
    <header class="navbar">
      <div class="navbar-left">
        <img class="logo" src="https://cdn-icons-png.flaticon.com/512/727/727245.png" alt="logo" />
        <span class="brand">音乐空间</span>
      </div>
      <nav class="navbar-center">
        <a class="nav-link" href="#">
          <el-icon><House /></el-icon>
          首页
        </a>
        <a class="nav-link" href="#">
          <el-icon><Headset /></el-icon>
          音乐馆
        </a>
        <a class="nav-link" href="#">
          <el-icon><Star /></el-icon>
          推荐
        </a>
        <a class="nav-link" href="#">
          <el-icon><Document /></el-icon>
          歌单
        </a>
        <a class="nav-link" href="#">
          <el-icon><User /></el-icon>
          我的
        </a>
      </nav>
      <div class="navbar-right">
        <el-button type="text" circle class="icon-btn">
          <el-icon><Star /></el-icon>
        </el-button>
        <el-button type="text" circle class="icon-btn">
          <el-icon><Bell /></el-icon>
        </el-button>
        <img class="avatar" src="https://randomuser.me/api/portraits/men/32.jpg" alt="用户头像" />
      </div>
    </header>

    <!-- 搜索栏 -->
    <div class="search-bar">
      <el-input
        v-model="search"
        placeholder="搜索音乐/歌手/专辑"
        clearable
        prefix-icon="el-icon-search"
        class="search-input"
      >
        <template #prefix>
          <el-icon><Search /></el-icon>
        </template>
      </el-input>
      <el-button type="primary" class="search-btn" @click="onSearch">
        搜索
      </el-button>
    </div>

    <!-- 内容区域 -->
    <main class="main-content">
      <!-- 轮播图 -->
      <div class="carousel-container">
        <el-carousel height="220px" indicator-position="outside">
          <el-carousel-item v-for="item in images" :key="item.url">
            <img :src="item.url" :alt="item.alt" class="carousel-image" />
          </el-carousel-item>
        </el-carousel>
      </div>

      <!-- 功能卡片 -->
      <div class="feature-cards">
        <div class="feature-card" v-for="card in featureCards" :key="card.title">
          <div class="feature-icon">
            <el-icon :size="32"><component :is="card.icon" /></el-icon>
          </div>
          <div class="feature-title">{{ card.title }}</div>
          <div class="feature-desc">{{ card.desc }}</div>
        </div>
      </div>

      <!-- 跳转按钮 -->
      <div class="center-btn">
        <el-button type="primary" @click="openHello">
          跳转到HelloWorld页面
        </el-button>
      </div>
    </main>

    <!-- 页脚 -->
    <footer class="footer">
      <div>© 2025 音乐空间 | 发现好音乐，享受美好时光</div>
    </footer>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { Search, House, Headset, Star, Document, User, Bell } from '@element-plus/icons-vue'

const router = useRouter()
const search = ref('')

const images = [
  { url: 'https://picsum.photos/1200/320?random=1', alt: '风景图1' },
  { url: 'https://picsum.photos/1200/320?random=2', alt: '风景图2' },
  { url: 'https://picsum.photos/1200/320?random=3', alt: '风景图3' }
]

const featureCards = [
  {
    icon: Headset,
    title: '高品质音乐',
    desc: '畅享无损音质，体验极致听觉盛宴'
  },
  {
    icon: Star,
    title: '智能推荐',
    desc: '根据你的喜好，发现更多好音乐'
  },
  {
    icon: Document,
    title: '丰富歌单',
    desc: '多样化歌单，满足不同场景需求'
  }
]

const openHello = () => {
  router.push('/hello')
}

const onSearch = () => {
  // 这里可以添加实际搜索逻辑
  if (search.value) {
    ElMessage.success(`搜索：${search.value}`)
  }
}
</script>

<style scoped>
.home-root {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: linear-gradient(135deg, #f8fafc 60%, #fbc2eb 100%);
}

/* 顶部导航栏 */
.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 32px;
  height: 64px;
  background: linear-gradient(90deg, #a18cd1 0%, #fbc2eb 100%);
  box-shadow: 0 2px 12px 0 rgba(161,140,209,0.08);
  position: sticky;
  top: 0;
  z-index: 10;
}
.navbar-left {
  display: flex;
  align-items: center;
}
.logo {
  width: 40px;
  height: 40px;
  margin-right: 12px;
  border-radius: 50%;
  background: #fff;
  box-shadow: 0 2px 8px 0 rgba(0,0,0,0.08);
}
.brand {
  font-size: 1.4rem;
  font-weight: bold;
  color: #fff;
  letter-spacing: 2px;
  text-shadow: 0 2px 8px rgba(161,140,209,0.12);
}
.navbar-center {
  display: flex;
  gap: 32px;
}
.nav-link {
  color: #fff;
  font-size: 1.08rem;
  display: flex;
  align-items: center;
  gap: 6px;
  text-decoration: none;
  padding: 6px 12px;
  border-radius: 6px;
  transition: background 0.2s;
}
.nav-link:hover {
  background: rgba(255,255,255,0.18);
}
.navbar-right {
  display: flex;
  align-items: center;
  gap: 12px;
}
.icon-btn {
  color: #fff;
  font-size: 1.2rem;
}
.avatar {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: 2px solid #fff;
  object-fit: cover;
  box-shadow: 0 2px 8px 0 rgba(0,0,0,0.08);
}

/* 搜索栏 */
.search-bar {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 32px 0 16px 0;
  gap: 12px;
}
.search-input {
  width: 320px;
  max-width: 60vw;
}
.search-btn {
  min-width: 80px;
}

/* 内容区域 */
.main-content {
  flex: 1;
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 16px 32px 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

/* 轮播图 */
.carousel-container {
  width: 100%;
  max-width: 900px;
  margin-bottom: 32px;
  border-radius: 14px;
  overflow: hidden;
  box-shadow: 0 4px 24px 0 rgba(161,140,209,0.10);
}
.carousel-image {
  width: 100%;
  height: 220px;
  object-fit: cover;
  display: block;
  background: #f5f5f5;
  border-radius: 14px;
}

/* 功能卡片 */
.feature-cards {
  display: flex;
  gap: 32px;
  margin: 32px 0 24px 0;
  flex-wrap: wrap;
  justify-content: center;
}
.feature-card {
  background: linear-gradient(135deg, #fff 70%, #fbc2eb 100%);
  border-radius: 14px;
  box-shadow: 0 2px 12px 0 rgba(161,140,209,0.10);
  width: 240px;
  min-height: 180px;
  padding: 28px 18px 18px 18px;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: transform 0.18s, box-shadow 0.18s;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.feature-card:hover {
  transform: translateY(-8px) scale(1.04);
  box-shadow: 0 8px 32px 0 rgba(161,140,209,0.18);
}
.feature-icon {
  margin-bottom: 14px;
  color: #a18cd1;
}
.feature-title {
  font-size: 1.18rem;
  font-weight: bold;
  color: #4a3a6a;
  margin-bottom: 8px;
}
.feature-desc {
  color: #888;
  font-size: 0.98rem;
  text-align: center;
}

/* 跳转按钮 */
.center-btn {
  text-align: center;
  margin: 32px 0 0 0;
}

/* 页脚 */
.footer {
  width: 100%;
  background: linear-gradient(90deg, #a18cd1 0%, #fbc2eb 100%);
  color: #fff;
  text-align: center;
  padding: 18px 0 10px 0;
  font-size: 1rem;
  letter-spacing: 1px;
  box-shadow: 0 -2px 12px 0 rgba(161,140,209,0.08);
  margin-top: auto;
}

/* 响应式设计 */
@media (max-width: 900px) {
  .main-content {
    max-width: 100vw;
    padding: 0 4px 24px 4px;
  }
  .carousel-container {
    max-width: 100vw;
  }
  .feature-cards {
    gap: 18px;
  }
}
@media (max-width: 600px) {
  .navbar {
    flex-direction: column;
    height: auto;
    padding: 8px 8px;
    gap: 8px;
  }
  .navbar-center {
    gap: 12px;
  }
  .search-bar {
    flex-direction: column;
    gap: 8px;
  }
  .feature-cards {
    flex-direction: column;
    align-items: center;
  }
  .feature-card {
    width: 98vw;
    min-width: 0;
  }
}
</style>