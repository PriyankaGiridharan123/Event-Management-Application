package com.example.rest.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.rest.Entity.SignupEntity;
import com.example.rest.Entity.UserSignupEntity;
import com.example.rest.Repository.SignupInterRepo;
import com.example.rest.Repository.UserSignupRepo;
@RestController
@CrossOrigin("http://localhost:3000/")
@RequestMapping("/usersignup")
public class UserSignupController {
	@Autowired 
	UserSignupRepo repo;
	@PostMapping("/userpost")
	private UserSignupEntity PostUser(@RequestBody UserSignupEntity s){
		return repo.save(s);
	}
}
