package com.shoppingbee.objects;

public class Book {
	private int productId;
	private String productName;
	private String image;
	private String publisher;
	private int price;
	private String priceRange;
	private int rating;
	private String details;
	private int quantity;
	
	public void setProductId(int productId){
		this.productId = productId;
	}
	public int getProductId(){
		return productId;
	}
	
	public void setProductName(String productName){
		this.productName = productName;
	}
	public String getProductName(){
		return productName;
	}
	
	public void setImage(String image){
		this.image = image;
	}
	public String getImage(){
		return image;
	}
	
	public void setPublisher(String publisher){
		this.publisher = publisher;
	}
	public String getPublisher(){
		return publisher;
	}
	
	public void setPrice(int price){
		this.price = price;
	}
	public int getPrice(){
		return price;
	}
	
	public void setPriceRange(String priceRange){
		this.priceRange = priceRange;
	}
	public String getPriceRange(){
		return priceRange;
	}
	
	public void setRating(int rating){
		this.rating = rating;
	}
	public int getRating(){
		return rating;
	}
	
	public void setDetails(String details){
		this.details = details;
	}
	public String getDetails(){
		return details;
	}
	
	public void setQuantity(int quantity){
		this.quantity = quantity;
	}
	public int getQuantity(){
		return quantity;
	}
}
