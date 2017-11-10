$(document).ready(function() {

    var slideIndex = 1;
    showDivs(1);

    var myIndex = 0;
    carousel();


    $('[id^="demo"]').on('click', function() {

        showDivs(slideIndex = parseInt($(this).attr('id').split('demo')[1]));
    });

    $('[id^="btn"]').on('click', function() {

        showDivs(slideIndex += parseInt($(this).attr('id').split('btn')[1]));
    });


    function showDivs(n) {
      var i;
      var x = document.getElementsByClassName("mySlides");
      var dots = document.getElementsByClassName("demo");
      if (n > x.length) {slideIndex = 1}
      if (n < 1) {slideIndex = x.length}
      for (i = 0; i < x.length; i++) {
         x[i].style.display = "none";
      }
      for (i = 0; i < dots.length; i++) {
         dots[i].className = dots[i].className.replace(" w3-grayscale-max", "");
      }
      x[slideIndex-1].style.display = "block";
      dots[slideIndex-1].className += " w3-grayscale-max";
    }


    function carousel() {
        var i;
        var x = document.getElementsByClassName("mySlides");
        var dots = document.getElementsByClassName("demo");
        for (i = 0; i < x.length; i++) {
          x[i].style.display = "none";
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" w3-grayscale-max", "");
        }

        myIndex++;
        if (myIndex > x.length) {myIndex = 1}
        x[myIndex-1].style.display = "block";
        setTimeout(carousel, 3500);
        dots[myIndex-1].className += " w3-grayscale-max";
    }
});
