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

ctx.font = "30px fantasy";
ctx.fillStyle = 'rgb(153, 153, 153)';
ctx.fillText("The Montana Grizzlies football (commonly referred to as the Griz) program represents the University of Montana in the Division I Football Championship Subdivision (FCS) of college football. The Grizzlies have competed in the Big Sky Conference since 1963, where it is a founding member. They play their home games on campus in Missoula at Washington–Grizzly Stadium, where they had an average attendance of 26,978 in 2023.", 200, 50);

var img = document.getElementById("Grizimage");
ctx.drawImage(img, 190, 50);