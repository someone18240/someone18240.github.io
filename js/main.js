/* ======================================================
   1. 进入按钮：播放音乐 + 平滑滚动 + 按钮闪白
 ====================================================== */
function startExperience(){
  const bgm=document.getElementById('bgm');
  bgm.play().catch(()=>console.log('等待用户交互'));
  document.getElementById('about').scrollIntoView({behavior:'smooth'});
  // flash btn
  const btn=document.getElementById('enter-btn');
  btn.classList.add('flash');
  setTimeout(()=>btn.classList.remove('flash'),500);
}

/* ======================================================
   2. Video 弹层
 ====================================================== */
function playVideo(src){
  const pop=document.getElementById('video-popup');
  const vid=document.getElementById('popup-video');
  vid.src=src;
  pop.style.display='flex';
  vid.play();
}
function closeVideo(){
  const pop=document.getElementById('video-popup');
  const vid=document.getElementById('popup-video');
  vid.pause();
  vid.currentTime=0;
  pop.style.display='none';
}

/* ======================================================
   3. AOS 滚动动画初始化
 ====================================================== */
AOS.init({duration:1000,once:true});

/* ======================================================
   4. 彩色粒子背景
 ====================================================== */
particlesJS('particles-js',{
  particles:{
    number:{value:80},
    color:{value:['#E50914','#00FFFF']},
    shape:{type:'circle'},
    opacity:{value:.4},
    size:{value:2},
    line_linked:{enable:true,distance:100,color:'#ffffff',opacity:.2,width:1},
    move:{enable:true,speed:1.5}
  },
  interactivity:{detect_on:'canvas',events:{onhover:{enable:false}}},
  retina_detect:true
});

/* ======================================================
   5. Awards 静态大字号列表（无需 JS 轮播）
   ——若后续想要淡入淡出循环，可把这里改回 setInterval 逻辑
 ====================================================== */
