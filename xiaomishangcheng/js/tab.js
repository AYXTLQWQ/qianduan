var con=document.querySelectorAll(".tab_con div");
console.log(con);
for(var i=1;i<con.length;i++){
	con[i].classList.add("item");
}
var NAV=document.querySelectorAll(".tab_list li");
console.log(NAV);
for(var i=1;i<NAV.length;i++){
	NAV[i].onclick=function(){
		for(var j=0;j<NAV.length;j++){
			if(NAV[j]==this){
				this.classList.add("liststyle");
				con[j].classList.remove("item");
				}else{
					NAV[j].classList.remove("liststyle");
					con[j].classList.add("item");
				}
		}
	}
}
let slideIndex = 0;

function showSlide(n) {
  let i;
  let slides = document.getElementsByClassName("image-slide");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex = n - 1; // 更新slideIndex的值
  slides[slideIndex].style.display = "block";
}

function changeSlide(n) {
  slideIndex += n;
  let totalSlides = document.getElementsByClassName("image-slide").length;
  if (slideIndex >= totalSlides) {
    slideIndex = 0;
  } else if (slideIndex < 0) {
    slideIndex = totalSlides - 1;
  }
  showSlide(slideIndex + 1); // 调用showSlide时需要加1，因为slideIndex是从0开始的
}

// 初始化显示第一张图片
showSlide(1);

let slideIndex2 = 0;

function showSlide2(n) {
  let i;
  let slides2 = document.getElementsByClassName("image-slide-2");
  for (i = 0; i < slides2.length; i++) {
    slides2[i].style.display = "none";
  }
  slideIndex2 = n - 1; // 更新slideIndex2的值
  slides2[slideIndex2].style.display = "block";
}

function changeSlide2(n) {
  slideIndex2 += n;
  let totalSlides2 = document.getElementsByClassName("image-slide-2").length;
  if (slideIndex2 >= totalSlides2) {
    slideIndex2 = 0;
  } else if (slideIndex2 < 0) {
    slideIndex2 = totalSlides2 - 1;
  }
  showSlide2(slideIndex2 + 1); // 调用showSlide2时需要加1，因为slideIndex2是从0开始的
}

// 初始化显示第一张图片
showSlide2(1);


let slideIndex3 = 0;

function showSlide3(n) {
  let i;
  let slides3 = document.getElementsByClassName("image-slide-3");
  for (i = 0; i < slides3.length; i++) {
    slides3[i].style.display = "none";
  }
  slideIndex3 = n - 1; // 更新slideIndex3的值
  slides3[slideIndex3].style.display = "block";
}

function changeSlide3(n) {
  slideIndex3 += n;
  let totalSlides3 = document.getElementsByClassName("image-slide-3").length;
  if (slideIndex3 >= totalSlides3) {
    slideIndex3 = 0;
  } else if (slideIndex3 < 0) {
    slideIndex3 = totalSlides3 - 1;
  }
  showSlide3(slideIndex3 + 1); // 调用showSlide3时需要加1，因为slideIndex3是从0开始的
}

// 初始化显示第一张图片
showSlide3(1);
