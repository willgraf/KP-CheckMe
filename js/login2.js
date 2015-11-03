 $("#login-button").click(function(event){
		 event.preventDefault();
	 
	 $('form').fadeOut(500);
	 $('.wrapper').addClass('form-success');
	 window.location.href = "http://willgraf.com/kpcheckme/dashboard.html";

});

