// Toggle navigation
$('a.sidebar-toggle').on('click', function(e){
  e.preventDefault();
  e.stopPropagation();
  var target = $(this).attr('aria-controls');
  $('body').toggleClass(target + '-open');
});

// Remove overlay
$('#page-overlay').on('click', function(e){
  e.stopPropagation();
  $('body').removeAttr('class');
});

// Toggle fixed navbars
$('#wrapper').on('click', function(){
  $('body').toggleClass('navbars-hidden');
});