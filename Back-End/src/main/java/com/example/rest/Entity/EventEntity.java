package com.example.rest.Entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
@Entity
@Table(name="event")
public class EventEntity {
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
private int id;
public int getId() {
	return id;
}
public void setId(int id) {
	this.id = id;
}
public String getName() {
	return name;
}
public void setName(String name) {
	this.name = name;
}
public String getPhone() {
	return phone;
}
public void setPhone(String phone) {
	this.phone = phone;
}
public int getAge() {
	return age;
}
public void setAge(int age) {
	this.age = age;
}
public String getEvent() {
	return event;
}
public void setEvent(String event) {
	this.event = event;
}
public String getDate() {
	return date;
}
public void setDate(String date) {
	this.date = date;
}
public int getNoOfMembers() {
	return noOfMembers;
}
public void setNoOfMembers(int noOfMembers) {
	this.noOfMembers = noOfMembers;
}
public String getVenue() {
	return venue;
}
public void setVenue(String venue) {
	this.venue = venue;
}
private String name;
private String phone;
private int age;
private String event;
private String date;
private int noOfMembers;
private String venue;
}
