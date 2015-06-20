 $("#login-button").click(function(event){
		 event.preventDefault();
	 
	 $('form').fadeOut(500);
	 $('.wrapper').addClass('form-success');

	 window.location.href = "http://kpcheckme.azurewebsites.net/dashboard.html";

});

