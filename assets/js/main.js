
$(function () {//로드 후 1번만 실행

// sc-book 닫고 열기

$('.btn-book').click(function () {
  $('.sc-book,.dimmed').toggleClass('on');
  $('body').addClass('no-scroll')
})

$('.btn-close,.dimmed').click(function () {
  $('.sc-book,.dimmed').removeClass('on');
  $('body').removeClass('no-scroll')
})
$('.btn-book,.dimmed').click(function (e) {
  e.preventDefault();
})


load=gsap.timeline({
  onComplete:function(){
    $('.sc-menu.show').remove()
    introMotion.play()
  }
})




//group-nav down

  let lastScroll = 0;

  $(window).scroll(function(){
    curr = $(window).scrollTop();
    target = $('.header .group-nav').offset().top;
  
    if (curr >= 70) {
      $('.header').addClass('fix');
    } else {
      $('.header').removeClass('fix');
    }
  
    if (curr > lastScroll) {
      $('.header').removeClass('show');
      $('.header img').css('transform', 'scale(1.0)'); // Reset image scale to 1.0
      $('.header img').css('margin-top', '0'); // Reset image margin-top
    } else {
      $('.header').addClass('show');
      $('.header img').css('transform', 'scale(0.7)'); // Scale image to 0.7
      $('.header img').css('margin-top', '-30px'); // Move image 50px upward
    }
  
    lastScroll = curr;
  
    if (curr == 0) {
      $('.header').removeClass('fix show'); // Remove both 'fix' and 'show' classes
      $('.header img').css('transform', 'scale(1.0)'); // Reset image scale to 1.0
      $('.header img').css('margin-top', '0'); // Reset image margin-top
    }
  });

//destination 메뉴바
$('.des-area').click(function(event) {
  event.preventDefault();
  $(this).toggleClass('show');
});

$('.des-area a').click(function(event) {
  event.preventDefault();
  $('.sc-dest').toggleClass('show');
});

$('.lang-area').click(function(event) {
  event.preventDefault();
  $('.lang-area .sub-list').toggleClass('show');
});

//menu 눌렀을 때 .sc-menu 나오게

$('.menu-area a,.hamburger').click(function(event) {
  event.preventDefault();
  $('.sc-menu').toggleClass('show');

  const tl = gsap.timeline();

  tl.to('.sc-menu .text', {
    y: 0,
    duration: 0.2
  });
  gsap.to('.sc-menu .text', { duration: 0.2, y:"0", stagger: 0.5})
});



//menu 투명도 설정
$('.link-menu a').hover(
  function() {
    // 마우스 오버 시 투명도를 1로 변경
    $(this).find('span').css('opacity', '1');
  },
  function() {
    // 마우스가 벗어났을 때 투명도를 1로 변경 (toggle 기능)
    $(this).find('span').css('opacity', function(index, value) {
      return (value === '1') ? '0.4' : '1';
    });
  }
);


  



  gsap.to('.sc-zoom .video-box',{
    scrollTrigger:{
      trigger:".sc-zoom",
      start:"0% 0%",
      end:"100% 0%",
      // markers:true,
      pin:true,
      scrub:0,
    },
    scale:1
  })



  // $(document).ready(function(){
    $('.menu-area a,.hamburger').click(function(){
      $('.hamburger').toggleClass("is-active");
    });
  // });


  // tab메뉴
  $('.tab-list > div').hide();
  $('.tab-nav a').click(function () {
    $('.tab-list > li').hide().filter(this.hash).fadeIn();
    $('.tab-nav a').removeClass('active');
    $(this).addClass('active');
    return false;
  }).filter(':eq(0)').click();

  
  gsap.to('.scroll-list01',{
    scrollTrigger:{
      trigger:".scroll-list01",
      start:"0% 80%",
      end:"100% 0%",
      // markers:true,
      scrub:1,
    },
    xPercent:-50
  })

  gsap.to('.row02',{
    scrollTrigger:{
      trigger:".scroll-list02",
      start:"0% 80%",
      end:"100% 0%",
      // markers:true,
      scrub:1,
    },
    xPercent:20
  })




})