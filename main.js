
function toggleSidebar() {
  document.getElementById("sidebar-menu").classList.toggle('active');
  document.getElementById("content-wrapper").classList.toggle('active');
  document.getElementById("geometric").classList.toggle('active');
}


$("#toggle-button").click(function(){
  $(this).toggleClass("active")
});



// var myIndex2019 = 0;
// carousel2019();

// function carousel2019() {
//   var i2019;
//   var x2019 = document.getElementsByClassName("p-2019");
//   for (i = 0; i < x2019.length; i++) {
//     x2019[i].style.display = "none";  
//   }
//   myIndex2019++;
//   if (myIndex2019 > x2019.length) {myIndex2019 = 1}    
//   x2019[myIndex2019-1].style.display = "block";  
//   setTimeout(carousel2019, 2000); // Change image every 2 seconds
// }



// var myIndex2018 = 0;
// carousel2018();

// function carousel2018() {
//   var i2018;
//   var x2018 = document.getElementsByClassName("p-2018");
//   for (i = 0; i < x2018.length; i++) {
//     x2018[i].style.display = "none";  
//   }
//   myIndex2018++;
//   if (myIndex2018 > x2018.length) {myIndex2018 = 1}    
//   x2018[myIndex2018-1].style.display = "block";  
//   setTimeout(carousel2018, 2000); 
// }



// var myIndex2017 = 0;
// carousel2017();

// function carousel2017() {
//   var i2017;
//   var x2017 = document.getElementsByClassName("p-2017");
//   for (i = 0; i < x2017.length; i++) {
//     x2017[i].style.display = "none";  
//   }
//   myIndex2017++;
//   if (myIndex2017 > x2017.length) {myIndex2017 = 1}    
//   x2017[myIndex2017-1].style.display = "block";  
//   setTimeout(carousel2017, 2000);
// }

var myVar, myVar2, myVar3;

var currentBackground2019 = 0,
    backgrounds2019 = [];

    backgrounds2019[0] = '/images/main01.jpg';
    backgrounds2019[1] = '/images/main02.jpg';
    backgrounds2019[2] = '/images/main03.jpg';

function changeBackground2019() {
  currentBackground2019++;
  if(currentBackground2019 > 2) currentBackground2019 = 0;


  $('.preview-container').fadeOut(100, function() {
    $('.preview-container').css({
      'background-image': "url('" + backgrounds2019[currentBackground2019] + "')", 'background-repeat': 'no-repeat', 'background-size': 'cover'
    });

    $('.preview-container').fadeIn(100);

  });

  

  myVar = setTimeout(changeBackground2019, 3000);

  
}


$('.slick-item-1').on("click", changeBackground2019);

$('.slick-item-5').on("click", changeBackground2018);

$('.slick-item-9').on("click", changeBackground2017);



$('.slick-item-1').on("click", function() {
  clearTimeout(myVar2);
  clearTimeout(myVar3);
})


$('.slick-item-5').on("click", function() {
  clearTimeout(myVar);
  clearTimeout(myVar3);
});


$('.slick-item-9').on("click", function() {
  clearTimeout(myVar);
  clearTimeout(myVar2);
});




var currentBackground2018 = 0,
    backgrounds2018 = [];

    backgrounds2018[0] = '/images/main04.jpg';
    backgrounds2018[1] = '/images/main05.jpg';
    backgrounds2018[2] = '/images/main06.jpg';

function changeBackground2018() {

  
  currentBackground2018++;
  if(currentBackground2018 > 2) currentBackground2018 = 0;
  

  $('.preview-container').fadeOut(100, function() {
    $('.preview-container').css({
      'background-image': "url('" + backgrounds2018[currentBackground2018] + "')", 'background-repeat': 'no-repeat', 'background-size': 'cover'
    });

    $('.preview-container').fadeIn(100);

  });

    myVar2 = setTimeout(changeBackground2018, 3000)


}



    var currentBackground2017 = 0,
    backgrounds2017 = [];

    backgrounds2017[0] = '/images/main07.jpg';
    backgrounds2017[1] = '/images/main08.jpg';
    backgrounds2017[2] = '/images/main09.jpg';

    function changeBackground2017() {

  
    currentBackground2017++;
    if(currentBackground2017 > 2) currentBackground2017 = 0;
  

    $('.preview-container').fadeOut(100, function() {
      $('.preview-container').css({
        'background-image': "url('" + backgrounds2017[currentBackground2017] + "')", 'background-repeat': 'no-repeat', 'background-size': 'cover'
     });

    $('.preview-container').fadeIn(100);

    });

    myVar3 = setTimeout(changeBackground2017, 3000)


 


}











$('.slick-item-1').click(function() {
  $('.preview-2017').css('display', 'none');
  $('.preview-2018').css('display', 'none');
  $('.preview-2019').css('display', 'block');
  
  
});


$('.slick-item-5').click(function() {
  $('.preview-2017').css('display', 'none');
  $('.preview-2019').css('display', 'none');
  $('.preview-2018').css('display', 'block');
});


$('.slick-item-9').click(function() {
  $('.preview-2019').css('display', 'none');
  $('.preview-2018').css('display', 'none');
  $('.preview-2017').css('display', 'block');
  
});





$('.slick').slick({
  dots: false,
  infinite: false,
  pauseOnHover: true,
  slidesToShow: 8,
  autoplay: false,
  autoplaySpeed: 1,
  slidesToScroll: 3,
  draggable: true,
  swipe: true,
  touchMove: true,
  rtl:false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 7,
        slidesToScroll: 1,
        infinite: false,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 1
      }
    }

  ]
});





$('.slick-next').on('mouseover',function(){

    $('.slick-slider').slick('slickPlay');
  
  });

  $('.slick-next').on('mouseleave',function(){

    $('.slick-slider').slick('slickPause');
  
  });



  $('.slick-prev').mouseover(function() {
    var slider = $('.slick');
    slider.slick('slickGoTo', 0, false);

  });     


