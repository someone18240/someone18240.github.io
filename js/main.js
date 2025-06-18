/**
 * 🚀 启动体验：播放背景音乐 + 平滑滚动到 About
 */
function startExperience() {
  const bgm = document.getElementById('bgm');
  bgm.play().catch(() => {
    console.log("需要用户交互触发音频");
  });

  const about = document.getElementById('about');
  about.scrollIntoView({ behavior: 'smooth' });
}

/**
 * 🎥 播放作品视频
 */
function playVideo(src) {
  const popup = document.getElementById('video-popup');
  const video = document.getElementById('popup-video');

  video.src = src;
  popup.style.display = 'flex';
  video.play();
}

/**
 * ❌ 关闭视频浮层
 */
function closeVideo() {
  const popup = document.getElementById('video-popup');
  const video = document.getElementById('popup-video');

  video.pause();
  video.currentTime = 0;
  popup.style.display = 'none';
}

/**
 * ✨ 初始化 AOS 动效
 */
AOS.init({
  duration: 1000,
  once: true
});

/**
 * ✨ 初始化粒子背景 (particles.js)
 * 推荐把下面参数根据需要自定义
 */
particlesJS('particles-js', {
  "particles": {
    "number": {
      "value": 80
    },
    "color": {
      "value": "#FFFFFF"
    },
    "shape": {
      "type": "circle"
    },
    "opacity": {
      "value": 0.3
    },
    "size": {
      "value": 2
    },
    "line_linked": {
      "enable": true,
      "distance": 120,
      "color": "#FFFFFF",
      "opacity": 0.2,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 1.5
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": false
      },
      "onclick": {
        "enable": false
      }
    }
  },
  "retina_detect": true
});
