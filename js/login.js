 $("#login-button").click(function(event){
		 event.preventDefault();
	 
	 $('form').fadeOut(500);
	 $('.wrapper').addClass('form-success');
	 alert("Note: You may be contacted by Kaiser, if your symptoms are severe!")
	 window.location.href = "http://kpcheckme.azurewebsites.net/results.html";

});

