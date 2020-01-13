$(document).ready(function () {
  $('.button-group #btn1').click(function() {
    $('#home').removeClass('hidden');
    $('#about').addClass('hidden');
    $('#skills').addClass('hidden');
    $('#contact').addClass('hidden');
    $('#portfolio').addClass('hidden');
    $('#experience').addClass('hidden');
    $('.sidebar').addClass('hidden');
  });
  $('.button-group #btn2').click(function() {
    $('#about').removeClass('hidden');
    $('#skills').addClass('hidden');
    $('#contact').addClass('hidden');
    $('#portfolio').addClass('hidden');
    $('#experience').addClass('hidden');
    $('#home').addClass('hidden');
    $('.sidebar').removeClass('hidden');
  });
  $('.button-group #btn3').click(function() {
    $('#skills').removeClass('hidden');
    $('#about').addClass('hidden');
    $('#contact').addClass('hidden');
    $('#portfolio').addClass('hidden');
    $('#experience').addClass('hidden');
    $('#home').addClass('hidden');
    $('.sidebar').removeClass('hidden');
  });
  $('.button-group #btn4').click(function() {
    $('#experience').removeClass('hidden');
    $('#about').addClass('hidden');
    $('#contact').addClass('hidden');
    $('#portfolio').addClass('hidden');
    $('#skills').addClass('hidden');
    $('.sidebar').removeClass('hidden');
  });
  $('.button-group #btn5').click(function() {
    $('#contact').removeClass('hidden');
    $('#about').addClass('hidden');
    $('#skills').addClass('hidden');
    $('#portfolio').addClass('hidden');
    $('#experience').addClass('hidden');
    $('#home').addClass('hidden');
    $('.sidebar').removeClass('hidden');
  });
  $('.button-group #btn6').click(function() {
    $('#portfolio').removeClass('hidden');
    $('#contact').addClass('hidden');
    $('#about').addClass('hidden');
    $('#skills').addClass('hidden');
    $('#experience').addClass('hidden');
    $('#home').addClass('hidden');
    $('.sidebar').removeClass('hidden');
  });
  $('#home-about').click(function() {
    $('.project-area .button-group #btn2').trigger('click');
  });
});
$(document).ready(function () {


    let $btns = $('.project-area .button-group button');
    let $btns2 = $('.project-area .button-group2 button');

    $btns.click(function (e) {
        $('.project-area .button-group button').removeClass('active');
        e.target.classList.add('active');
        // e.target.dataset.addClass('hidden');
        let selector = $(e.target).attr('data-filter');
        $('.project-area .grid').isotope({
            filter: selector
        });
        // console.log(selector +" "+e.target.dataset.filter);
        var getElementID = selector.replace(/[,.]/g , ''); 
        if(selector == e.target.dataset.filter)
        {
          console.log(getElementID);
          // $('.about').addClass('hidden');
          // $('.skills').addClass('hidden');
          // $('.contact').addClass('hidden');
          // $('.experience').addClass('hidden');
          $('.'+ getElementID).removeClass('hidden');
          // alert("yes");
        }
        return false;
    })

    $btns2.click(function (e) {
        $('.project-area .button-group2 button').removeClass('active');
        e.target.classList.add('active');
        // e.target.dataset.addClass('hidden');
        let selectors = $(e.target).attr('data-filter');
        $('.project-area .grids').isotope({
            filter: selectors
        });
        // console.log(selector +" "+e.target.dataset.filter);
        var getElementID = selector.replace(/[,.]/g , ''); 
        if(selectors == e.target.dataset.filter)
        {
          console.log(getElementID);
          // $('.about').addClass('hidden');
          // $('.skills').addClass('hidden');
          // $('.contact').addClass('hidden');
          // $('.experience').addClass('hidden');
          $('.'+ getElementID).removeClass('hidden');
          // alert("yes");
        }
        return false;
    })

    $('.project-area .button-group #btn1').trigger('click');
    // Owl-carousel

    $('.site-main .about-area .owl-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        dots: true,
        responsive: {
            0: {
                items: 1
            },
            560: {
                items: 2
            }
        }
    })

    // sticky navigation menu

});