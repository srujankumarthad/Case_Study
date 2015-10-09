//user json - response from backend containig the user name
var user = {
	"username": ""
}

// filters JSON - repsonse from backend to populate the filtes
var filters = {
	"Price_Range": ["&#8377; 0 - &#8377; 1000","&#8377; 1000 - &#8377; 5000", "&#8377; 5000 - &#8377; 10000", "&#8377; 10000 - &#8377; 50000", "&#8377; 50000 +"],
	"Brand" : ["Brand1", "Brand2", "Brand3"],
	"Rating" : [1, 2, 3, 4, 5]
};

// prodcutInfo JSON - response from backend with details of products to display
var productInfo = {
	"electronic1" : {
		"Product_Name": "Electronic 1",
		"img" : "images/app1.png",
		"Brand" : "Brand1",
		"Price" : 20000,
		"Price_Range" : "10000-50000",
		"Rating" : 1,
		"Details" : "blah blah \
		blah blah blah, this product is this and its that. It is good. You cannot\
		 find a better than this.",
		"Quantity" : 1
	},
	"electronic2" : {
		"Product_Name": "Electronic 2",
		"img" : "images/app1.png",
		"Brand" : "Brand2",
		"Price" : 300,
		"Price_Range" : "0-1000",
		"Rating" : 2,
		"Details" : "blah blah \
		blah blah blah, this product is this and its that. It is good. You cannot\
		 find a better than this.",
		 "Quantity" : 1
	},
	"electronic3" : {
		"Product_Name": "Electronic 3",
		"img" : "images/app1.png",
		"Brand" : "Brand3",
		"Price" : 2000,
		"Price_Range" : "1000-5000",
		"Rating" : 3,
		"Details" : "blah blah \
		blah blah blah, this product is this and its that. It is good. You cannot\
		 find a better than this.",
		 "Quantity" : 1
	},
	"electronic4" : {
		"Product_Name": "Electronic 4",
		"img" : "images/app1.png",
		"Brand" : "Brand1",
		"Price" : 8000,
		"Price_Range" : "5000-10000",
		"Rating" : 4,
		"Details" : "blah blah \
		blah blah blah, this product is this and its that. It is good. You cannot\
		 find a better than this.",
		 "Quantity" : 1
	},
	"electronic5" : {
		"Product_Name": "Electronic 5",
		"img" : "images/app1.png",
		"Brand" : "Brand2",
		"Price" : 30000,
		"Price_Range" : "10000-50000",
		"Rating" : 5,
		"Details" : "blah blah \
		blah blah blah, this product is this and its that. It is good. You cannot\
		 find a better than this.",
		 "Quantity" : 1
	},
	"electronic6" : {
		"Product_Name": "Electronic 6",
		"img" : "images/app1.png",
		"Brand" : "Brand3",
		"Price" : 7000,
		"Price_Range" : "5000-10000",
		"Rating" : 1,
		"Details" : "blah blah \
		blah blah blah, this product is this and its that. It is good. You cannot\
		 find a better than this.",
		 "Quantity" : 1
	},
	"electronic7" : {
		"Product_Name": "Electronic 7",
		"img" : "images/app1.png",
		"Brand" : "Brand1",
		"Price" : 700,
		"Price_Range" : "0-1000",
		"Rating" : 2,
		"Details" : "blah blah \
		blah blah blah, this product is this and its that. It is good. You cannot\
		 find a better than this.",
		 "Quantity" : 1
	},
	"electronic8" : {
		"Product_Name": "Electronic 8",
		"img" : "images/app1.png",
		"Brand" : "Brand2",
		"Price" : 8000,
		"Price_Range" : "5000-10000",
		"Rating" : 3,
		"Details" : "blah blah \
		blah blah blah, this product is this and its that. It is good. You cannot\
		 find a better than this.",
		 "Quantity" : 1
	},
	"electronic9" : {
		"Product_Name": "Electronic 9",
		"img" : "images/app1.png",
		"Brand" : "Brand3",
		"Price" : 111000,
		"Price_Range" : "50000-plus",
		"Rating" : 4,
		"Details" : "blah blah \
		blah blah blah, this product is this and its that. It is good. You cannot\
		 find a better than this.",
		 "Quantity" : 1
	},
};




$(document).ready(function(){

	console.log(productInfo["product1"]);


	// Replaces the name from login when the username response is given from backend
	if (!user["username"].length == 0){
		var user_name = $('#user').text(' '+user["username"]);
	}
	// To prevent reloading the active page on clicking
	$('.active').click(function(){
	event.preventDefault();
	return false;
});

	// Populating filters
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
						name="brand" value='+filters[key][i]+'>'+filters[key][i]+'</li>');
				}
		}
	}
	// End of populating filters part

	// Hiding the filters tab when for sm size screens;
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




	// Catalog items populating
	for (var key in productInfo){
		$("#catalog").append('<div class="col-xs-12 col-sm-6 col-md-4 catalog-items img-thumbnail" id='+key+'></div>');
		for(var anotherkey in productInfo[key]){
			if(anotherkey == "Product_Name"){
				$('#'+key).append('<h4 class="text-center">'+productInfo[key][anotherkey]+'</h4>');
			}
			else if (anotherkey == "img"){
				$('#'+key).append('<img src='+productInfo[key][anotherkey]+' style="width:80%; height: auto; margin-left: 30px;">');	
			}
			else if(anotherkey == "Brand"){
				var data_value = "everyitem " + productInfo[key][anotherkey];
				$('#'+key).append('<div class="text-center">'+productInfo[key][anotherkey]+'</div>');
				}
			else if(anotherkey == "Price_Range"){
				data_value += " " +productInfo[key][anotherkey];

			}	
			else{
				 if ( anotherkey == "Price"){
				 	$('#'+key).append('<div id='+key+'bottom><span style="float:right"> Price: &#8377;'+productInfo[key][anotherkey]+'/-</span></div>');
				}
				else if ( anotherkey == "Rating"){
					data_value += " " +productInfo[key][anotherkey];
					for(i=0; i< productInfo[key][anotherkey]; i++){
					$('#'+key+'bottom').append('<span class="glyphicon glyphicon-star"></span>');
					}
					for(i= productInfo[key][anotherkey]; i<5; i++){
					$('#'+key+'bottom').append('<span class="glyphicon glyphicon-star-empty"></span>');
					}
				}
			}
		}
	console.log(data_value);
	$('#'+key).attr('data-detail',data_value);

	// $('#'+key).append('<div class="text-center"><button type="button" class="btn btn-default btn-sm \
	// 	cartbtn addcart" style="margin-bottom: 5px;"> Add to Cart >> </button</div>')
	}
	// End of populating selected catalog items


	// filter functions
	$('#filter_panel').change(function(){
		var selected;
		var selected_price = [];
		var selected_brand = [];
		var selected_rating = [];
		$('#Price_Range input:checked').each(function(){
	      		var selected = $(this).val();
	      		selected_price.push(selected); 
	    		});
		console.log(selected_price);
		$('#Brand input:checked').each(function(){
	      		var selected= $(this).val();
	      		selected_brand.push(selected); 
	    		});
		console.log(selected_brand);
		$('#Rating input:checked').each(function(){
	      		var selected= $(this).val();
	      		selected_rating.push(selected); 
	    		});
		console.log(selected_rating);
		if(selected_price.length==0){
	    selected_price=["everyitem"];
		}
		if(selected_brand.length==0){
			selected_brand=["everyitem"];
		}
		if(selected_rating.length==0){
			selected_rating=["everyitem"];
		}
		$('.catalog-items').each(function(){
			var cats=$(this).data('detail').split(' ');
    		var checkMatches1=$.grep(selected_price, function(checkItems){                
       		 return $.inArray(checkItems, cats) >-1;
   			 }); 
    		var checkMatches2=$.grep(selected_brand, function(checkItems){                
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
	
	// To Open Product Description Page
	$('.catalog-items').click(function(){
		var item = $(this).attr('id');
		console.log(item);
		localStorage.setItem('electronics_category', JSON.stringify(productInfo[item]));
		window.location.href ="electronics_description.jsp";
		
	});


	
});