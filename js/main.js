$(document).ready(function () {
  $('.footer__nav').click(function () {
    $(this).toggleClass('active')
    if ($(this).hasClass('active')) {
      $(this).html('Enable Video')
      $('#video').fadeOut()
      $('#video2').fadeIn()
      $('.wrapper').toggleClass('active')
    } else {
      $('#video').fadeIn()
      $('.wrapper').toggleClass('active')
      $('#video2').fadeOut()
      $(this).html('Disable Video')
    }
  })
})
