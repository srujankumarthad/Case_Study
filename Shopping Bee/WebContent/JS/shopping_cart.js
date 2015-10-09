

var abc=JSON.parse(localStorage.getItem('cart_list1'));


$(document).ready(function(){
	console.log(abc);
	var nettotal = 0;
	//  Appending products
	for(var key in abc){
		$('.cart_body').append('<tr id='+key+'></tr>');
		$('#'+key).append('<td>'+abc[key]["Product_Name"]+'</td>');
		$('#'+key).append('<td><input type="number" name="quantity" value='+abc[key]["Quantity"]+' min="1" max="10"></input></td>');
		$('#'+key).append('<td>'+abc[key]["Price"]+'</td>');
		var quantity = abc[key]["Quantity"];
		console.log(quantity);
		total = quantity * abc[key]["Price"];
		$('#'+key).append('<td class="total">'+total+'</td>');
		$('#'+key).append('<td class="close-row"><span class="glyphicon glyphicon-remove"></span></td>');
	}

	for(i=0; i<abc.length; i++ ){
		temp = $('#'+i).find('td:eq(3)').text();
		nettotal += parseInt(temp);
		
	}

	$('#net_total').append(''+nettotal);

	// Updating total value on increasing quantity
	$('input[name="quantity"]').change(function(){
			key = $(this).closest('tr').attr('id');
			console.log(key); 
			var quantity = $(this).val();
			abc[key]["Quantity"] = quantity;
			localStorage.setItem('cart_list1',JSON.stringify(abc));

			total = quantity * abc[key]["Price"];
			$('#'+key+' .total').empty();
			$('#'+key+' .total').append(''+total);

			nettotal = 0;

			for(i=0; i<abc.length; i++ ){	
			temp = $('#'+i).find('td:eq(3)').text();
			nettotal += parseInt(temp);
			}
			$('#net_total').empty();
			$('#net_total').append(''+nettotal);
	});



	// back shop fn
	$("#backshopping").click(function(){
		window.location.href ="home.jsp";
	});

	// checkout part
	$("#checkout").click(function(){
		alert ("Cart is Submitted");
		localStorage.clear();
		window.location.href ="thank.jsp";

	});

	// clear the cart
	$("#clear").click(function(){
		 localStorage.clear();
		 window.location.reload();
	});

	// coupun function
	$("#coupon").click(function(){
		$(".form-inline").append('<span class="text-danger"> Invalid Coupon\
		 (Do not bother no coupon works)</span>')
	});

	// deleting a product in table and local storage
	$(".close-row").click(function(){
		del = $(this).parent().attr('id');
		abc.splice(del,1);
		console.log(abc);
		localStorage.setItem('cart_list1',JSON.stringify(abc));
		$(this).parent().remove();
		window.location.reload();
		

	});

});