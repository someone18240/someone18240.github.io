function startExperience(){
  const bgm=document.getElementById('bgm');
  bgm.play().catch(()=>console.log('等待用户交互'));
  document.getElementById('about').scrollIntoView({behavior:'smooth'});
  document.getElementById('enter-btn').classList.add('flash');         // 按钮闪白
  setTimeout(()=>document.getElementById('enter-btn').classList.remove('flash'),500);
}

function playVideo(src){
  const p=document.getElementById('video-popup'),v=document.getElementById('popup-video');
  v.src=src;p.style.display='flex';v.play();
}
function closeVideo(){
  const p=document.getElementById('video-popup'),v=document.getElementById('popup-video');
  v.pause();v.currentTime=0;p.style.display='none';
}

/* AOS */
AOS.init({duration:1000,once:true});

/* 彩色粒子 */
particlesJS('particles-js',{
  particles:{number:{value:80},color:{value:['#E50914','#00FFFF']},
  shape:{type:'circle'},opacity:{value:.4},size:{value:2},
  line_linked:{enable:true,distance:100,color:'#FFFFFF',opacity:.2,width:1},
  move:{enable:true,speed:1.5}},
  interactivity:{detect_on:'canvas',events:{onhover:{enable:false}}},
  retina_detect:true
});

/* 奖项字幕淡入轮播 */
const awards=[...document.querySelectorAll('.awards-slider span')];let cur=0;
function showAward(){awards.forEach((el,i)=>el.style.opacity=i===cur?'1':'0');cur=(cur+1)%awards.length;}
showAward();setInterval(showAward,4000);
