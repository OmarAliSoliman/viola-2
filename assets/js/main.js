$(document).ready(function () {
  // choses-slider

  // new WOW().init();

  $('.swiper-slide').height($(window).height() - $(".my-navbar").innerHeight())
  $('.header').height($(window).height() - $(".my-navbar").innerHeight())

  if ($(".bg-sidenavOpen").length) {
    $(".bg-sidenavOpen").on("click", function () {
      $("#mySidenav").css("left", "-400px");
      $(this).css("display", "none");
      document.body.classList.remove("openMenuActive");
    });
  }

  var swiper = new Swiper(".headerSwiper", {  
    autoplay: {
      delay: 6000,
      disableOnInteraction: false,
    },
    speed: 1200,
    effect: 'cards',
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    on: {
      init: function () {
        $(".swiper-progress-bar").removeClass("animate");
        $(".swiper-progress-bar").removeClass("active");
        $(".swiper-progress-bar").eq(0).addClass("animate");
        $(".swiper-progress-bar").eq(0).addClass("active");
      },
      slideChangeTransitionStart: function () {
        $(".swiper-progress-bar").removeClass("animate");
        $(".swiper-progress-bar").removeClass("active");
        $(".swiper-progress-bar").eq(0).addClass("active");
      },
      slideChangeTransitionEnd: function () {
        $(".swiper-progress-bar").eq(0).addClass("animate");
      },
    },
  });







});

function openNav() {
  document.getElementById("mySidenav").style.left = "0";
  document.querySelector(".bg-sidenavOpen").style.display = "block";
  document.body.classList.add("openMenuActive");
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  document.getElementById("mySidenav").style.left = "-400px";
  document.querySelector(".bg-sidenavOpen").style.display = "none";
  document.body.classList.remove("openMenuActive");
}

if ($(".slideImg").length) {
  var headertImg = document.querySelectorAll(".slideImg");
  headertImg.forEach((es)=>{
    var parallaxInstance = new Parallax(es);
  })
}

const splash = 	document.querySelector(".splash");

document.addEventListener("DOMContentLoaded",(e)=> {
	setTimeout(()=> {
		splash.classList.add("displayNone");
	})
});
