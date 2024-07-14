
var img1 = document.getElementById("img1");
var pre = document.getElementById("pre");
var next = document.getElementById("next");
var imgsrc = ["img/1.jpg", "img/2.jpg", "img/3.jpg", "img/4.jpg", "img/5.jpg"];
var i = 0;
var lilist = document.querySelectorAll(".circle-list li"); // 假设您的指示器是在class为"circle-list"的ul中的li

setInterval(changeimg, 3000);

function changeimg() {
    i++;
    if (i >= imgsrc.length) {
        i = 0;
    }
    img1.setAttribute("src", imgsrc[i]);
    addcirclebg();
}

function addcirclebg() {
    for (var k = 0; k < lilist.length; k++) {
        if (k == i) {
            lilist[k].className = "bgcolor";
        } else {
            lilist[k].className = "";
        }
    }
}

next.onclick = changeimg;
pre.onclick = function () {
    i--;
    if (i < 0) {
        i = imgsrc.length - 1;
    }
    img1.setAttribute("src", imgsrc[i]);
    addcirclebg();
};

for (var j = 0; j < lilist.length; j++) {
    (function(index) {
        lilist[j].onclick = function () {
            i = index;
            img1.setAttribute("src", imgsrc[i]);
            addcirclebg();
        };
    })(j);
}
