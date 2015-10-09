<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<title>Shopping Bee</title>
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css">
<link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family=Tangerine">
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
	        <li><a href="sports.jsp" class="navmenu active"> Sports</a></li>
	        <li><a href="clothing.jsp" class="navmenu"> Clothing</a></li>
	      </ul>
	      <ul class="nav navbar-nav navbar-right">
	        <li><a href="login.jsp" class="navmenu"><span class="glyphicon glyphicon-user"></span><span id="user">Login/Signup</span></a></li>
	        <li><a href="shopping_cart.jsp" class="navmenu"><span class="glyphicon glyphicon-shopping-cart"></span>My Cart</a></li>
	      </ul>
	    </div>
	  </div>
	</nav>
	<div class="container">
		<div class="row" style="margin-bottom: 5%;">
			<div class="col-xs-12 col-md-6" id="image_div">
			</div>
			<div class="col-xs-12 col-md-6" style="margin-top: 5%;" id="description_div">
		  </div>
		</div>
		<div class="row" style="margin-bottom:10%;">
			<div class="col-xs-12">
				<ul class="nav nav-tabs">
	  			<li class="active"><a data-toggle="tab" href="#review">Add a review of Product</a></li>
				  <li><a data-toggle="tab" href="#tab1">Highest Rated Reviews</a></li>
				  <li><a data-toggle="tab" href="#tab2">Low Rated Reviews</a></li>
				</ul>
				<div class="tab-content">
				  <div id="review" class="tab-pane fade in active">
					  <div class="form-group">
						  <label for="comment">Add a review of Product:</label>
						  <textarea class="form-control" rows="6" id="comment" style="resize:none"></textarea>
						  <button type="submit" class="btn btn-default" style="margin-top:2%;">Submit</button>
						</div> 
				  </div>
				  <div id="tab1" class="tab-pane fade">
					  <div class="form-group">
						  <textarea class="form-control" disabled="true" style="resize:none"> Some Comments</textarea>
						  <textarea class="form-control" disabled="true" style="resize:none"> Some Comments</textarea>
						</div> 
				  </div>
				  <div id="tab2" class="tab-pane fade">
					  <div class="form-group">
						  <textarea class="form-control" disabled="true" style="resize:none"> Some Comments</textarea>
						   <textarea class="form-control" disabled="true" style="resize:none"> Some Comments</textarea>
						</div> 
				  </div>
				</div>
			</div>
		</div>
	</div>


<!-- js files and libraries -->
<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js"></script>
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery-migrate/1.2.1/jquery-migrate.min.js"></script>
<script type="text/javascript" src="JS/clothing_description.js"></script>
</body>
</html>