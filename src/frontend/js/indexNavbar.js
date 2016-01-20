(function () {
  $('#btnMenu').on('click', function () {
    $('#navbarMenu').toggleClass('header-menu-list-show')
  })

  var time = 400
  var margin_top = $('#view-0').height()

  $('#a-view-1').on('click', function () {
    $('body,html').animate({
      scrollTop: $('#view-1').position().top - margin_top
    }, time)
    $('#navbarMenu').toggleClass('header-menu-list-show')
  })

  $('#a-view-2').on('click', function () {
    $('body,html').animate({
      scrollTop: $('#view-2').position().top - margin_top
    }, time)
    $('#navbarMenu').toggleClass('header-menu-list-show')
  })

  $('#a-view-3').on('click', function () {
    $('body,html').animate({
      scrollTop: $('#view-3').position().top - margin_top
    }, time)
    $('#navbarMenu').toggleClass('header-menu-list-show')
  })

  $('#a-view-4').on('click', function () {
    $('body,html').animate({
      scrollTop: $('#view-4').position().top - margin_top
    }, time)
    $('#navbarMenu').toggleClass('header-menu-list-show')
  })
})()