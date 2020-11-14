/*

const imgs = new Array (
    "assets/1noBG.png",
    "assets/2noBG.png",
    "assets/3noBG.png",
    "assets/4noBG.png"
);

var i = 0;
var len = imgs.length;



function slider() {
    var imgTag = document.getElementById("logo-img");
    if (i > len - 1) {
        i = 0;
    }
    imgTag.src = imgs[i];
    i++;
    setTimeout('slider()', 3000);
}






