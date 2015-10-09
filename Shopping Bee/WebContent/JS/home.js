var user = {
	"username": ""
}

$(document).ready(function(){

	// Replaces the name from login when the username response is given from backend
	if (!user["username"].length == 0){
		var user_name = $('#user').text(' '+user["username"]);
	}

// To prevent reloading the active page on clicking	
$('.active').click(function(){
	event.preventDefault();
	return false;
});
	
});