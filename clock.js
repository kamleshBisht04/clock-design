'use strict';

let hr = document.getElementById('hour');
let min = document.getElementById('min');
let sec = document.getElementById('sec');

function displayTime(){
  let date = new Date();

  let hh = date.getHours();
  let mm = date.getMinutes();
  let ss = date.getSeconds();

    let hRoatation = 30 * hh + mm / 2;
    let mRoatation = 6 * mm;
    let sRoatation = 6 * ss;

  hr.style.transform = `rotate(${hRoatation}deg)`;
  min.style.transform = `rotate(${mRoatation}deg)`;
  sec.style.transform = `rotate(${sRoatation}deg)`;
}
setInterval(displayTime, 1000);





