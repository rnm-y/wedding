'use strict';

// 期日の設定
const gYear = 2022,
      gMonth = 5,
      gDay = 11,
      gHour = 15,
      gMinute = 0,
      gSecond = 0;

const goal = new Date(gYear, gMonth, gDay, gHour, gMinute, gSecond);

const day = document.getElementById("day");
const hour = document.getElementById("hour");
const minute = document.getElementById("minute");
const second = document.getElementById("second");

function countdown(){
  const now = new Date();
  let rest = goal.getTime() - now.getTime();

  const cDay = Math.floor(rest/(24 * 60 * 60 * 1000));
  rest -= (cDay * 24 * 60 * 60 * 1000);
  const cHour = Math.floor(rest/(60 * 60 * 1000));
  rest -= (cHour * 60 * 60 * 1000);
  const cMinute = Math.floor(rest/(60 * 1000));
  rest -= (cMinute * 60 *1000);
  const cSecond = Math.floor(rest/1000);

  day.innerHTML = cDay < 10 ? '0' + cDay : cDay;
  hour.innerHTML = cHour < 10 ? '0' + cHour : cHour;
  minute.innerHTML = cMinute < 10 ? '0' + cMinute : cMinute;
  second.innerHTML = cSecond < 10 ? '0' + cSecond : cSecond;

  setTimeout(countdown, 10);
}

countdown();