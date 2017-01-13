$(document).ready(
  function () {
    if($("#Nhome").parent(".active").attr('class') == "active") {
      $("section").css("display", "none");
      $("section#home").css("display", "flex");
      $(".active").removeClass('active');
      $("#Nhome").parent().addClass('active');
      $('#progress').css('width', '20%');
    }
  }
);
$("#Nhome").on("click", function(e) {
  e.preventDefault();
  if($("#Nhome").parent(".active").attr('class') != "active") {
    $("section").css("display", "none");
    $("section#home").css("display", "flex");
    $(".active").removeClass('active');
    $("#Nhome").parent().addClass('active');
    $('#progress').css('width', '20%');
  }
});
$("#Nabout").on("click", function(e) {
  e.preventDefault();
  if($("#Nabout").parent(".active").attr('class') != "active") {
    $("section").css("display", "none");
    $("section#about").css("display", "flex");
    $(".active").removeClass('active');
    $("#Nabout").parent().addClass('active');
    $('#progress').css('width', '40%');
  }
});
$("#Nportfolio").on("click", function(e) {
  e.preventDefault();
  if($("#Nportfolio").parent(".active").attr('class') != "active") {
    $("section").css("display", "none");
    $("section#portfolio").css("display", "flex");
    $(".active").removeClass('active');
    $("#Nportfolio").parent().addClass('active');
    $('#progress').css('width', '80%');
  }
});
$("#Ncontact").on("click", function(e) {
  e.preventDefault();
  if($("#Ncontact").parent(".active").attr('class') != "active") {
    $("section").css("display", "none");
    $("section#contact").css("display", "flex");
    $(".active").removeClass('active');
    $("#Ncontact").parent().addClass('active');
    $('#progress').css('width', '100%');
  }
});
