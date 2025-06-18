const content = [
  "我是神秘智者，导演 / 编导",
  "戈达尔式拆解，萨特式怀疑。",
  "代表作：《杀死陌生人》《火光中的自白》。",
  "合作品牌：星巴克、阿里、美团、百雀羚...",
  "用影像留证，用质疑刻痕。"
];

let i = 0, j = 0, isDeleting = false, current = '';

function type() {
  const el = document.getElementById('typewriter');
  if (i < content.length) {
    if (!isDeleting && j <= content[i].length) {
      current = content[i].substring(0, j++);
    } else if (isDeleting && j > 0) {
      current = content[i].substring(0, j--);
    } else if (!isDeleting && j > content[i].length) {
      isDeleting = true;
      setTimeout(type, 1000);
      return;
    } else if (isDeleting && j === 0) {
      isDeleting = false;
      i++;
    }
    el.innerHTML = current + '<span class="cursor">|</span>';
    setTimeout(type, isDeleting ? 50 : 120);
  }
}

type();