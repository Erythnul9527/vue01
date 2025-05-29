<template>
  <div class="recommend-root">
    <h2>推荐音乐</h2>
    <div class="recommend-list">
      <div class="recommend-card" v-for="item in recommends" :key="item.title">
        <img :src="item.cover" class="recommend-cover" :alt="item.title" />
        <div class="recommend-info">
          <h3>{{ item.title }}</h3>
          <p>{{ item.artist }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const recommends = [
  { title: '流行精选', artist: '多位歌手', cover: 'https://picsum.photos/200/200?random=11' },
  { title: '轻音乐', artist: '纯音乐', cover: 'https://picsum.photos/200/200?random=12' },
  { title: '经典老歌', artist: '群星', cover: 'https://picsum.photos/200/200?random=13' }
]
</script>

<style scoped>
.recommend-root {
  max-width: 900px;
  margin: 40px auto;
  padding: 24px;
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 4px 24px 0 rgba(161,140,209,0.10);
}
.recommend-list {
  display: flex;
  gap: 32px;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 24px;
}
.recommend-card {
  width: 200px;
  background: linear-gradient(135deg, #f8fafc 60%, #fbc2eb 100%);
  border-radius: 12px;
  box-shadow: 0 2px 12px 0 rgba(161,140,209,0.10);
  padding: 16px;
  text-align: center;
  transition: transform 0.18s, box-shadow 0.18s;
}
.recommend-card:hover {
  transform: translateY(-8px) scale(1.04);
  box-shadow: 0 8px 32px 0 rgba(161,140,209,0.18);
}
.recommend-cover {
  width: 100%;
  height: 120px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 12px;
}
.recommend-info h3 {
  margin: 0 0 6px 0;
  font-size: 1.1rem;
  color: #4a3a6a;
}
.recommend-info p {
  margin: 0;
  color: #888;
  font-size: 0.95rem;
}
</style>