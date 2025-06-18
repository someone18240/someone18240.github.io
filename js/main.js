function startExperience(){
  document.getElementById('bgm').play();
  window.scrollTo({top:window.innerHeight,behavior:'smooth'});
}

function playVideo(src){
  let popup=document.getElementById('video-popup');
  let video=document.getElementById('popup-video');
  video.src=src;popup.style.display='flex';video.play();
}

function closeVideo(){
  let popup=document.getElementById('video-popup');
  let video=document.getElementById('popup-video');
  video.pause();video.currentTime=0;popup.style.display='none';
}
