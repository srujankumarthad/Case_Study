
//var retrievedObject = localStorage.getItem('book_category');
//var abc= JSON.parse(retrievedObject);
//console.log(abc); 

$(document).ready(function(){
//	for( i=0; i<abc["rating"]; i++){
//		$('#star').append('<span class="glyphicon glyphicon-star"></span>');
//	}
//	for( i=abc["rating"]; i<5; i++){
//		$('#star').append('<span class="glyphicon glyphicon-star-empty"></span>');
//	}
//	$('#star').append('<span style="float:right;">Price : &#8377; '+abc["price"]+'/-</span>');
//	$('#description_div').append('<div style="margin-bottom: 5%"><span style="font-size: 1.2em;\
//	 font-weight:bold;"> Publisher: </span><span>'+abc["publisher"]+'</span></div>');
//	$('#description_div').append('<div><h4>More Details:</h4><hr><div >'+abc["details"]+'</div><hr></div>');
//	$('#description_div').append('<div><button type="button" class="btn btn-success" id="addcart"> \
//		Add to Cart </button></div>');

	$('#shoppingback').click(function(){
		window.location.href="books.jsp"
	});
//	$('#addcart').click(function(){
//        var cart_list=JSON.parse(localStorage.getItem('cart_list1')) || [];
//        console.log(cart_list);
//        // cart_list.push(abc);
//        // for(var key in cart_list){
//        // 	if(cart_list[key]["Product_Name"] == abc["Product_Name"]){
//        // 		window.location.href ="shopping_cart.jsp";
//        // 	}
//        // }
//        cart_list.push(abc);
//        localStorage.setItem('cart_list1',JSON.stringify(cart_list));
//        window.location.href ="shopping_cart.jsp";
//	});
});