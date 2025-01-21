 let sElement = document.querySelector('.p_s')
 let mElement = document.querySelector('.p_m')
 let hElement = document.querySelector('.p_h')
 let digitalEl = document.querySelector('.digital')

 function uptadeClock(){
   let now = new Date()
   let s = now.getSeconds()
   let m = now.getMinutes()
   let h = now.getHours()

   digitalEl.innerHTML = `${fixTime(h)}:${fixTime(m)}:${fixTime(s)}`

   

   sElement

 

 }
 setInterval(uptadeClock, 1000)
 
  function fixTime (time){
  return time < 10 ?`0${time}`: time;
  }
