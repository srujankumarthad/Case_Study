$(document).ready(function(){
var user="Login";
newuser=$('input[name="login_email"]').val();
$("#username").jsp(''+ user);
if(!newuser==""){
	$("#username").jsp(''+ newuser);
}
$('#login-btn').click(function() {
	alert("dfgf");
});




});