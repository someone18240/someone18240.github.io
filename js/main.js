/**
 * 启动体验：播放背景音乐 + 平滑滚动
 */
function startExperience() {
  const bgm = document.getElementById('bgm');
  bgm.play().catch(() => {
    console.log("用户需交互触发音频");
  });
  // 滚动到 About 区块
  const about = document.getElementById('about');
  about.scrollIntoView({ behavior: 'smooth' });
}

/**
 * 点击作品卡片：弹出视频播放
 */
function playVideo(src) {
  const popup = document.getElementById('video-popup');
  const video = document.getElementById('popup-video');

  video.src = src;
  popup.style.display = 'flex';
  video.play();
}

/**
 * 点击浮层：关闭视频
 */
function closeVideo() {
  const popup = document.getElementById('video-popup');
  const video = document.getElementById('popup-video');

  video.pause();
  video.currentTime = 0;
  popup.style.display = 'none';
}
