$.whatsappChat('#whatsapp', {
  
});

// popup

$('#button-whatsapp').click(function(){
  $('.popup').toggleClass('active');
})

$('.popup__close').click(function(){
  $('.popup').removeClass('active');
})

// fontes

WebFontConfig = {
	google: { 
  	families: ['Lato:400']
  }
};

(function() {
	var wf = document.createElement('script');
	wf.src = ('https:' == document.location.protocol ? 'https' : 'http') +
		'://ajax.googleapis.com/ajax/libs/webfont/1.5.18/webfont.js';
  wf.type = 'text/javascript';
  wf.async = 'true';
  var s = document.getElementsByTagName('script')[0];
  s.parentNode.insertBefore(wf, s);
})();