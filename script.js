var link = new Array();
link[0] = "https://www.w3schools.com";
link[1] = "https://www.youtube.com/";
link[2] = "https://github.com/";
var target_link = link[Math.random()*3];
document.getElementById("need_link").href = link[Math.random()*3] ;
