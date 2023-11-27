package com.example.rest.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.example.rest.Entity.SignupEntity;
import com.example.rest.Repository.SignupInterRepo;
import com.example.rest.Service.SignupService;
@RestController
@CrossOrigin("http://localhost:3000/")
@RequestMapping("/signup")
public class SignupController {
	@Autowired 
	SignupInterRepo repo;
	@PostMapping("/post")
	private SignupEntity PostUser(@RequestBody SignupEntity s){
		return repo.save(s);
	}
}
