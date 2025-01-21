 let sElement = document.querySelector('.p_s')
 let mElement = document.querySelector('.p_m')
 let hElement = document.querySelector('.p_h')
 let digitalEl = document.querySelector('.digital')

 function uptadeClock(){
   let now = new Date()
   let s = now.getSeconds()
   let m = now.getMinutes()
   let h = now.getHours()

   digitalEl.innerHTML = `${fixTime(h)}:${fixTime(m)}:${fixTime(s)}`;

   let sDeg = (360/60) * s - 90;
   let mDeg = (360/60) * m - 90;
   let hDeg = (360/12) * h - 90;

   sElement.style.transform = `rotate(${sDeg}deg)`
   mElement.style.transform = `rotate(${mDeg}deg)`
   hElement.style.transform = `rotate(${hDeg}deg)`

 }

 setInterval(uptadeClock, 1000) 
 uptadeClock()


 
  function fixTime (time){
  return time < 10 ?`0${time}`: time;
  }
