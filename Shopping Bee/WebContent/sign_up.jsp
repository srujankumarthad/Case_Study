<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<title>Shopping Bee</title>
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css">
<link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family=Open+Sans">
<link rel="stylesheet" type="text/css" href="CSS/catalog.css">

<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<meta name="description" content="Shopping BEE">
<meta name="keywords" content="Shopping, Shoping bee, Electronics, Books, Sports, Clothing">
<meta name="author" content="Srujan Kumar">
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1, user-scalable=no">
</head>
<body>
	<!-- navbar -->
	<nav class="navbar navbar-inverse navbar-fixed-top background" >
	  <div class="container">
	    <div class="navbar-header">
	    	<button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar" style="background-color:black;">
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
	      <a class="navbar-brand fancy-font" href="#"><span><img src="images/bee-shopping-16227944.jpg" style="width:30px; height: 30px; margin-top: -5px;"></span></a>
	    </div>
	    <div class="collapse navbar-collapse" id="myNavbar">
	    	<ul class="nav navbar-nav">
	        <li><a href="home.jsp" class="navmenu">Home</a></li>
	        <li><a href="electronics.jsp" class="navmenu"> Electronics</a></li>
	        <li><a href="books.jsp" class="navmenu"> Books</a></li>
	        <li><a href="sports.jsp" class="navmenu"> Sports</a></li>
	        <li><a href="clothing.jsp" class="navmenu"> Clothing</a></li>
	      </ul>
	      <ul class="nav navbar-nav navbar-right">
	        <li><a href="login.jsp" class="navmenu active"><span class="glyphicon glyphicon-user"></span><span id="user">Login/Signup</span></a></li>
	        <li><a href="shopping_cart.jsp" class="navmenu"><span class="glyphicon glyphicon-shopping-cart"></span>My Cart</a></li>
	      </ul>
	    </div>
	  </div>
	</nav>
	<div class="container-fluid">
		<div class="row">
			<div class="col-md-6" style='background-image: url("images/bee-shopping-16227944.jpg"); background-size:cover;'></div>
			<div class="col-md-6">
			<h2>Create an Account</h2>
			<form role="form" action="SignUp" method="post">
			<div class="form-group">
				<input type="text" name="first_name" class="form-control" placeholder="Your First Name" required>		
			</div>
			<div class="form-group">
				<input type="text" name="last_name" class="form-control" placeholder="Your Last Name" required>		
			</div>
			<div class="form-group">
				<input type="email" name="email" class="form-control" placeholder="Your Email Address" required>		
			</div>
			<div class="form-group">
				<input type="text" name="username" class="form-control" placeholder="Choose your username" required>		
			</div>
			<div class="form-group">
				<input type="password" name="password" class="form-control" placeholder="Choose your password" required>		
			</div>
			<div class="form-group">
				<input type="password" name="re_password" class="form-control" placeholder="Please Enter the Password again" required>		
			</div>
			<div>Gender:</div>
			<div class="radio">
	    		<label><input type="radio" name="gender" value="male" required>Male</label>
	  		</div>
	  		<div class="radio">
	    		<label><input type="radio" name="gender" value="female" required>Female</label>
	  		</div>
	  		<div>Date of Birth:</div>
	  		<div class="form-group">
	    		<input type="date" class="from-control" name="dob" placeholder="dd/mm/yyyy">
	  		</div>
			<div class="form-group">
			<input type="text" name="phone_number" class="form-control"  pattern="[0-9]{10}" placeholder="Your phone number(10-digit number)">		
			</div>
			<label for="Address">
			<textarea name="address" class="form-control" cols="50" rows="5" placeholder="Your address here" style="resize:none;"></textarea>
			</label>
			<div class="form-group">
				<button type="submit" class="btn btn-default">Sign Up</button>
			</div>
			<div class="text-warning">${errorMessage}</div>
			</form>
			</div>
		</div>
	</div>
	
	
<!-- js files and libraries -->
<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js"></script>
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery-migrate/1.2.1/jquery-migrate.min.js"></script>
<script type="text/javascript" ></script>
</body>
</html>