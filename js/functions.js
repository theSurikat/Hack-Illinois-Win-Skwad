$(document).ready(function() {
  $('.sidebar-button').on('click', function() {
    $('.sidebar-button').removeClass('active');
    $(this).addClass('active');
  });
});
