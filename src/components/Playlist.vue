<template>
  <div class="playlist-root">
    <h2>热门歌单</h2>
    <div class="playlist-list">
      <div class="playlist-card" v-for="item in playlists" :key="item.title">
        <img :src="item.cover" class="playlist-cover" :alt="item.title" />
        <div class="playlist-info">
          <h3>{{ item.title }}</h3>
          <p>{{ item.desc }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const playlists = [
  { title: '运动活力', desc: '适合运动时听的歌单', cover: 'https://picsum.photos/200/200?random=21' },
  { title: '深夜电台', desc: '夜晚安静陪伴', cover: 'https://picsum.photos/200/200?random=22' },
  { title: '治愈系', desc: '温暖你的心', cover: 'https://picsum.photos/200/200?random=23' }
]
</script>

<style scoped>
.playlist-root {
  max-width: 900px;
  margin: 40px auto;
  padding: 24px;
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 4px 24px 0 rgba(161,140,209,0.10);
}
.playlist-list {
  display: flex;
  gap: 32px;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 24px;
}
.playlist-card {
  width: 200px;
  background: linear-gradient(135deg, #fff 60%, #a18cd1 100%);
  border-radius: 12px;
  box-shadow: 0 2px 12px 0 rgba(161,140,209,0.10);
  padding: 16px;
  text-align: center;
  transition: transform 0.18s, box-shadow 0.18s;
}
.playlist-card:hover {
  transform: translateY(-8px) scale(1.04);
  box-shadow: 0 8px 32px 0 rgba(161,140,209,0.18);
}
.playlist-cover {
  width: 100%;
  height: 120px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 12px;
}
.playlist-info h3 {
  margin: 0 0 6px 0;
  font-size: 1.1rem;
  color: #4a3a6a;
}
.playlist-info p {
  margin: 0;
  color: #888;
  font-size: 0.95rem;
}
</style>