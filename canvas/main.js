var yyy = document.getElementById('xxx');
var context = yyy.getContext('2d');

autoSetCanvaSize(yyy)
listenToMouse(yyy)

  
 var eraserEnabled = false
 eraser.onclick = function(){
 eraserEnabled = true
 actions.className = 'actions x'
}
 
 brush.onclick = function(){
 eraserEnabled = false
 actions.className = 'actions'
}
  
              /*$$$$$$$$$*/
//监听键盘
function listenToMouse(canvas){
  var lastPoint = {x: undefined, y: undefined};
  canvas.onmousedown = function(aaa){
  var x = aaa.clientX
  var y = aaa.clientY
  using = true
  if(eraserEnabled){
    context.clearRect(x,y,10,10)
  }else{
    lastPoint = {"x":x,"y":y}
  }
}



canvas.onmousemove = function(aaa){
   var x = aaa.clientX
   var y = aaa.clientY
   if(!using){return}
   if(eraserEnabled){
       context.clearRect(x,y,10,10) 
  }else{
    
    var newPoint = {"x":x,"y":y}
      drawLine(lastPoint.x,lastPoint.y,newPoint.x,newPoint.y)
    lastPoint = newPoint
  }
}


canvas.onmouseup = function(aaa){
  using = false;
}
}


//画线
function drawLine(x1,y1,x2,y2){
  context.beginPath();
  context.strokeStyle = '#211e55'
  context.moveTo(x1,y1);//起点
  context.lineWidth = 5;
  context.lineTo(x2,y2);//终点
  context.stroke();
  context.closePath();
}

function drawCircle(x,y,radius){
  context.beginPath()
  context.fillStyle = '#211e55'
  context.arc(x,y,radius,0,360);
  context.fill();  
}

//设置画面格式
  function autoSetCanvaSize(canvas){
  setCanvasSize()

  window.onresize = function(){
  setCanvasSize()
  }

  function setCanvasSize(){
  var pageWidth = document.documentElement.clientWidth
  var pageHeight = document.documentElement.clientHeight
  canvas.width = pageWidth
  canvas.height = pageHeight
  }
  }
