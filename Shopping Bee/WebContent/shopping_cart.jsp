<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<title>Shopping Bee</title>
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css">
<link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family=Tangerine">
<link rel="stylesheet" type="text/css" href="CSS/catalog.css">
<link rel="stylesheet" type="text/css" href="CSS/shopping_cart.css"> 

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
	        <li><a href="login.jsp" class="navmenu"><span class="glyphicon glyphicon-user"></span><span id="user">Login/Signup</span></a></li>
	        <li><a href="shopping_cart.jsp" class="navmenu active"><span class="glyphicon glyphicon-shopping-cart"></span>My Cart</a></li>
	      </ul>
	    </div>
	  </div>
	</nav>
	<!-- Cart Page -->
	<h1 class="text-center" style="font-family: 'Tangerine', serif !important; font-size: 4em; font-weight:bold; margin-top: 5%;"> Cart Details </h1>
		<div class="container">
	    <table class="table table-striped table-hover cart_table col-xs-12">
	      <thead>
	        <tr>
	          <th>Name of the Product</th>
	          <th>Quantity</th>
	          <th>Price</th>
	          <th>Total</th>
	          <th>Remove</th>
	        </tr>
	      </thead>
	      <tbody class="cart_body">
	      </tbody>
	      <tfoot>
	        <tr class="cart_total">
	          <td colspan="2">Total</td>
	          <td></td>
	          <td id="net_total"></td>
	          <td></td>
	        </tr>
	      </tfoot>
	    </table>
	    <button type ="button" class="btn btn-success" id="backshopping">Back to Shopping</button>
	    <button type="button" class="btn btn-success pull-right" id="checkout">Proceed to checkout</button>
	    <button type="button" class="btn btn-default" style="margin-left:5%;" id="clear"> Clear Cart </button>
	    <div style="margin-top:10%; margin-bottom:10%; border:1px solid black; padding:2%;" class="form-inline">
	    	<button type ="button" class="btn btn-warning" id="coupon" > Apply Coupon </button>
	    	<input type = "text" name="discount" size="10" maxlength="6"  class="form-control">
	    </div>
  	</div>


<!-- js files and libraries -->
<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js"></script>
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery-migrate/1.2.1/jquery-migrate.min.js"></script>
<script type="text/javascript" src="JS/shopping_cart.js"></script>
</body>
</html>