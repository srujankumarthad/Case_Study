<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<title>Shopping Bee</title>
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css">
<link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family=Open+Sans">
<link rel="stylesheet" type="text/css" href="CSS/login.css">

<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<meta name="description" content="Shopping BEE">
<meta name="keywords" content="Shopping, Shoping bee, Electronics, Books, Sports, Clothing">
<meta name="author" content="Srujan Kumar">
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1, user-scalable=no">
</head>

<body>
<div class="head-position">
	<h5 style="color: white;">Please Enter the Login Details </h5>
</div>
<div class="form-position">
 	<form role="form" action="Login" method="post">
		<div class="form-group">
	    <input type="text" name="username" class="form-control" id="email" placeholder="User Name">
	  </div>
	  <div class="form-group">
	    <input type="password" name="password" class="form-control" id="pwd" placeholder="Password">
	  </div>
	  <div class="checkbox">
	    <label><input type="checkbox" id="checkbox-style">Remember me</label>
	  </div>
	  <div>
	  	<a href="sign_up.jsp">New user? Sign Up</a>
	  </div>
	  <button type="submit" class="btn btn-default" id="login-btn" style="float: right">Log In</button>
	</form>
	<div class="error-style">${errorMessage}</div>
</div>

<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js"></script>
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery-migrate/1.2.1/jquery-migrate.min.js"></script>
<script type="text/javascript"></script>

</body>
</html>