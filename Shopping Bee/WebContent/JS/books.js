// filters JSON - response from back end to populate the filters
var filters = {
	"Price_Range": ["&#8377; 0 - &#8377; 1000","&#8377; 1000 - &#8377; 5000", "&#8377; 5000 - &#8377; 10000", "&#8377; 10000 - &#8377; 50000", "&#8377; 50000 +"],
	"Publisher" : ["Publisher1", "Publisher2", "Publisher3"],
	"Rating" : [1, 2, 3, 4, 5]
};

var productInfo = {}; // prodcutInfo JSON - response from back end

function catalogue_populator(productInfo){
	for (var key in productInfo){
		$("#catalog").append('<div class="col-xs-12 col-sm-6 col-md-4 catalog-items img-thumbnail" id="book'+key+'"></div>');
		for(var anotherkey in productInfo[key]){
			if(anotherkey == "productName"){
				$('#book'+key).append('<h4 class="text-center">'+productInfo[key][anotherkey]+'</h4>');
			}
			else if (anotherkey == "image"){
				$('#book'+key).append('<img src='+productInfo[key][anotherkey]+' style="width:40%; height: auto; margin-left: 30%;">');	
			}
			else if(anotherkey == "publisher"){
				var data_value = "everyitem " + productInfo[key][anotherkey];
				$('#book'+key).append('<div class="text-center">'+productInfo[key][anotherkey]+'</div>');
				}
			else if(anotherkey == "priceRange"){
				data_value += " " +productInfo[key][anotherkey];

			}	
			else{
				 if ( anotherkey == "price"){
				 	$('#book'+key).append('<div id="book'+key+'bottom"><span style="float:right"> Price: &#8377;'+productInfo[key][anotherkey]+'/-</span></div>');
				}
				else if ( anotherkey == "rating"){
					data_value += " " +productInfo[key][anotherkey];
					for(i=0; i< productInfo[key][anotherkey]; i++){
					$('#book'+key+'bottom').append('<span class="glyphicon glyphicon-star"></span>');
					}
					for(i= productInfo[key][anotherkey]; i<5; i++){
					$('#book'+key+'bottom').append('<span class="glyphicon glyphicon-star-empty"></span>');
					}
				}
			}
		}
	console.log(data_value);
	$('#book'+key).attr('data-detail',data_value);

	
	}
}
function filter_populator(filters){
	for( var key in filters){
		if (key == "Price_Range"){
			var title = "Price Range"
			$("#filter_panel").append('<div class="panel-heading" style="border-radius : 0px !important;">'+title+'</div>');
			$("#filter_panel").append('<div class="panel-body" id=panel_'+key+'></div>');
			$('#panel_'+key).append('<ul class="list-group" id='+key+'></ul');
			for(i=0; i<filters[key].length; i++){
				min = filters[key][i].split(" ")[1];
				max = filters[key][i].split(" ")[4];
				if(max == undefined){
					max = "plus";
				}
				$('#'+key).append('<li class="list-group-item '+key+'"> <input type="checkbox"\
					name="price" value='+min+'-'+max+'>'+filters[key][i]+'</li>');
			}
		}
		else if (key == "Rating"){
			var title = key;
			$("#filter_panel").append('<div class="panel-heading" style="border-radius : 0px !important;">'+title+'</div>');
			$("#filter_panel").append('<div class="panel-body" id=panel_'+key+'></div>');
			$('#panel_'+key).append('<ul class="list-group" id='+key+'></ul');
			var star='<span class="glyphicon glyphicon-star"></span>';
			var star2='<span class="glyphicon glyphicon-star-empty"></span><span class="glyphicon glyphicon-star-empty"></span><span class="glyphicon glyphicon-star-empty"></span><span class="glyphicon glyphicon-star-empty"></span>';
			for(i=0; i<filters[key].length; i++){
				$('#'+key).append('<li class="list-group-item '+key+'"><input type="checkbox"\
					name="rating" value='+filters[key][i]+'>'+star+star2+'</li>');
				star += '<span class="glyphicon glyphicon-star"></span>';
				star2 = star2.replace('<span class="glyphicon glyphicon-star-empty"></span>','');

			}
		}

		else {
			var title = key;
			$("#filter_panel").append('<div class="panel-heading" style="border-radius : 0px !important;">'+title+'</div>');
			$("#filter_panel").append('<div class="panel-body" id=panel_'+key+'></div>');
			$('#panel_'+key).append('<ul class="list-group" id='+key+'></ul');
				for(i=0; i<filters[key].length; i++){
					$('#'+key).append('<li class="list-group-item '+key+'"> <input type="checkbox"\
						name="publisher" value='+filters[key][i]+'>'+filters[key][i]+'</li>');
				}
		}
	}
}
function filter_resize(){
	 $(window).resize(function(){
	    	if ($(window).width() < 768) {
	       		$("#filter_panel").hide("fast");
	   		}
	   		if ($(window).width() > 769){
	   			$("#filter_panel").show("fast");
	   		}
	    });
	    if ($(window).width() < 768) {
	       		$("#filter_panel").hide("fast");
	   		}
	   		if ($(window).width() > 769){
	   			$("#filter_panel").show("fast");
	   		}

		$("#filter-bar").click(function(){
			$("#filter_panel").slideToggle("slow");
		});
}
function filter_function(){
	$('#filter_panel').change(function(){
		var selected;
		var selected_price = [];
		var selected_publisher = [];
		var selected_rating = [];
		$('#Price_Range input:checked').each(function(){
	      		var selected = $(this).val();
	      		selected_price.push(selected); 
	    		});
		console.log(selected_price);
		$('#Publisher input:checked').each(function(){
	      		var selected= $(this).val();
	      		selected_publisher.push(selected); 
	    		});
		console.log(selected_publisher);
		$('#Rating input:checked').each(function(){
	      		var selected= $(this).val();
	      		selected_rating.push(selected); 
	    		});
		console.log(selected_rating);
		if(selected_price.length==0){
	    selected_price=["everyitem"];
		}
		if(selected_publisher.length==0){
			selected_publisher=["everyitem"];
		}
		if(selected_rating.length==0){
			selected_rating=["everyitem"];
		}
		$('.catalog-items').each(function(){
			var cats=$(this).data('detail').split(' ');
    		var checkMatches1=$.grep(selected_price, function(checkItems){                
       		 return $.inArray(checkItems, cats) >-1;
   			 }); 
    		var checkMatches2=$.grep(selected_publisher, function(checkItems){                
       		 return $.inArray(checkItems, cats) >-1;
   			 }); 
    		var checkMatches3=$.grep(selected_rating, function(checkItems){                
       		 return $.inArray(checkItems, cats) >-1;
   			 });
    		if(checkMatches1.length!==0 && checkMatches2.length!==0 && checkMatches3.length!==0){
    			$(this).show();
    		}
    		else{
    			$(this).hide();
    		}
    	});
	});
}
function product_id(){
	$('.catalog-items').click(function(){
		var item = $(this).attr('id');
		console.log(item[item.length-1]);
		item = item[item.length-1];
		window.location = "/Shopping_Bee/BookDescription?product_id="+productInfo[item]["productId"];
//		$.ajax({
//			url:"/Shopping_Bee/BookDescription",
//			type:"post",
//			data:{"product_id":productInfo[item]["productId"]},
//			success: function(data){
//				alert("data")
//				//window.location = "book_description.jsp"
//			}
//		})
		
	});
}


$(document).ready(function(){
	
	$.ajax({
		url:"/Shopping_Bee/Catalogue",
		type:"get",
		data: {"product_type":"books"},
		success: function(data){
			console.log(data);
			productInfo = data;
			catalogue_populator(productInfo);
			product_id();
		},
		error: function(){
			alert("Error in loading the products");
		}
	})

	console.log(productInfo);
	
	// To prevent reloading the active page on clicking
	$('.active').click(function(){
	event.preventDefault();
	return false;
	});

	filter_populator(filters);// filter populator function
	filter_resize();// Hiding the filters tab for sm size screens;
	filter_function();//filter functions
	
	
});

