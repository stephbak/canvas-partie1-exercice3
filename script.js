var c = document.getElementById( "house" );
var ctx = c.getContext("2d");

ctx.fillStyle = "#00b755";
ctx.fillRect(40,240,320,60);
ctx.fillStyle = "#00b755";
ctx.fillRect(100,180,200,60);
ctx.beginPath()
ctx.arc(80,340,40,0,Math.PI*2,true);
ctx.fillStyle = "#cdcdcd";
ctx.strokeStyle = "#6b6b6b";
ctx.fill();
ctx.stroke();
ctx.beginPath()
ctx.arc(320,340,40,0,Math.PI*2,true);
ctx.fillStyle = "#cdcdcd";
ctx.strokeStyle = "#6b6b6b";
ctx.fill();
ctx.stroke();
