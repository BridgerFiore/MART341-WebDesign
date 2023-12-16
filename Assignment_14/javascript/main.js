var c = document.getElementById("canvas");
var ctx = c.getContext("2d");
var cty = c.getContext("2d");
ctx.lineWidth = 4;


ctx.font = "60px fantasy";
ctx.strokeStyle = 'rgb(112, 0, 46)';
ctx.strokeText("Montana", 130, 100);

ctx.font = "30px fantasy";
ctx.fillStyle = 'rgb(153, 153, 153)';
ctx.fillText("We Are", 190, 50);

var img = document.getElementById("Grizimage");
ctx.drawImage(img, 190, 50);