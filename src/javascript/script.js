let screenWidth = window.screen.width;
var closeModal = document.getElementById("closeModal");
var roomCards = document.getElementsByClassName("roomCards");
responsive()

window.addEventListener("resize",responsive())

closeModal.addEventListener("click",function(){displayNone("roomDetails")});

function displayNone(id) {
   document.getElementById(id).style.display = "none";
};

function displayBlock(id) {
  document.getElementById(id).style.display = "block";
};

window.onclick = function(event) {
  if (event.target == document.getElementById("roomDetails") ) {
    return;
  }else{
    closeModal.addEventListener("click",function(){displayNone("roomDetails")});
  };
};


function responsive() {
  if (screenWidth < 801) {
  $(document).ready(function () {
    $(".rooms").slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      nextArrow: '<i class="arrowNext">></i>',
      prevArrow: '<i class="arrowPrev"><</i>',
    });
  });
} else {
  $(document).ready(function () {
    $(".rooms").slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      nextArrow: '<i class="arrowNext">></i>',
      prevArrow: '<i class="arrowPrev"><</i>',
    });
  });
}

if (screenWidth < 801) {
  $(document).ready(function () {
    $(".detailsPic").slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      nextArrow: '<i class="arrowNextDetails">></i>',
      prevArrow: '<i class="arrowPrevDetails"><</i>',
    });
  });
} else {
  $(document).ready(function () {
    $(".detailsPic").slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      nextArrow: '<i class="arrowNextDetails">></i>',
      prevArrow: '<i class="arrowPrevDetails"><</i>',
    });
  });
}

var Player = document.getElementById("videoBg");
var Logo = document.getElementById("logo");
if (screenWidth < 801) {
  var nextsrc = ["https://github.com/lucascarneiro-dev/danitor-booking/raw/main/src/video/bgMobile01.mp4", "https://github.com/lucascarneiro-dev/danitor-booking/raw/main/src/video/bgMobile00.mp4"];
  Player.style.position = "absolute";
  Player.style.objectFit = "cover";
  Player.style.zIndex = "-1";
  Player.style.width = "100vw";
  Player.style.height = "100vh";
  // Logo.src="./src/img/logo-white.png"
} else {
  var nextsrc = [
    "https://github.com/lucascarneiro-dev/danitor-booking/raw/main/src/video/bgPc%20(1).mp4",
    "https://github.com/lucascarneiro-dev/danitor-booking/raw/main/src/video/bgPc%20(2).mp4",
    "https://github.com/lucascarneiro-dev/danitor-booking/raw/main/src/video/bgPc%20(3).mp4"
  ];
  Player.style.position = "absolute";
  Player.style.objectFit = "cover";
  Player.style.zIndex = "1";
  Player.style.height = "35vw";
  Player.style.width = "35vw";
  Player.style.borderRadius = "35vw";
  Player.style.right = "0vw";
  Player.style.marginRight = "10vw";
  Player.style.top = "50%";
  Player.style.marginTop = "-17.5vw";
  // Logo.src="./src/img/logo-blue.png"
}
}


var elm = 0;

Player.src = nextsrc[0];
Player.onended = function () {
  if (++elm < nextsrc.length) {
    Player.src = nextsrc[elm];
    Player.play();
  } else {
    elm = 0;
    Player.src = nextsrc[elm];
    Player.play();
  }
};
