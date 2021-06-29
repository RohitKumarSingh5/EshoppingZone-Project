package com.eshoppingzone.order.model;

import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection="ordersdb")
public class Orders {
	
	String username;
	String title;
	String image;
	int price;
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public String getImage() {
		return image;
	}
	public void setImage(String image) {
		this.image = image;
	}
	public int getPrice() {
		return price;
	}
	public void setPrice(int price) {
		this.price = price;
	}
	@Override
	public String toString() {
		return "Orders [username=" + username + ", title=" + title + ", image=" + image + ", price=" + price + "]";
	}
	
	
	



}
