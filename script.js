var link = new Array();
link[0] = "https://www.w3schools.com";
link[1] = "https://www.youtube.com/";
link[2] = "https://github.com/";
function choice(){
    var target_link = link[Math.floor(Math.random()*3)];
    var t = document.getElementById("needlink");
    t.href = target_link;
}