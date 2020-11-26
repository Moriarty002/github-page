var link = new Array();
/*Add link here*/
link[0] = "https://forms.gle/xiqzbbQT5ZULUDVC6";
link[1] = "https://forms.gle/AU8BxGHPfUoztdd8A";
link[2] = "https://forms.gle/hpCsMszSrzAYULF86";
link[3] = "https://forms.gle/mogDeDHFwVPwuupL6";
link[4] = "https://forms.gle/hfq5X9byQD1BDTi96";
link[5] = "https://forms.gle/YrR2bBdrvLRmzaHQ7";
link[6] = "https://forms.gle/3Ar7CdncNqBzRfy39";
link[7] = "https://forms.gle/nC3VKJHRNy3MQfj67";
link[8] = "https://forms.gle/RZvgAxskKPJWBHRt7";


function choice(){
    var target_link = link[Math.floor(Math.random()*9)]; // the number "9" is the number of your links , if link change remember to change 
    var t = document.getElementById("needlink");
    t.href = target_link;
}
