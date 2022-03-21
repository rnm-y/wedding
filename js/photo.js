'use strict';

const path = ('C:/Users/rnmy3/OneDrive/デスクトップ/wedding/photo/')
const img = new Array ('20220129_185400000.png', '20220129_185324000.png', '20220130_091217471.png');

const back_photo = document.getElementById('photo');

let i = 0;

function change_photo(){
  i++;
  if (i >= img.length){
    i = 0;
  }

  back_photo.style.backgroundImage = 'url("' + path + img[i] + '")';
  } 
  
window.setInterval(change_photo, 10000);