package com.example.rest.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.rest.Entity.SignupEntity;
import com.example.rest.Entity.UserSignupEntity;
import com.example.rest.Service.SignupService;
import com.example.rest.Service.UserSignupService;
@RestController
@CrossOrigin("http://localhost:3000/")
@RequestMapping("/userlogin")
public class UserLoginController {
	@Autowired 
	UserSignupService ser;
	@GetMapping("/userget")
	private Iterable<UserSignupEntity> GetUsers(){
		return ser.GetAll();
	}
}
