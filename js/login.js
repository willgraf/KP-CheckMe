 $("#login-button").click(function(event){
		 event.preventDefault();
	 
	 alert("Note: You may be contacted by Kaiser, if your symptoms are severe!");
	 $('form').fadeOut(500);
	 $('.wrapper').addClass('form-success');
	 window.location.href = "http://kpcheckme.azurewebsites.net/results.html";

});

