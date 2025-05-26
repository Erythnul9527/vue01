<template>
  <div class="music-home">
    <header class="music-header">
      <div class="header-bg"></div>
      <img class="logo" src="https://cdn-icons-png.flaticon.com/512/727/727245.png" alt="logo" />
      <h1>音乐空间</h1>
      <p>发现好音乐，享受美好时光</p>
    </header>
    <section class="music-section">
      <div class="music-card" v-for="(song, idx) in songs" :key="idx">
        <div class="cover-wrap">
          <img :src="song.cover" class="cover" :alt="song.title" />
        </div>
        <div class="info">
          <h3>{{ song.title }}</h3>
          <p>{{ song.artist }}</p>
          <audio :src="song.url" controls preload="none"></audio>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const songs = [
  {
    title: '夜空中最亮的星',
    artist: '逃跑计划',
    cover: 'https://p2.music.126.net/6QwQwQwQwQwQwQwQwQwQw==/109951163574123456.jpg',
    url: 'https://www.w3school.com.cn/i/song.mp3'
  },
  {
    title: '晴天',
    artist: '周杰伦',
    cover: 'https://p1.music.126.net/6QwQwQwQwQwQwQwQwQwQw==/109951163574123457.jpg',
    url: 'https://www.w3school.com.cn/i/song.mp3'
  },
  {
    title: '小幸运',
    artist: '田馥甄',
    cover: 'https://p3.music.126.net/6QwQwQwQwQwQwQwQwQwQw==/109951163574123458.jpg',
    url: 'https://www.w3school.com.cn/i/song.mp3'
  }
]
</script>

<style scoped>
.music-home {
  max-width: 1000px;
  margin: 32px auto;
  padding: 0 16px 32px 16px;
  background: #fff;
  border-radius: 18px;
  box-shadow: 0 8px 32px 0 rgba(0,0,0,0.10);
  overflow: hidden;
}
.music-header {
  position: relative;
  text-align: center;
  padding: 48px 0 32px 0;
  margin-bottom: 32px;
}
.header-bg {
  position: absolute;
  left: 0; top: 0; right: 0; bottom: 0;
  background: linear-gradient(120deg, #a18cd1 0%, #fbc2eb 100%);
  z-index: 0;
  height: 100%;
  width: 100%;
  opacity: 0.85;
}
.logo {
  position: relative;
  z-index: 1;
  width: 72px;
  height: 72px;
  margin-bottom: 14px;
  border-radius: 50%;
  box-shadow: 0 2px 12px 0 rgba(0,0,0,0.10);
  background: #fff;
  border: 4px solid #fff;
}
.music-header h1 {
  position: relative;
  z-index: 1;
  margin: 0;
  font-size: 2.5rem;
  color: #333;
  letter-spacing: 2px;
  font-weight: bold;
  text-shadow: 0 2px 8px rgba(161,140,209,0.08);
}
.music-header p {
  position: relative;
  z-index: 1;
  color: #fff;
  margin-top: 10px;
  font-size: 1.2rem;
  text-shadow: 0 2px 8px rgba(161,140,209,0.15);
}
.music-section {
  display: flex;
  flex-wrap: wrap;
  gap: 32px;
  justify-content: center;
}
.music-card {
  background: linear-gradient(135deg, #f8fafc 60%, #fbc2eb 100%);
  border-radius: 16px;
  box-shadow: 0 4px 16px 0 rgba(161,140,209,0.08);
  width: 260px;
  padding: 24px 18px 18px 18px;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: transform 0.2s, box-shadow 0.2s;
  position: relative;
  overflow: hidden;
}
.music-card:hover {
  transform: translateY(-8px) scale(1.03);
  box-shadow: 0 12px 32px 0 rgba(161,140,209,0.18);
}
.cover-wrap {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  overflow: hidden;
  margin-bottom: 16px;
  box-shadow: 0 2px 12px 0 rgba(161,140,209,0.12);
  border: 4px solid #fff;
  background: #eee;
}
.cover {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}
.info {
  text-align: center;
  width: 100%;
}
.info h3 {
  margin: 0 0 6px 0;
  font-size: 1.18rem;
  color: #4a3a6a;
  font-weight: bold;
  letter-spacing: 1px;
}
.info p {
  margin: 0 0 12px 0;
  color: #888;
  font-size: 1rem;
  letter-spacing: 1px;
}
audio {
  width: 100%;
  outline: none;
  margin-top: 6px;
  filter: drop-shadow(0 2px 6px #fbc2eb55);
  border-radius: 8px;
  background: #fff;
}
@media (max-width: 700px) {
  .music-section {
    flex-direction: column;
    align-items: center;
    gap: 18px;
  }
  .music-home {
    padding: 0 4px 24px 4px;
  }
}
</style>
