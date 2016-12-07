var touchR ={};
var position=0;

function touch(event){
    var event = event || window.event;

    switch (event.type){
        case "touchstart":
          touchR.startX = event.touches[0].clientX;
          touchR.startY = event.touches[0].clientY;
        break;

        case "touchmove":
        event.preventDefault();
        break;

        //  结果执行
        case "touchend":
            touchR.endX = event.changedTouches[0].clientX;
            touchR.endY = event.changedTouches[0].clientY;
            var changeX = (touchR.endX - touchR.startX);
            var changeY = (touchR.endY - touchR.startY);
            if(Math.abs(changeX) > Math.abs(changeY)){
                  if(changeX>0){
                      $('#text').html("右滑动"+Math.abs(changeX));
                      position = position+100;
                      if(position>=0){
                          position=0
                      };
                      $("#inner").animate({
                          left:position+"%"
                      },400)
                  }else{
                      $('#text').html("左滑动"+Math.abs(changeX));
                      position = position-100;
                      if(position<=-300){
                          position=-300
                      }
                      $("#inner").animate({
                          left:position+"%"
                      },400)
                  }
            }else if(Math.abs(changeX) < Math.abs(changeY)){
                if(changeX>0){
                    console.log("上滑动"+Math.abs(changeY));
                }else{
                    console.log("下滑动"+Math.abs(changeY));
                }
            }else if(changeX==changeY==0){
                console.log("其他")
            }
          break;
    }
}

function addTouch(eleId){
    var oEle = document.getElementById(eleId);
    oEle.addEventListener('touchstart',touch,false);
    oEle.addEventListener('touchmove',touch,false);
    oEle.addEventListener('touchend',touch,false);
}



addTouch('inner');




