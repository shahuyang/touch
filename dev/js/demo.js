var touchR ={};


function touch(event){
  var oDiv = document.getElementById('main');
  var event = event || window.event;

  switch (event.type){
    case "touchstart":
      touchR.startX = event.touches[0].clientX;
      touchR.startY = event.touches[0].clientY;
      break;

    case "touchmove":
      event.preventDefault();
      break;

    case "touchend":
      touchR.endX = event.changedTouches[0].clientX;
      touchR.endY = event.changedTouches[0].clientY;
      var changeX = (touchR.endX - touchR.startX);
      var changeY = (touchR.endY - touchR.startY);
      if(Math.abs(changeX) > Math.abs(changeY)){
          if(changeX>0){
              console.log("右滑动"+Math.abs(changeX))
          }else{
              console.log("左滑动"+Math.abs(changeX))
          }
      }else if(Math.abs(changeX) < Math.abs(changeY)){
        if(changeX>0){
            console.log("上滑动"+Math.abs(changeY))
        }else{
            console.log("下滑动"+Math.abs(changeY))
        }
      }else if(changeX==changeY==0){
          console.log("click")
      }
      break;
  }
}

function addTouch(){

  document.addEventListener('touchstart',touch,false);
  document.addEventListener('touchmove',touch,false);
  document.addEventListener('touchend',touch,false);
}

addTouch();


// function touch(event){
//   var event = event || window.event;
//   var oDiv = document.getElementById('main');
//   console.log(event.type)
//
// // 单手指操作，touchstart ， touchmove 只需要监听 event.touches[0] 即可
//   //            touchend 需要监听  event.changedTouches[0]
//   switch (event.type){
//     case "touchstart":
//       oDiv.innerHTML = "Touch Start（"+event.touches[0].clientX+","+event.touches[0].clientY+"）";
//       break;
//     case "touchmove":
//       event.preventDefault();
//       oDiv.innerHTML = "Touch Move（"+event.touches[0].clientX+","+event.touches[0].clientY+"）";
//       break;
//     case "touchend":
//       oDiv.innerHTML = "Touch End（"+event.changedTouches[0].clientX+","+event.changedTouches[0].clientY+"）";
//       break;
//   }
// }
//
// function load(){
//   document.addEventListener('touchstart',touch,false);
//   document.addEventListener('touchmove',touch,false);
//   document.addEventListener('touchend',touch,false);
// //测试其他事件
//   document.addEventListener('mouseover',touch,false);
//   document.addEventListener('mousemove',touch,false);
//   document.addEventListener('mousedown',touch,false);
//   document.addEventListener('mouseup',touch,false);
//   document.addEventListener('click',touch,false);
//
// }
// //  load();  // 这样写和下面是一样的
// window.addEventListener('load',load,false);