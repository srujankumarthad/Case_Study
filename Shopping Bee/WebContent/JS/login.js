var logindetails = {
	"username": ["srujan", "kumar"],
	"password": ["kumar", "srujan"]
};

// JSON to be sent backend to send appropriate repsonse to other pages
var user = {
  "username": ""
}

$(document).ready(function(){
	$(window).resize(function() {
      if ($(window).width() < 768) {
       $("button").addClass("btn-xs");
   		}
   		else{
   			$("button").removeClass("btn-xs");
   		}
   }); 
	$(window).load(function() {
      if ($(window).width() < 768) {
       $("button").addClass("btn-xs");
   		}
   		else{
   			$("button").removeClass("btn-xs");
   		}
  });

	$('#login-btn').click(function() {
		var x = $('input[name="login_email"]').val();
		var y = $('input[name="login_pwd"]').val();
		for(i=0;i<logindetails["username"].length; i++){
			if (x == logindetails["username"][i] && y==logindetails["password"][i]){
        user["username"] = $('input[name="login_email"]').val();
        window.location.href ="home.jsp"; // go to home.jsp
        return false;
  		}
    }  
    var errormessage = $("#errormessage").text().length;
    if( errormessage == 0) {
    	$("#errormessage").addClass("error-style")
    	$('#errormessage').append('<p class="text-danger" > * The valid username are srujan\
    	(password: kumar) and kumar(password:srujan)</p>');
      $('input[name="login_email"]').val("");
      $('input[name="login_pwd"]').val("");
      return false; // prevent PageReLoad
    }
    else{
      $('input[name="login_email"]').val("");
      $('input[name="login_pwd"]').val("");
      return false; // prevent PageReLoad
    }

  });

});
