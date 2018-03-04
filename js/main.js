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

	$(selector).on("submit",function(ev){
		ev.preventDefault()

		sendForm($(this))

		return false		
	})

	function sendForm(){
		var $form = $(selector)
		$.ajax({
		    url: $form.attr("action"), 
		    method: "POST",
		    data: $form.formObject(),
		    dataType: "json",
		    success:function(){		    	
		    	$("#info-contact").html("Enviamos tu mensaje, pronto nos pondremos en contacto contigo")
		    	$(selector).trigger("reset");
		    }
		})
	}

})
