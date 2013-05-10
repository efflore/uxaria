// Toggle sidebars
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

// Fixed header
var headerHeight = $('#header').height();
$('#header + .spacer').css('height', headerHeight);
$('#header').affix({
  offset: {
    top: headerHeight - $('#header .navbar').height()
  }
});

// Fixed footer
var footerHeight = $('#header').height();
$('#footer + .spacer').css('height', footerHeight);
$('#footer').affix({
  offset: {
    bottom: footerHeight - $('#footer .navbar').height()
  }
}).addClass('affix');

// Navigation: go up
$('#nav-back a').on('click', function(e){
  e.preventDefault();
  e.stopPropagation();
  $('#nav .nav-list').removeClass('depth1');
  $(this).text('Uxaria Homepage');
});

// Navigation: show subitems
$('.nav a.children').on('click', function(e){
  e.preventDefault();
  e.stopPropagation();
  $(this).parent().siblings().removeClass('selected')       // deselect previous selected item
    .children('ul.subitems-menu').addClass('hide');         // hide subitems of sibling menuitems
  $(this).parent().addClass('selected');                    // select current item
  $(this).siblings('ul.subitems-menu').removeClass('hide'); // show subitems of selected item
  $(this).closest('.nav-list').addClass('depth1');
  $('#nav-back a').text($(this).text());
});