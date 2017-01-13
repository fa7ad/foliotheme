$(document).ready(function () {
  $('#progress').css('width', '20%')
})

$('#navbar li > a').on('click', function (e) {
  e.preventDefault()
  var prog = $(this).data('prog')
  var target = $(this).data('target')

  // make the clicked nav active
  $('.active').removeClass('active')
  $(this).addClass('active')

  // make the target section active
  $('.activeSection').removeClass('activeSection')
  $(target).addClass('activeSection')

  $('#progress').css('width', prog)
})
