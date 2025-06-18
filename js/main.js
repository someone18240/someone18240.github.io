/* =========================================================
   0. 实用函数：DOM 助手
========================================================= */
function $(sel){return document.querySelector(sel);}

/* =========================================================
   1. 进入按钮：播放 BGM + 平滑滚动 + 按钮闪白
========================================================= */
function startExperience(){
  const bgm = $('#bgm');
  // 浏览器策略：用户交互后才能自动播放
  bgm.play().catch(()=>console.log('等待用户交互播放音频'));

  // 平滑滚到 About
  $('#about').scrollIntoView({behavior:'smooth'});

  // 按钮闪白动画
  const btn = $('#enter-btn');
  btn.classList.add('flash');
  setTimeout(()=>btn.classList.remove('flash'),500);
}

/* =========================================================
   2. Video 弹层：播放 & 关闭
========================================================= */
function playVideo(src){
  const pop = $('#video-popup');
  const vid = $('#popup-video');
  vid.src = src;
  pop.style.display = 'flex';
  vid.play();
}
function closeVideo(){
  const pop = $('#video-popup');
  const vid = $('#popup-video');
  vid.pause(); vid.currentTime = 0;
  pop.style.display = 'none';
}

/* =========================================================
   3. AOS（滚动动画）初始化
========================================================= */
AOS.init({
  duration: 1000,   // 动画时长
  once: true        // 只触发一次
});

/* =========================================================
   4. 粒子背景初始化（红 + 青 混色）
========================================================= */
particlesJS('particles-js',{
  particles:{
    number:{value:80},
    color:{value:['#E50914','#00FFFF']},
    shape:{type:'circle'},
    opacity:{value:.4},
    size:{value:2},
    line_linked:{
      enable:true,distance:100,
      color:'#ffffff',opacity:.2,width:1
    },
    move:{enable:true,speed:1.5}
  },
  interactivity:{detect_on:'canvas',events:{onhover:{enable:false}}},
  retina_detect:true
});

/* =========================================================
   5. 幕后剧照 Glide.js 滑动
      - 仅当 .bts-slider 存在才初始化
========================================================= */
if (document.querySelector('.bts-slider')) {
  const glide = new Glide('.bts-slider',{
    type:'carousel',
    autoplay:3500,
    gap:20,
    hoverpause:true,
    perView:1,
    animationDuration:800
  });
  glide.mount();
}

/* =========================================================
   6. 时间轴（可选）— 若想滚轮平滑横向滚，可解注释
========================================================= */
/*
const timeTrack = document.querySelector('.time-track');
if(timeTrack){
  timeTrack.addEventListener('wheel',e=>{
    e.preventDefault();
    timeTrack.scrollLeft += e.deltaY;
  }, {passive:false});
}
*/

/* =========================================================
   7. 预加载关键图片（可选）
========================================================= */
/*
['/media/posters/kill-a-stranger.jpg',
 '/media/behind/ksmr1.jpg'].forEach(src=>{
   const img = new Image(); img.src = src;
});
*/
