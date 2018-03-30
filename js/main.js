$(document).ready(function(){
	$.fn.formObject = function() {

	  var form = {}
	  $.each($(this).serializeArray(), (i, field)=> {
	    form[field.name] = field.value || ""
	  })

	  return form
	}
	var selector= "#contacto"
	$('.modal').modal();

	$("modal-trigger").click(function(){
		$('#modal').modal('open');	
	})

	 var instance = M.Carousel.init({
    fullWidth: true,
    indicators: true
  });

  // Or with jQuery

  $('.carousel.carousel-slider').carousel({
    fullWidth: true,
    indicators: true
  });
        

})
