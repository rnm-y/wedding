function fade_in_animation(){

  const element = document.getElementsByClassName('fade_in');
  if(!element) return ; //要素がない場合キャンセル

  let showTiming = window.innerHeight > 768 ? 500 : 500;
  let scrollY = window.pageYOffset;
  let windowH = window.innerHeight;

  for (let i = 0; i < element.length; i++) { let elemClientRect = element[i].getBoundingClientRect(); let elemY = scrollY + elemClientRect.top; if(scrollY + windowH - showTiming > elemY){
    element[i].classList.add('is_show');  
  }else if(scrollY + windowH < elemY){
    element[i].classList.remove('is_show');
  }
  }
}

fade_in_animation();
window.addEventListener('scroll', fade_in_animation)