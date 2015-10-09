
var retrievedObject = localStorage.getItem('clothing_category');
var abc=JSON.parse(retrievedObject); 

$(document).ready(function(){
	$('#image_div').append('<button type="button" class="btn btn-primary "id="shoppingback"\
	 style="margin-top: 5%;"> <<-- Back to Shopping </button>');
	$('#image_div').append('<div><img src='+abc["img"]+' class="img-thumbnail" \
		id="product-image" style="width: 60%; height:auto; margin-top:5%"  alt="Product Image"></div>');
	$('#description_div').append('<h1 style="font-family: Tangerine, serif !important; \
	 font-size: 4em; font-weight:bold;">'+abc["Product_Name"]+'</h1><hr>');
	$('#description_div').append('<div id="star"> Rating :</div><hr>');
	for( i=0; i<abc["Rating"]; i++){
		$('#star').append('<span class="glyphicon glyphicon-star"></span>');
	}
	for( i=abc["Rating"]; i<5; i++){
		$('#star').append('<span class="glyphicon glyphicon-star-empty"></span>');
	}
	$('#star').append('<span style="float:right;">Price : &#8377; '+abc["Price"]+'/-</span>');
	$('#description_div').append('<div style="margin-bottom: 5%"><span style="font-size: 1.2em;\
	 font-weight:bold;"> Brand: </span><span>'+abc["Brand"]+'</span></div>');
	$('#description_div').append('<div><h4>More Details:</h4><hr><div >'+abc["Details"]+'</div><hr></div>');
	$('#description_div').append('<div><button type="button" class="btn btn-success" id="addcart"> \
		Add to Cart </button></div>');

	$('#shoppingback').click(function(){
		window.location.href="sports.jsp"
	});
	$('#addcart').click(function(){
        var cart_list=JSON.parse(localStorage.getItem('cart_list1')) || [];
        console.log(cart_list);
        // cart_list.push(abc);
        // for(var key in cart_list){
        // 	if(cart_list[key]["Product_Name"] == abc["Product_Name"]){
        // 		window.location.href ="shopping_cart.jsp";
        // 	}
        // }
        cart_list.push(abc);
        localStorage.setItem('cart_list1',JSON.stringify(cart_list));
        window.location.href ="shopping_cart.jsp";
	});
});